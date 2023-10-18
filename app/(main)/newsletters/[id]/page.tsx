import { eq } from 'drizzle-orm'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { Container } from '~/components/ui/Container'
import { db } from '~/db'
import { newsletters } from '~/db/schema'

async function getNewsletter(id: string) {
  const [newsletter] = await db
    .select()
    .from(newsletters)
    .where(eq(newsletters.id, parseInt(id)))

  if (!newsletter || !newsletter.body) {
    notFound()
  }

  return newsletter
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const newsletter = await getNewsletter(params.id)

  return {
    title: newsletter.subject,
    description: newsletter.subject,
  } satisfies Metadata
}

export default async function NewsletterRenderPage({
  params,
}: {
  params: { id: string }
}) {
  const newsletter = await getNewsletter(params.id)

  if (!newsletter.body) {
    return null
  }

  return (
    <Container className="mt-16">
      <article className="prose mx-auto max-w-[500px] dark:prose-invert">
        <ReactMarkdown>{newsletter.body}</ReactMarkdown>
      </article>
    </Container>
  )
}

export const revalidate = 3600

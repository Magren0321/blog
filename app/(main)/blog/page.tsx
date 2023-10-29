import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '人生的阵痛期往往伴随着更强的内容创作欲望'

// TODO: add pagination or infinite scroll and categories
export default function BlogPage() {
  // const categories =  [...new Set((await getLatestBlogPosts({ limit: 99999, forDisplay: true }))
  //   .map(({ categories }) => categories)
  //   .flat())]
  
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          📚 My Blog
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={9999} />
      </div>
    </Container>
  )
}

export const revalidate = 60

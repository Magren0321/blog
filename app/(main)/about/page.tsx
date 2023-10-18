import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

const description =
  '一片树林分出两条路 —— 而我选择了人迹更少的一条，从此决定了我一生的道路。'

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          👋 About Me
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        
      </div>
    </Container>
  )
}

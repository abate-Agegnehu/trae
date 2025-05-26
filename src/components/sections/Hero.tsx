'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-600">
      <motion.div initial="initial" animate="animate" variants={stagger} className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div variants={fadeIn} className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I’m <span className="text-primary-600">Abate</span>
            </h1>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-600 dark:text-gray-400">
              Full-Stack Developer & Backend Specialist
            </h2>
          </motion.div>

          <motion.p variants={fadeIn} className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Building robust and scalable applications with modern technologies. Specializing in Next.js, Node.js, and cloud architecture.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div variants={fadeIn} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

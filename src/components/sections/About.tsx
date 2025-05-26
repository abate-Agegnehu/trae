'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const timelineData = [
  {
    year: '2023',
    title: 'Senior Full Stack Developer',
    description: 'Leading development of enterprise applications using Next.js and Node.js',
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    description: 'Building scalable web applications with React and TypeScript',
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    description: 'Developing responsive web interfaces using modern JavaScript frameworks',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function About() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-gray-600" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-8">
            I’m a passionate full-stack developer with expertise in building modern web applications. 
            I specialize in Next.js, React, Node.js, and TypeScript, focusing on creating performant 
            and scalable solutions.
          </motion.p>

          <motion.div variants={containerVariants} className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary-600 font-semibold">{item.year}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

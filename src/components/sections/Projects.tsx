'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with Next.js and Stripe integration',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    details: `A comprehensive e-commerce platform built with Next.js 13 and TypeScript. Features include:

• Server-side rendering for optimal performance
• Stripe integration for secure payments
• Responsive design with Tailwind CSS
• User authentication and authorization
• Product management system
• Order tracking and history`
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS',
    image: '/projects/project2.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/example/portfolio',
    details: `A responsive portfolio website showcasing my projects and skills. Features include:

• Server-side rendering for SEO optimization
• Smooth animations with Framer Motion
• Dark mode support
• Responsive design for all devices
• Contact form integration
• Project showcase with filtering`
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: '/projects/project3.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com/taskapp',
    githubUrl: 'https://github.com/example/taskapp',
    details: `A real-time task management application for teams. Features include:

• Real-time updates with Socket.io
• User authentication and team management
• Task creation, assignment, and tracking
• Project organization and categorization
• Due date reminders and notifications
• Activity history and reporting`
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-gray-600" id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

interface Skill {
  category: string
  technologies: {
    name: string
    proficiency: number
  }[]
}

const skills: Skill[] = [
  {
    category: 'MERN Stack',
    technologies: [
      { name: 'MongoDB', proficiency: 90 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'React', proficiency: 95 },
      { name: 'Node.js', proficiency: 90 },
      { name: 'Redux', proficiency: 85 },
      { name: 'TypeScript', proficiency: 90 }
    ]
  },
  {
    category: 'Spring Boot',
    technologies: [
      { name: 'Java', proficiency: 90 },
      { name: 'Spring Boot', proficiency: 85 },
      { name: 'Spring Cloud', proficiency: 80 },
      { name: 'JPA/Hibernate', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 85 },
      { name: 'Maven/Gradle', proficiency: 80 }
    ]
  },
  {
    category: 'DevOps',
    technologies: [
      { name: 'Docker', proficiency: 90 },
      { name: 'Kubernetes', proficiency: 85 },
      { name: 'Jenkins', proficiency: 80 },
      { name: 'AWS', proficiency: 85 },
      { name: 'Terraform', proficiency: 80 },
      { name: 'Ansible', proficiency: 75 }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function Skills() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-gray-600" id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in modern web development technologies and DevOps practices,
            with expertise in MERN Stack, Spring Boot, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.technologies.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{tech.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-primary-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
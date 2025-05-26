'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Abate</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-foreground/80">About</Link>
          <Link href="/skills" className="hover:text-foreground/80">Skills</Link>
          <Link href="/projects" className="hover:text-foreground/80">Projects</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
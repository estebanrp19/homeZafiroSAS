"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/oportunidad", label: "Oportunidad" },
  { href: "/formacion", label: "Formación" },
  { href: "/equipo", label: "Equipo" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-medium tracking-tight">
            Home Zafiro SAS
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-full px-6">
              <Link href="/contacto">
                Contacto
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button className="md:hidden p-2 -mr-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide py-2 transition-colors ${
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-full mt-4">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Contacto
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

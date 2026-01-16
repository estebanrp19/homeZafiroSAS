import Link from "next/link"

const footerLinks = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/oportunidad", label: "Oportunidad" },
    { href: "/formacion", label: "Formación" },
    { href: "/equipo", label: "Equipo" },
  ],
  recursos: [
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/contacto", label: "Contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-medium tracking-tight">
              Home Zafiro SAS
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Distribuidor autorizado de Royal Prestige. Formamos asesores independientes en ventas premium con una marca de
              prestigio internacional.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Home Zafiro SAS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

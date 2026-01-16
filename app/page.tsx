import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const features = ["Formación continua", "Cultura de alto desempeño", "Trabajo en equipo", "Reconocimiento y desarrollo"]

const testimonials = [
  {
    quote:
      "Empecé buscando un ingreso extra que pudiera compaginar con la universidad. Encontré una oportunidad flexible, rentable y alineada con mi crecimiento profesional.",
    author: "Juan Perez",
    role: "Asesor de ventas",
  },
  {
    quote:
      "Lo que más valoro es la cultura y la formación constante. Aquí el esfuerzo se reconoce, se celebra y te impulsa a seguir creciendo.",
    author: "Sara López",
    role: "Asesor de ventas",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">Home Zafiro SAS</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-balance">
              Desarrolla una carrera comercial con una marca de prestigio
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Formamos y acompañamos asesores independientes en ventas premium a través de un modelo probado basado en
              liderazgo y resultados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contacto">
                  Aplicar como Asesor de Ventas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                <Link href="/oportunidad">Conocer más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Quiénes Somos</p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Una organización dedicada al desarrollo de asesores comerciales
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Nuestro objetivo es abrir oportunidades profesionales reales para personas con actitud emprendedora que
                buscan crecimiento, ingresos competitivos y liderazgo.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="mt-8 px-0">
                <Link href="/oportunidad">
                  Ver la oportunidad
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img src="/001.jpeg" alt="Equipo profesional" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight max-w-xl">Historias de quienes ya son parte</h2>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-t border-border pt-8">
                <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-2xl mx-auto">
            ¿Listo para comenzar tu carrera comercial?
          </h2>
          <p className="mt-6 text-primary-foreground/70 max-w-lg mx-auto">
            Postúlate y agenda una entrevista con nuestro equipo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="/contacto">
                Aplicar como Distribuidor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contacto">Agenda tu Entrevista</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

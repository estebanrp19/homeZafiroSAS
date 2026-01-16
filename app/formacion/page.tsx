import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Formación - Home Zafiro SAS",
  description: "Conoce nuestro programa de formación y acompañamiento para asesores comerciales.",
}

const trainingTopics = [
  "Manejo del proceso comercial",
  "Técnicas de cierre",
  "Comunicación efectiva",
  "Asesoría al cliente",
  "Presentaciones",
  "Liderazgo y trabajo en equipo",
  "Procesos de seguimiento",
]

const growthBenefits = [
  { title: "Construir estructura propia", description: "Desarrolla tu propio equipo comercial" },
  { title: "Posiciones de liderazgo", description: "Escala a roles de mayor responsabilidad" },
  { title: "Mayor reconocimiento", description: "Obtén reconocimientos por tus logros" },
  { title: "Eventos y viajes", description: "Participa en viajes corporativos" },
  { title: "Capacidades directivas", description: "Desarrolla habilidades de gestión" },
]

export default function FormacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">Formación</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              Formación y acompañamiento completo
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo incorpora a cada asesor a un programa de formación diseñado para desarrollar todas las
              habilidades necesarias para el éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">Programa de formación</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Cada nuevo distribuidor cuenta con acompañamiento directo durante su fase de inicio y desarrollo. No
                necesitas experiencia previa.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {trainingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Plan */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-xl mb-16">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Plan de Crecimiento</p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">Aquí no solo vendes: creces</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nuestro modelo permite un crecimiento continuo. No es un trabajo estático — es una carrera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthBenefits.map((benefit, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contacto">
                Comenzar mi carrera
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

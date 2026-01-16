import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Clock, TrendingUp, Users, Award, Plane } from "lucide-react"

export const metadata = {
  title: "Oportunidad - Home Zafiro SAS",
  description: "Descubre la oportunidad de construir una carrera comercial sólida con Home Zafiro SAS.",
}

const benefits = [
  {
    icon: GraduationCap,
    title: "Desarrollo de habilidades",
    description: "Capacitación en habilidades comerciales y comunicación efectiva",
  },
  {
    icon: Clock,
    title: "Libertad de horarios",
    description: "Autonomía operativa y flexibilidad en tu agenda",
  },
  {
    icon: TrendingUp,
    title: "Oportunidad de ascenso",
    description: "Crecimiento y liderazgo en estructura organizacional",
  },
  {
    icon: Users,
    title: "Ambiente motivador",
    description: "Cultura orientada al crecimiento y trabajo en equipo",
  },
  {
    icon: Award,
    title: "Reconocimientos",
    description: "Constantes reconocimientos por desempeño y logros",
  },
  {
    icon: Plane,
    title: "Viajes internacionales",
    description: "Eventos corporativos y viajes de incentivo",
  },
]

const profiles = [
  "Actitud positiva y orientación a resultados",
  "Capacidad de comunicación",
  "Buena presencia y trato con personas",
  "Mentalidad emprendedora",
  "Responsabilidad y ética",
  "Motivación por crecer profesionalmente",
]

const steps = [
  { step: "01", title: "Envía tu solicitud", description: "Completa el formulario de contacto" },
  { step: "02", title: "Entrevista", description: "Participa en una entrevista de evaluación" },
  { step: "03", title: "Capacitación", description: "Recibe capacitación inicial" },
  { step: "04", title: "Integración", description: "Integración al equipo" },
  { step: "05", title: "Desarrollo", description: "Desarrollo comercial y acompañamiento" },
]

export default function OportunidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">La Oportunidad</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              Construye una carrera comercial sólida
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              En nuestra organización encontrarás un espacio para construir una carrera comercial sólida, con
              acompañamiento, coaching y proyección. Aquí no se trabaja solo: se construye equipo, se lideran procesos y
              se diseñan metas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group">
                <benefit.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Sin necesidad de experiencia previa. Se brinda formación completa.
            </p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">¿A quién buscamos?</p>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Buscamos personas con mentalidad de crecimiento
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                {profiles.map((profile, index) => (
                  <li key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                    <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                    <span className="text-sm">{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-xl mb-16">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Proceso de Incorporación</p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">Unirse a nuestro equipo es sencillo</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((item) => (
              <div key={item.step}>
                <span className="text-4xl font-serif text-muted-foreground/30">{item.step}</span>
                <h3 className="mt-4 font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contacto">
                Comenzar proceso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

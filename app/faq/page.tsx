import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ - Home Zafiro SAS",
  description: "Preguntas frecuentes sobre Home Zafiro SAS y la oportunidad de ser distribuidor.",
}

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No, formamos desde cero. Nuestro programa de capacitación está diseñado para personas sin experiencia en ventas.",
  },
  {
    question: "¿Es tiempo completo o flexible?",
    answer:
      "Horario flexible y autónomo. Tú decides cómo organizar tu tiempo y tu agenda de trabajo.",
  },
  {
    question: "¿Necesito invertir?",
    answer:
      "Aquí la única inversión real es tu tiempo, tu disciplina y tus ganas de salir adelante. Si traes actitud y compromiso, nosotros te enseñamos el camino.",
  },
  {
    question: "¿Se gana por comisiones?",
    answer:
      "Sí, la compensación está basada en desempeño, con alta competitividad en el mercado y una de las comisiones más atractivas dentro del sector.",
  },
  {
    question: "¿Hay topes de ingresos?",
    answer:
      "No, el crecimiento depende del resultado comercial y del liderazgo. No hay límites de ingresos.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">FAQ</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              Preguntas frecuentes
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestra oportunidad de negocio.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left py-6 text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-secondary rounded-lg text-center">
            <p className="text-lg font-serif">¿Tienes más preguntas?</p>
            <p className="mt-2 text-sm text-muted-foreground">Nuestro equipo está listo para ayudarte.</p>
            <Button asChild className="mt-6 rounded-full px-8">
              <Link href="/contacto">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

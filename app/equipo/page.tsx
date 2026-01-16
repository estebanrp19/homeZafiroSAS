import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Equipo - Home Zafiro SAS",
  description: "Conoce a los líderes de Home Zafiro S.A.S.",
};

const team = [
  {
    name: "Esther Pulido",
    role: "Gerente Administrativa",
    bio: "Esther lidera la estructura administrativa, financiera y operativa de la organización. Su enfoque estratégico y su capacidad de gestión permiten que los procesos internos fluyan con precisión, brindando soporte al equipo comercial y asegurando que cada distribuidor cuente con las herramientas necesarias para desarrollarse profesionalmente.",
  },
  {
    name: "Esteban Romero",
    role: "Gerente Operativo",
    bio: "Esteban dirige el desarrollo comercial, el acompañamiento en campo y la formación del equipo. Su trabajo se centra en el liderazgo, la ejecución y la expansión del talento comercial a través de metodologías de alto rendimiento y una cultura basada en resultados y crecimiento.",
  },
];

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">
              Nuestro Equipo
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              Liderazgo con visión
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Ambos comparten una visión en común: crear oportunidades reales de
              desarrollo para personas con ambición, actitud y deseos de crecer.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 md:p-10 border border-border rounded-lg bg-card"
              >
                <p className="text-sm tracking-widest text-primary uppercase mb-2">
                  {member.role}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif">
                  {member.name}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            ¿Quieres ser parte del equipo?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estamos buscando personas con actitud y ganas de crecer.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8">
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

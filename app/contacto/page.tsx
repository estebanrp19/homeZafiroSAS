import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              Comienza tu carrera comercial
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Ponte en contacto con nosotros y agenda una entrevista con nuestro
              equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    admin@homezafiro.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+57 300 876 3063</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Cra. 47 #91-79, Bogotá, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Horario de atención</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo responde en un plazo de 0 a 24 horas hábiles.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5146860661857!2d-74.06037773232741!3d4.68022754758699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aeebe882431%3A0x69d4f42d36026ab4!2sCra.%2047%20%2391-79%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1768575442466!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Home Zafiro SAS"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

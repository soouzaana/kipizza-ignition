import { MapPin, MessageCircle, UtensilsCrossed, Sparkles, Instagram } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import Logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5569993953653?text=Ol%C3%A1%20Ki%20Pizza%2C%20quero%20fazer%20um%20pedido!";
const PEDIDO_URL_JARU = "https://pedido.anota.ai/loja/ki-pizza";
const PEDIDO_URL_ROLIM = "https://pedido.anota.ai/loja/kipizza-14?f=msa";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Ki+Pizza+Jaru+Rondonia";

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-6 sm:py-8">
      {/* Ambient decorative orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--brand-red)/0.25)] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--brand-green)/0.22)] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-[hsl(var(--brand-gold)/0.10)] blur-3xl" />

      <article className="relative w-full max-w-md mx-auto">
        {/* Card */}
        <div className="relative grain rounded-[2rem] bg-card/80 backdrop-blur-xl border border-border/60 shadow-elegant overflow-hidden animate-fade-up">

          {/* Italian flag top stripe */}
          <div aria-hidden className="h-1 w-full ring-italia opacity-80" />

          {/* Hero image */}
          <div className="relative h-40 sm:h-44 w-full overflow-hidden">
            <img
              src={heroPizza}
              alt="Pizza artesanal Ki Pizza"
              className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
              width={1536}
              height={768}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
            {/* Badge */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-[hsl(var(--brand-gold)/0.4)] text-[10px] font-semibold tracking-[0.18em] uppercase text-[hsl(var(--brand-gold-glow))]">
              <Sparkles className="h-3 w-3" /> Forno a lenha
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 -mt-6 relative">
            {/* Logo / Brand mark */}
            <div className="flex justify-center ">
              <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-glow))] flex items-center justify-center shadow-[0_15px_40px_-12px_hsl(var(--brand-red)/0.7)] border border-[hsl(var(--brand-gold)/0.4)] rotate-3">
                <img src={Logo} alt="Ki Pizza Logo" className="h-full w-full rounded-2xl" width={50} height={50} />
              </div>
            </div>

            {/* Title */}
            <header className="text-center mt-5">
              <h1 className="font-display text-3xl sm:text-[2rem] font-extrabold leading-tight">
                <span className="shimmer-text">Ki Pizza</span>
              </h1>
              <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Tradição italiana · Jaru — RO
              </p>
              <p className="mt-3 text-sm text-foreground/85 italic font-display">
                "Cada fatia, uma noite inesquecível."
              </p>
            </header>

            {/* CTA Stack */}
            <nav className="mt-5 space-y-2.5" aria-label="Ações principais">
              <a
                href={PEDIDO_URL_JARU}
                className="group relative flex items-center justify-between gap-3 w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-glow))] text-[hsl(var(--brand-cream))] font-semibold glow-red animate-pulse-glow hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 border border-[hsl(var(--brand-cream)/0.15)]"
              >
                <span className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-xl bg-[hsl(var(--brand-cream)/0.15)] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <UtensilsCrossed className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">JARU</span>
                    <span className="text-base">Fazer pedido online</span>
                  </span>
                </span>
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              <a
                href={PEDIDO_URL_ROLIM}
                className="group relative flex items-center justify-between gap-3 w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-glow))] text-[hsl(var(--brand-cream))] font-semibold glow-red animate-pulse-glow hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 border border-[hsl(var(--brand-cream)/0.15)]"
              >
                <span className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-xl bg-[hsl(var(--brand-cream)/0.15)] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <UtensilsCrossed className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">ROLIM DE MOURA</span>
                    <span className="text-base">Fazer pedido online</span>
                  </span>
                </span>
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-3 w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-green))] to-[hsl(var(--brand-green-glow))] text-[hsl(var(--brand-cream))] font-semibold glow-green  hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 border border-[hsl(var(--brand-cream)/0.15)]"
              >
                <span className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-xl bg-[hsl(var(--brand-cream)/0.15)] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">Conversar</span>
                    <span className="text-base">WhatsApp</span>
                  </span>
                </span>
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>              

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3.5 py-3 rounded-2xl bg-muted/60 hover:bg-muted border border-border/60 hover:border-[hsl(var(--brand-gold)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="h-8 w-8 rounded-lg bg-[hsl(var(--brand-gold)/0.15)] flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-[hsl(var(--brand-gold-glow))]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Visite</span>
                    <span className="text-xs font-semibold">Jaru — RO</span>
                  </span>
                </a>

                <a
                  href="https://instagram.com/kipizza.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3.5 py-3 rounded-2xl bg-muted/60 hover:bg-muted border border-border/60 hover:border-[hsl(var(--brand-gold)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="h-8 w-8 rounded-lg bg-[hsl(var(--brand-gold)/0.15)] flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-[hsl(var(--brand-gold-glow))]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Siga</span>
                    <span className="text-xs font-semibold">@kipizza.oficial</span>
                  </span>
                </a>
              </div>
            </nav>

            {/* Expansion notice */}
            <aside className="mt-4 relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-gold)/0.35)] bg-gradient-to-r from-[hsl(var(--brand-gold)/0.10)] via-[hsl(var(--brand-gold)/0.05)] to-transparent px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand-gold))] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--brand-gold-glow))]" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-glow))] font-bold">Em breve</span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground/90">Nova unidade · Rolim de Moura — RO</span>
                </div>
              </div>
            </aside>

            {/* Footer */}
            <footer className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
              <span className="h-px w-8 bg-border" />
              <span>Ki Pizza · {new Date().getFullYear()}</span>
              <span className="h-px w-8 bg-border" />
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Index;

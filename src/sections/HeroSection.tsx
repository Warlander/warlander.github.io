import { ChevronDown } from "lucide-react";
import { FadeInView } from "../components/FadeInView";
import { OrnamentalDivider } from "../components/OrnamentalDivider";
import { SocialButton } from "../components/SocialButton";

export function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="max-w-[600px] text-center">
        <FadeInView>
          <h1 className="font-display font-bold text-accent-wine uppercase tracking-[0.15em] text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Maciej Cyranowicz
          </h1>
        </FadeInView>

        <FadeInView delay={100}>
          <p className="font-serif italic text-ink-muted text-xl mt-3">
            Unity Expert — Generalist Game &amp; Tools Developer
          </p>
        </FadeInView>

        <FadeInView delay={200}>
          <div className="mt-6">
            <OrnamentalDivider />
          </div>
        </FadeInView>

        <FadeInView delay={300}>
          <p className="text-ink text-base leading-relaxed mt-8">
            Hello! I'm <strong>Maciej Cyranowicz</strong> also better known online as{" "}
            <strong>Warlander</strong>. Game developer by passion and trade, gamer,
            maker, and caretaker of guinea pigs. 🐷
          </p>
          <p className="text-ink text-base leading-relaxed mt-3">
            Unity game engine expert with 6 years of professional engine experience.
            Currently based in <strong>Copenhagen, Denmark</strong>.
          </p>
        </FadeInView>

        <FadeInView delay={400}>
          <p className="font-serif italic text-accent-wine text-lg mt-6">
            Let's make games and push the limits of this art form together!
          </p>
        </FadeInView>

        <FadeInView delay={500}>
          <p className="text-ink-muted text-sm mt-2">
            Please feel free to visit my{" "}
            <a
              href="https://www.linkedin.com/in/maciej-cyranowicz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Warlander"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200"
            >
              GitHub
            </a>
            !
          </p>
        </FadeInView>

        <FadeInView delay={600}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <SocialButton
              href="https://www.linkedin.com/in/maciej-cyranowicz/"
              label="LinkedIn"
              variant="slate"
            />
            <SocialButton
              href="https://github.com/Warlander"
              label="GitHub"
              variant="wine"
            />
          </div>
        </FadeInView>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-pulse">
        <ChevronDown className="w-6 h-6 text-ink-muted" />
      </div>
    </section>
  );
}

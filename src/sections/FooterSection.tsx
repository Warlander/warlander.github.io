import { FadeInView } from "../components/FadeInView";
import { SocialButton } from "../components/SocialButton";

export function FooterSection() {
  return (
    <footer className="bg-parchment-light py-12 px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <FadeInView>
          <SocialButton
            href="https://www.linkedin.com/in/maciej-cyranowicz/"
            label="Visit my LinkedIn"
            variant="wine"
          />
        </FadeInView>

        <FadeInView delay={100}>
          <p className="text-ink-muted text-sm mt-8">
            &copy; 2026 Maciej Cyranowicz.
          </p>
          <p className="text-ink-muted text-xs mt-2 max-w-[500px] mx-auto">
            This portfolio showcases both my personal projects and projects I
            contributed to. All non-personal projects are &copy; their respective
            owners.
          </p>
        </FadeInView>
      </div>
    </footer>
  );
}

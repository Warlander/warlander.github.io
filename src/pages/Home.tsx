import { ScrollProgress } from "../components/ScrollProgress";
import { HeroSection } from "../sections/HeroSection";
import { TimelineSection } from "../sections/TimelineSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { FooterSection } from "../sections/FooterSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <HeroSection />
        <TimelineSection />
        <ProjectsSection />
      </main>
      <FooterSection />
    </>
  );
}

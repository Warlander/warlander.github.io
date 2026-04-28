import { FadeInView } from "./FadeInView";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  role: string;
  image: string;
  description: string;
  links: ProjectLink[];
  delay?: number;
}

export function ProjectCard({
  title,
  role,
  image,
  description,
  links,
  delay = 0,
}: ProjectCardProps) {
  return (
    <FadeInView delay={delay}>
      <div className="group bg-parchment-light border border-border-light rounded overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif font-bold text-xl text-ink">{title}</h3>
          <p className="font-serif italic text-accent-wine text-sm mt-1">{role}</p>
          <p className="text-ink-muted text-sm leading-relaxed mt-3">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm">
            {links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200"
                >
                  {link.label}
                </a>
                {i < links.length - 1 && (
                  <span className="text-ink-muted">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

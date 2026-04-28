interface SocialButtonProps {
  href: string;
  label: string;
  variant: "wine" | "slate";
}

export function SocialButton({ href, label, variant }: SocialButtonProps) {
  const baseClasses =
    "inline-block px-7 py-2.5 rounded text-sm font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5";
  const variantClasses =
    variant === "wine"
      ? "bg-accent-wine hover:bg-accent-wine-dark"
      : "bg-accent-slate hover:bg-accent-slate-dark";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
    </a>
  );
}

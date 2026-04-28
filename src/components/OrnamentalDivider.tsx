export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="w-20 h-px bg-border-custom" />
      <span className="text-accent-wine text-xs">&#9670;</span>
      <div className="w-20 h-px bg-border-custom" />
    </div>
  );
}

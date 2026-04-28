interface TimelineItemProps {
  age: string;
  children: React.ReactNode;
  side: "left" | "right";
  delay?: number;
}

import { FadeInView } from "./FadeInView";

export function TimelineItem({ age, children, side, delay = 0 }: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <FadeInView delay={delay} className="relative">
      {/* Desktop alternating layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
        {/* Left column */}
        <div className={`${isLeft ? "text-right pr-6" : ""}`}>
          {isLeft ? (
            <>
              <p className="font-serif italic text-accent-wine text-lg">{age}</p>
              <div className="text-ink text-base leading-relaxed mt-1">{children}</div>
            </>
          ) : null}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center pt-1.5">
          <div className="w-3 h-3 rounded-full bg-accent-wine border-2 border-parchment-light z-10 shrink-0" />
        </div>

        {/* Right column */}
        <div className={`${!isLeft ? "text-left pl-6" : ""}`}>
          {!isLeft ? (
            <>
              <p className="font-serif italic text-accent-wine text-lg">{age}</p>
              <div className="text-ink text-base leading-relaxed mt-1">{children}</div>
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex items-start gap-4">
        <div className="flex flex-col items-center pt-1.5">
          <div className="w-3 h-3 rounded-full bg-accent-wine border-2 border-parchment-light z-10 shrink-0" />
        </div>
        <div>
          <p className="font-serif italic text-accent-wine text-lg">{age}</p>
          <div className="text-ink text-base leading-relaxed mt-1">{children}</div>
        </div>
      </div>
    </FadeInView>
  );
}

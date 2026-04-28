import { FadeInView } from "../components/FadeInView";
import { OrnamentalDivider } from "../components/OrnamentalDivider";
import { TimelineItem } from "../components/TimelineItem";

const milestones = [
  {
    age: "Age 5",
    content: (
      <>
        My father introduced me to computers and video games at 5 years old, this
        quickly turned into interest on how games are made and how they work under
        the hood.
      </>
    ),
  },
  {
    age: "Age 8",
    content: (
      <>
        I started making first simple video games using RPG Maker and GameMaker at
        8 years old.
      </>
    ),
  },
  {
    age: "Age 14",
    content: (
      <>
        Learned programming in VB and Java at 14. I used this newfound knowledge to
        create GUI tools for my favourite games, but as tools became increasingly
        complex and visual being restricted to GUI and simple graphics became a
        limitation. This made me learn OpenGL basics and making some simple graphics
        engines, such as the ones used in earlier iterations of my tool{" "}
        <a
          href="https://github.com/Warlander/DeedPlanner-2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200 font-medium"
        >
          DeedPlanner
        </a>{" "}
        for Wurm Online. (and plenty of game prototypes, of course!)
      </>
    ),
  },
  {
    age: "Age 19",
    content: (
      <>
        I got an offer I couldn't refuse to volunteer on{" "}
        <a
          href="https://www.wurmonline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200 font-medium"
        >
          Wurm Online
        </a>{" "}
        MMO project. This was my first experience with commercial project.
      </>
    ),
  },
  {
    age: "Age 20",
    content: (
      <>
        I discovered and started using Unity. It would become my engine of choice
        replacing custom-made Java/OpenGL engines over the next few years.
      </>
    ),
  },
  {
    age: "Age 21",
    content: (
      <>
        I participated in release of{" "}
        <a
          href="https://store.steampowered.com/app/366220/Wurm_Unlimited/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200 font-medium"
        >
          Wurm Unlimited
        </a>{" "}
        on Steam.
      </>
    ),
  },
  {
    age: "Age 24",
    content: (
      <>
        I started my professional game development journey at{" "}
        <a
          href="https://www.ahoygames.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200 font-medium"
        >
          Ahoy Games
        </a>
        !
      </>
    ),
  },
  {
    age: "Age 28",
    content: (
      <>
        I moved to Denmark where I'm currently working at{" "}
        <a
          href="https://tactilegames.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-slate hover:text-accent-slate-dark underline underline-offset-2 decoration-transparent hover:decoration-accent-slate transition-all duration-200 font-medium"
        >
          Tactile Games
        </a>
        .
      </>
    ),
  },
];

export function TimelineSection() {
  return (
    <section className="bg-parchment-light py-20 md:py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        <FadeInView>
          <h2 className="font-serif font-bold text-accent-wine text-[clamp(1.75rem,4vw,2.5rem)] text-center">
            My Timeline
          </h2>
        </FadeInView>
        <div className="mt-4">
          <OrnamentalDivider />
        </div>

        <div className="relative mt-12 md:mt-16">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-custom -translate-x-1/2" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-0.5 bg-border-custom" />

          <div className="space-y-10 md:space-y-12">
            {milestones.map((m, i) => (
              <TimelineItem
                key={m.age}
                age={m.age}
                side={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
              >
                {m.content}
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

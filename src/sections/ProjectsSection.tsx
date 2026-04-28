import { FadeInView } from "../components/FadeInView";
import { OrnamentalDivider } from "../components/OrnamentalDivider";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    title: "Suck It Up",
    role: "Tactile Games — Senior Content Tools Game Programmer",
    image: "/assets/img/siu.png",
    description:
      "Suck It Up is a rapidly growing live service game that is constantly evolving, with new content being delivered to players on a regular basis. My focus is entirely on the tooling and content pipeline that powers the game's development — not the gameplay itself, but the systems that let designers and artists create and ship content efficiently and reliably. My ownership includes the level editor tooling and the content pipeline responsible for building and delivering assets to players. I also work on integrations between internal tools — supporting the cross-team workflows that keep a fast-moving live service running smoothly week after week.",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=dk.tactile.holegame",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/dk/app/suck-it-up-hole-them-all/id6749577557",
      },
    ],
  },
  {
    title: "Lily's Garden",
    role: "Tactile Games — Senior Content Tools Game Programmer",
    image: "/assets/img/LG2.webp",
    description:
      "In Lily's Garden, my main contribution so far is implementation of Lily's Mysteries event/game mode as part of content tools team. I also implemented and optimized tooling, notable improvements include: rewrite and redesign of content build and testing pipeline, bringing legacy user interface framework to modern code quality standards and taking advantage of said improvements to implement support for new and complex visual effects and animations to improve user engagement. Lily's Garden is a huge project that requires cooperation between multiple developers in different teams, as well as with different roles such as UI designers, authors and artists. I'm also coordinating both in-person and remotely with people all over the world.",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=dk.tactile.lilysgarden&hl=en",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/lilys-garden-match-design/id1437783446",
      },
    ],
  },
  {
    title: "Wurm Online",
    role: "CodeClub AB — Volunteer Game Developer",
    image: "/assets/img/wurm2.jpg",
    description:
      "MMO project I volunteer on. This was my first experience with commercial project — my contributions include mainly quality of life and immersion features, additions and fixes. I also worked on internal tools, with main focus being terrain generation/editing and 3d model workflow tools.",
    links: [
      {
        label: "Official Website",
        href: "https://www.wurmonline.com",
      },
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/1179680/Wurm_Online/",
      },
    ],
  },
  {
    title: "Gin Rummy Legends",
    role: "Ahoy Games — Senior Game Programmer",
    image: "/assets/img/ginrummylegends.png",
    description:
      "Greenfield project I led development on. I implemented all gameplay mechanics present in the game — most important being multiplayer support, gameplay loop, card handling system involving cards dynamically responding to player inputs, smoothly transitioning between states, being controlled by physics or predefined animations depending on circumstances. I coordinated closely with artists to bring their ideas to life, requiring both extensive problem solving and finding creative solutions for problems within Unity game engine.",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.ahoygames.ginrummy&hl=en",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/dk/app/gin-rummy-legends/id1593427543",
      },
    ],
  },
  {
    title: "Okey",
    role: "Ahoy Games — Senior Game Programmer",
    image: "/assets/img/okey.webp",
    description:
      "I took part in the development of multiplayer functionalities, social features and the cafe building mode. I also created automation tools streamlining the game testing process, and took part in porting the game from Haxe programming language to Unity game engine. This project presented many challenges, a lot of time was spent bringing it up to modern standards and implementing functionalities years after the original release such as multiplayer support and other online functionalities.",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.ahoygames.okey",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/okey/id667645433",
      },
    ],
  },
  {
    title: "Wurm Unlimited",
    role: "CodeClub AB — Volunteer Game Developer",
    image: "/assets/img/wurm3.jpg",
    description:
      "I took part of development of the game, improving the player experience and modernizing the game launcher. I also engaged with the community, communicated with the game publisher Plug In Digital, coordinated work on promotional materials, Steam page and the global release.",
    links: [
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/366220/Wurm_Unlimited/",
      },
    ],
  },
  {
    title: "Backgammon Legends",
    role: "Ahoy Games — Senior Game Programmer",
    image: "/assets/img/bl.webp",
    description:
      "I took part in scaling the game up after the initial release — implementing new functionalities such as more customization options (custom dice and boards), and improving monetization.",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.ahoygames.backgammon&hl=en",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/backgammon-legends/id1439178539",
      },
    ],
  },
  {
    title: "DeedPlanner",
    role: "Personal Project",
    image: "/assets/img/deedplanner.jpg",
    description:
      "My personal pet project which I took from small learning project, all the way to tool used and loved by most of the Wurm Online game community — program allowing users to rapidly prototype homes and entire villages before they put days or weeks of work into them in Wurm Online/Wurm Unlimited game. It also offers many other helpful features, such as the warning system in case the designed structures are impossible to build in-game, and calculator allowing to determine how many materials the in-game project will take to build. This project and its different iterations is a good time capsule of my skills as a programmer increasing over time. The project went from very rudimentary early versions all the way to the third iteration of the program being a playground for programming patterns and Unity features, and together with that came more and higher quality features for its users.",
    links: [
      {
        label: "Forum Post",
        href: "https://forum.wurmonline.com/index.php?/topic/171432-deedplanner-311-3d-house-and-deed-design-tool/",
      },
      {
        label: "WebGL Version",
        href: "https://deedplanner.warlander.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/Warlander/DeedPlanner-3",
      },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeInView>
          <h2 className="font-serif font-bold text-accent-wine text-[clamp(1.75rem,4vw,2.5rem)] text-center">
            Selected Projects
          </h2>
        </FadeInView>
        <div className="mt-4">
          <OrnamentalDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 md:mt-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              role={project.role}
              image={project.image}
              description={project.description}
              links={project.links}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee"

const skills = [
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" },
  { name: "Premiere Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg" },
  { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

const ReviewCard = ({
  logo,
  name
}: {
  logo: string
  name: string
}) => {
  return (
    <figure
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }
  className={cn(
    "flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer transition-all duration-300",
    // Base glassmorphism
    "backdrop-blur-xl bg-white/10 border border-white/30 shadow text-sm font-medium text-white",
    // Hover effects
    "hover:bg-white/20 hover:scale-[1.04] hover:shadow-[0_0_25px_#FFA50040]",
  )}
>
  <img
    src={logo}
    alt={name}
    className="w-5 h-5 object-contain"
    onError={(e) => {
      (e.target as HTMLImageElement).src =
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    }}
  />
  <figcaption className="capitalize">{name}</figcaption>
</figure>

  )
}

export default function ToolsSkills() {
  return (
    <section
      id="skills"
      className=" text-white"
    >
      <h3 className="text-3xl font-bold text-center mb-5 text-orange-400">
        Tools
      </h3>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee reverse pauseOnHover className="[--duration:15s]">
            {skills.map((skill) => (
              <ReviewCard key={skill.name} {...skill} />
            ))}
        </Marquee>
      </div>
    </section>
  );
}

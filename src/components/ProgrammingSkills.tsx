"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee"

const skills = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
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

export default function ProgrammingSkills() {
  return (
    <section
      id="skills"
      className=" text-white"
    >
      <h3 className="text-3xl font-bold text-center mb-5 text-orange-400">
        Programming Skills
      </h3>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover className="[--duration:20s]">
            {skills.map((skill) => (
              <ReviewCard key={skill.name} {...skill} />
            ))}
        </Marquee>
      </div>
    </section>
  );
}

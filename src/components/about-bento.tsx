import { GraduationCap, Brain, Palette, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
// import { AnimatedList } from "@/components/ui/animated-list"
import { AnimatedListDemo } from "@/components/ui/animated-list-demo"
// import { AnimatedListDemo2 } from "@/components/ui/animated-list-demo-2"
// import AnimatedBeamMultipleOutputDemo from "@/components/ui/animated-beam-multiple-outputs"

const educationHistory = [
  {
    name: "SMPK 4 PENABUR Jakarta",
    body: "Studied with some of the most talented teachers and international grade scholars",
  },
  {
    name: "SMAK 5 PENABUR Jakarta",
    body: "Enhanced real world understanding, critical thinking and leadership",
  },
  {
    name: "Binus University",
    body: "Explored practical solutions and nose dive to the real world",
  },
]

const features = [
  {
    Icon: Brain,
    name: "Who I Am",
    description:
      "Aspiring machine learning engineer and full-stack developer with a background in design. I love combining creativity and logic to build human-centered digital experiences.",
    href: "#skills", // ✅ Add this
    cta: "Learn More",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="opacity-60 blur-[1px]">
      </AnimatedListDemo>
    ),
  },{
    Icon: GraduationCap,
    name: "Education",
    description: "Built curiosity and discipline through years of guided growth.",
    className: "col-span-3 lg:col-span-1",
    cta: "Learn More",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:10s]"
      >
        {educationHistory.map((edu, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.03] hover:bg-gray-950/[.06]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-semibold dark:text-white">
              {edu.name}
            </figcaption>
            <blockquote className="mt-2 text-xs text-gray-400">{edu.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Palette,
    name: "Design Portfolio",
    description:
      "A long-time designer with experience in visual communication, branding, and UI/UX prototyping. My design mindset shapes the way I code and teach.",
    className: "col-span-3 lg:col-span-1",
    href: "https://bukanbryan.my.canva.site/", // replace with your actual Figma link
    cta: "Explore Portofolio",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 bg-gradient-to-tr from-orange-400 to-yellow-300 opacity-20 blur-3xl rounded-full" />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Mentorship & Teaching",
    description:
      "I believe in growing together. I mentor peers in programming and design — helping them understand not just the how, but the why.",
    className: "col-span-3 lg:col-span-2",
    href: "#contact",
    cta: "Let’s Connect",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-48 w-48 bg-gradient-to-tr from-yellow-600 to-orange-500 opacity-30 blur-2xl rounded-full" />
      </div>
    ),
  },
]

export function AboutBentoSection() {
  return (
    <section
      id="about"
      className=" px-6 w-full mx-auto bg-gradient-to-b from-[#000000] to-[#20160e]"
    >
      <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
    </section>
  )
}

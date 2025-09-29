"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"

interface Item {
  icon: string
  name: string
  color: string
}

const items: Item[] = [
  {
    icon: "🤖",
    name: "Artificial Intelligence",
    color: "#00C9A7", // teal-green
  },
  {
    icon: "🔌",
    name: "Internet of Things",
    color: "#FF6B6B", // coral red
  },
  {
    icon: "🌐",
    name: "Web Development",
    color: "#1E86FF", // blue
  },
  {
    icon: "⚙️",
    name: "Competitive Programming",
    color: "#FFB800", // yellow-gold
  },
  {
    icon: "🎨",
    name: "UI/UX Thinking",
    color: "#C084FC", // soft purple
  },
  {
    icon: "📊",
    name: "Data-Driven Creation",
    color: "#10B981", // emerald green
  },
]


// Duplicate items to make list continuous (optional)
const notifications = Array.from({ length: 10 }, () => items).flat()

const Notification = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-black [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="text-lg font-medium whitespace-pre dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      {/* fade effect at bottom */}
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}

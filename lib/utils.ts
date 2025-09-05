import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigationItems = [
  {
    label: "Team",
    href: "#team"
  },
  {
    label: "Practice Areas",
    href: "#practice-areas"
  },
  {
    label: "Blog",
    href: "#blog"
  },
  {
    label: "Contact",
    href: "#contact"
  },
]

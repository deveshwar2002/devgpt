"use client";

import Link from "next/dist/client/link";
import { Image } from "next/dist/client/image-component";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Start Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-600",
  },
  {
    label: "Generate Image",
    icon: ImageIcon,
    href: "/image",
    color: "text-yellow-300",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-Purple-300",
  },
  {
    label: "Music Generator",
    icon: Music,
    href: "/music",
    color: "text-white-500",
  },
  {
    label: "code Generator",
    icon: Code,
    href: "/code",
    color: "text-blue-500",
  },
  {
    label: "Code For Coders Generator",
    icon: Settings,
    href: "/settings",
    color: "text-green-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-2 mb-14">
          <Image fill alt="logo" src="" />
          <div>
            <h1 className={cn("text-2xl font-bold")}>DevGpt</h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition",
                "hover:text-white hover:bg-opacity-10",// Apply hover effect here
                pathname === route.href ? "text-white bg-white/10": "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

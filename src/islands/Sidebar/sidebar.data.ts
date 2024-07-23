import { links } from "@/constants/links";
import { MessageSquare, Phone, Users2 } from "lucide-react";

export const MENU = [
  {
    url: links.CHATS,
    icon: MessageSquare,
    text: "Chats",
  },
  {
    url: links.CALLS,
    icon: Phone,
    text: "Calls",
  },
  {
    url: links.FRIENDS,
    icon: Users2,
    text: "Friends",
  },
];

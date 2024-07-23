"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Settings } from "lucide-react";
import cn from "clsx";

import { links } from "@/constants/links";
import { MENU } from "./sidebar.data";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Image src="/icon.svg" alt="icon" priority width={50} height={50} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
          >
            <span>
              <item.icon size={35} />
              {item.text}
            </span>
          </Link>
        ))}
      </div>
      <Link href={links.SETTINGS}>
        <span>
          <Settings size={35} />
          Settings
        </span>
      </Link>
    </aside>
  );
}

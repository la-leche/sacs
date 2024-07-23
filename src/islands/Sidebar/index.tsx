import type { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
}

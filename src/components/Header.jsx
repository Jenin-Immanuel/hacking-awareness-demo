import { Link } from "@solidjs/router";

import styles from "../styles/Main.module.css";

export default function Header() {
  return (
    <nav class={styles.NavBar}>
      <ul class={styles.NavList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

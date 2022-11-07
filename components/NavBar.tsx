import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <nav>
        <ul className={styles.link_itens}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

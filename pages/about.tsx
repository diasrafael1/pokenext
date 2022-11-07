import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt
        libero laudantium ducimus perspiciatis nesciunt voluptatibus cupiditate
        excepturi accusamus, laboriosam tempora iste consequuntur repudiandae
        aut dignissimos ut repellendus voluptates ipsam!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}

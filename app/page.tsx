import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>
          <Link href="./resources" className={styles.card}>
            <h2>Resources &rarr;</h2>
            <p>
              Explore . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . .
            </p>
          </Link>
          <Link href="./newcomersinfo" className={styles.card}>
            <h2>NewcomersInfo &rarr;</h2>
            <p>
              Explore . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . .
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}

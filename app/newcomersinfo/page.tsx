import FunctionData from "./Function";
import Link from "next/link";
import styles from "./page.module.css";

export default function NewComersInfoPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul className={styles.grid}>
          <FunctionData />
        </ul>
        <Link href="/" className="my-40">
          Back to Home
        </Link>
      </main>
    </div>
  );
}

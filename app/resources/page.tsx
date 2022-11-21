import Icon from "../Icon";
import styles from "./page.module.css";
import Link from "next/link";
import { resourceSections } from "@/utils/resourceSections";
import { Resources } from "@/utils/resourcesObject";

export default function ResourcesPage() {
  // console.log(Resources);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul className={styles.grid}>
          {resourceSections.map((el, i) => (
            <li key={el.title.toLowerCase()} className={styles.card}>
              <Link href={`/resources#section__${i}`}>
                <Icon
                  viewBox="0 0 450 450"
                  color={""}
                  path={el.path}
                  width={30}
                  height={30}
                  className={""}
                />
                <p className="whitespace-nowrap">{el.title.toUpperCase()}</p>
              </Link>
            </li>
          ))}
        </ul>
        {resourceSections.map((el, i) => (
          <section id={`section__${i}`} key={`section__${el.title}`}>
            <p>{el.title}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

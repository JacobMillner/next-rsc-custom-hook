import Image from "next/image";
import styles from "./page.module.css";
import { Counter1 } from "./counter1";
import { Counter2 } from "./Counter2";

export default function Home() {
  return (
    <div className={styles.page}>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

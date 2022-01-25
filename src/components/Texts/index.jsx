import { FaGithubSquare } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Texts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BuscaDev</h1>
      <FaGithubSquare size={70} color="#ffffff" className={styles.github} />
    </div>
  );
}

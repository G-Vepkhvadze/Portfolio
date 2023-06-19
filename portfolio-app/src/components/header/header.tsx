import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_title}>Welcome To My Portfolio</div>
        <div className={styles.header_button_wrapper}>
          <div className={styles.header_button}>About Me</div>
          <div className={styles.header_button}>Skills</div>
          <div className={styles.header_button}>Trivia</div>
          <div className={styles.header_button}>Contact Me</div>
        </div>
      </div>
    </>
  );
}

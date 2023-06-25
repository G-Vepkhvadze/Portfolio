import styles from "@/styles/about_me.module.css";
import Image from "next/image";
import Vepkhvadze from "@/assets/Vepkhvadze.jpg";
import Sunman from "@/assets/Sunman.png";

export default function About_Me() {
  return (
    <>
      <div className={styles.about_me}>
        <div className={styles.about_me_wrapper}>
          <div className={styles.about_me_left}>
            <div className={styles.image_wrapper}>
              <div className={styles.about_me_name}>Giorgi Vepkhvadze</div>
              <div className={styles.about_me_occupation}>Web Developer</div>
              <div className={styles.about_me_image}>
                <Image src={Sunman} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.about_me_right}>
            <div className={styles.about_me_header}>
              About <a className={styles.highlight}>Me</a>
            </div>
            <div className={styles.about_me_resume}>
              I'm a developer with{" "}
              <a className={styles.highlight}>3 Years of Experience</a> with
              building websites and web applications, with a good eye for{" "}
              <a className={styles.highlight}>User Experience and Design.</a>
            </div>
            <div className={styles.about_me_resume}>
              My best abilities lie in{" "}
              <a className={styles.highlight}>Front-End Development</a> but I am
              able to work in backend as well if needed. Eager to learn new
              technologies and methods. <br />
            </div>
            <div className={styles.about_me_resume}>
              I'm friendly and{" "}
              <a className={styles.highlight}>Easy to Communicate With.</a>
              Additionally I'm able to communicate problems clearly and
              efficiently.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

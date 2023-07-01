import styles from "@/styles/skill_cards.module.css";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

interface AllProps {
  title: string;
  description: string;
  styles: object;
  picture: StaticImageData;
}

export default function Skill_Cards(props: AllProps) {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={20}>
          <div
            className={styles.card_wrapper}
            style={props.styles}
            id="skills_section"
          >
            <div className={styles.card_box}>
              <Image
                src={props.picture}
                width={224}
                height={224}
                alt=""
                className={styles.card_img}
              />
              <div className={styles.card_name}>{props.title}</div>
              <div className={styles.card_title}>{props.description}</div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
}

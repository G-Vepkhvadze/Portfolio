import styles from "@/styles/skill_cards.module.css";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Parallax speed={45}>
        <div className={styles.card_wrapper} style={props.styles}>
          <div className={styles.card_box} onClick={() => setShowModal(true)}>
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
    </>
  );
}

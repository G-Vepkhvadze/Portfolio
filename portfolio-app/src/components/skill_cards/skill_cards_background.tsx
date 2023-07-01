import styles from "@/styles/skill_cards.module.css";
import Skill_Cards from "./skill_cards";
import JS_Icon from "@/assets/images/javascript.svg";
import React_Icon from "@/assets/images/react.svg";
import NextJS_Icon from "@/assets/images/nextjs.svg";
import Angular_Icon from "@/assets/images/angularjs.svg";
import Node_Icon from "@/assets/images/node-js.svg";
import TS_Icon from "@/assets/images/typescript.svg";
import Figma_Icon from "@/assets/images/figma.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Skill_Cards_Background({ children }: any) {
  return (
    <>
      <div className={styles.skill_cards_background}>
        <ParallaxProvider>
          <Parallax speed={35}>
            <Skill_Cards
              title="Javascript"
              description="//////////"
              picture={JS_Icon}
              styles={{ marginLeft: "20%", marginTop: "30%" }}
            />
          </Parallax>
          <Skill_Cards
            title="Typescript"
            description="/////////"
            picture={TS_Icon}
            styles={{ marginLeft: "30%", marginTop: "130%" }}
          />
          <Parallax speed={35}>
            <Skill_Cards
              title="NextJS"
              description="/////////"
              picture={NextJS_Icon}
              styles={{ marginLeft: "40%", marginTop: "30%" }}
            />
          </Parallax>
          <Skill_Cards
            title="React"
            description="//////////"
            picture={React_Icon}
            styles={{ marginLeft: "50%", marginTop: "130%" }}
          />
          <Parallax speed={35}>
            <Skill_Cards
              title="NodeJS"
              description="//////"
              picture={Node_Icon}
              styles={{ marginLeft: "60%", marginTop: "30%" }}
            />
          </Parallax>
          <Skill_Cards
            title="AngularJS"
            description="/////"
            picture={Angular_Icon}
            styles={{ marginLeft: "70%", marginTop: "130%" }}
          />
          <Parallax speed={35}>
            <Skill_Cards
              title="Figma"
              description="////////"
              picture={Figma_Icon}
              styles={{ marginLeft: "80%", marginTop: "30%" }}
            />
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
}

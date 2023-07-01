"use client";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import About_Me from "@/components/about_me/about_me";
import Parallaxed_Trivia from "@/components/parallaxed_trivia/parallaxed_trivia";
import Footer from "@/components/footer/footer";
import Skill_Cards_Background from "@/components/skill_cards/skill_cards_background";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.background}>
        <About_Me />
        <Parallaxed_Trivia />
        <Skill_Cards_Background></Skill_Cards_Background>
        <Footer />
      </div>
    </>
  );
}

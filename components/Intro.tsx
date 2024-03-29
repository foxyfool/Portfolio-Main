"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Heading from "./ui/Heading";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  } as any);

  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);

  const hideAndShowVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const texts = [
    "Growing up", 
    "I found myself deeply connected to",
    "Motorcycles and Computers,",
    "From which I've learned to blend aesthetics with functionality,",
    "The creative and curious side",
    "inside me has since transitioned into",
    "building the perfect UIs",
    "and robust backends.",
  ];

  const textsMobile = [
    "Growing up,",
    "I found myself ",
    "deeply connected to",
    "motorcycles and",
    "computers, and the",
    "creative and curious",
    "side in me has since",
    "transitioned into",
    "building the best",
    "perfect UIs and",
    "robust backends.",
  ];

  return (
    <motion.section
      style={{ opacity: sectionOpacity }}
      id="about"
      ref={sectionRef}
      className="relative mx-[10%] sm:mx-[15%] my-[3rem] py-[6rem] select-none flex flex-col"
    >
      <Heading>ABOUT ME</Heading>
      <motion.div
        variants={hideAndShowVariant}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 hidden sm:block"
      >
        <RevealingTextContainer scrollYProgress={scrollYProgress}>
          {texts.map((text, i) => (
            <RevealingTextItem index={i} key={i}>
              {text}
            </RevealingTextItem>
          ))}
        </RevealingTextContainer>
      </motion.div>
      <motion.div
        variants={hideAndShowVariant}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 block sm:hidden"
      >
        <RevealingTextContainer scrollYProgress={scrollYProgress}>
          {textsMobile.map((text, i) => (
            <RevealingTextItem index={i} key={i}>
              {text}
            </RevealingTextItem>
          ))}
        </RevealingTextContainer>
      </motion.div>
    </motion.section>
  );
}

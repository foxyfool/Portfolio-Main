import Heading from "./ui/Heading";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import { Calendar, Mail, CircleCheckBig } from "lucide-react";
import { ButtonWithIcon } from "./ui/Buttons";
import Link from "next/link";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRevealingText } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  } as any);
  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0, 0.5], [0, 1]);
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

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      id="contact"
      className="relative select-none mx-[10%] sm:mx-[15%] my-[3rem] py-[6rem]"
    >
      <Heading>CONTACT</Heading>
      <motion.div
        variants={hideAndShowVariant}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col mt-24 items-start justify-center"
      >
        <RevealingTextContainer
          scrollYProgress={scrollYProgressRevealingText}
          widthStart={0.4}
          widthEnd={0.8}
        >
          {["Let's turn your ideas into", "reality. Contact me!"].map(
            (text, i) => (
              <RevealingTextItem index={i} key={i}>
                {text}
              </RevealingTextItem>
            )
          )}
        </RevealingTextContainer>
        <div className="w-full flex flex-row items-center justify-start gap-8 flex-wrap mt-16 text-sm sm:text-base">
          <Link
            href={"https://calendly.com/foxyfool/30min?month=2024-02"}
            target="_blank"
            className="flex-grow"
          >
            <ButtonWithIcon icon={Calendar}>Schedule a meeting</ButtonWithIcon>
          </Link>
          <a
            href="http://www.fiverr.com/s/ZmBDeg8"
            className="flex-grow"
            target="blank"
          >
            <ButtonWithIcon icon={CircleCheckBig}>
              Get Your Project Done
            </ButtonWithIcon>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

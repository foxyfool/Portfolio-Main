"use client";

import resume_link from "@/constants/resume";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { Github, Linkedin, ScrollText, Twitter } from "lucide-react";
import React, { Ref } from "react";

interface SocialsProps extends HTMLMotionProps<"div"> {
  direction?: "vertical" | "horizontal";
}

const Socials = React.forwardRef(
  ({ direction = "vertical", ...props }: SocialsProps, ref) => {
    const ulAnim = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };

    const socialsAnimSelector = {
      vertical: {
        hidden: { opacity: 0, x: "1.5rem" },
        show: {
          opacity: 1,
          x: "0",
          transition: { type: "spring", bounce: 0.3 },
        },
      },
      horizontal: {
        hidden: { opacity: 0, y: "1.5rem" },
        show: {
          opacity: 1,
          y: "0",
          transition: { type: "spring", bounce: 0.3 },
        },
      },
    };

    const socialsAnim = socialsAnimSelector[direction];

    return (
      <motion.div
        {...props}
        ref={ref as Ref<HTMLDivElement> | undefined}
        variants={ulAnim}
        initial="hidden"
        animate="show"
        className={cn(
          "text-graytransparent hidden sm:flex flex-col items-center justify-start transition-all fixed bottom-0 ml-[2.5%] my-8 md:my-12 z-[997]",
          direction == "horizontal" && "flex-row ml-0 flex"
        )}
      >
        <motion.a
          variants={socialsAnim}
          href="https://www.linkedin.com/in/rahul-kumar-maity-00a4686b/"
          target="_blank"
          className="p-2"
          aria-label="Link to my linkedin"
        >
          <Linkedin className="w-5 h-5 hover:text-primary" />
        </motion.a>
        <motion.a
          variants={socialsAnim}
          href="https://github.com/foxyfool"
          target="_blank"
          className="p-2"
          aria-label="Link to my github"
        >
          <Github className="w-5 h-5 hover:text-primary" />
        </motion.a>
        <motion.a
          variants={socialsAnim}
          href="https://twitter.com/maity84743"
          target="_blank"
          className="p-2"
          aria-label="Link to my twitter"
        >
          <Twitter className="w-5 h-5 hover:text-primary" />
        </motion.a>
        <motion.a
          variants={socialsAnim}
          href={resume_link}
          target="_blank"
          className="p-2"
          aria-label="Link to view my resume"
        >
          <ScrollText className="w-5 h-5 hover:text-primary" />
        </motion.a>
      </motion.div>
    );
  }
);

Socials.displayName = Socials.displayName;
export default Socials;

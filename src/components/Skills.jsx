import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-start justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl w-full text-center">Compétences</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-start justify-center rounded-full font-semibold bg-dark text-light p-7 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="Java" x="21vw" y="-2vw" />
        <Skill name="Spring" x="12vw" y="-7vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="MongoDB" x="1vw" y="22vw" />
        <Skill name="Tailwind CSS" x="16vw" y="-15vw" />
        <Skill name="Nodejs" x="32vw" y="-5vw" />
        <Skill name="NextJS" x="0vw" y="-20vw" />
        <Skill name="MySQL" x="25vw" y="16vw" />
        <Skill name="Postgres" x="32vw" y="10vw" />
        <Skill name="Docker" x="-20vw" y="0vw" />
        <Skill name="EC2" x="-15vw" y="-10vw" />
        <Skill name="Gitlab-ci" x="-32vw" y="-5vw" />
        <Skill name="Linux" x="-36vw" y="7vw" />
        <Skill name="Nexus" x="-20vw" y="11vw" />
        <Skill name="Git" x="-20vw" y="-18vw" />
        <Skill name="Terraforme" x="-25vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;

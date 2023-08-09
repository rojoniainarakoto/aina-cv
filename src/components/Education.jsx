import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-60">
      <h2 className="font-bold text-7xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul>
          <Details
            type="AWS Cloud Practitioner Certified"
            time="juin 2022 - septembre 2022"
            place="Orange Digital Center"
            info="Formation re/Start d&apos;AWS pour la préparion en certification Cloud Practitioner."
          />
          <Details
            type="Concepteur Développeur d&apos;Application Numérique"
            time="décembre 2020 - juin 2021"
            place="Inclusiv Academy"
            info="La formation équivaut à un niveau Bac+4 en Génie logiciel, couvrant non seulement 
            le développement d&apos;applications, mais également la gestion de projets avec la méthodologie Agile."
          />
          <Details
            type="Licence en Informatique"
            time="2018-2020"
            place="InATA"
            info="a formation est axée sur l&apos;administration système et réseau en se concentrant sur les produits Cisco, dans le but de préparer à la certification CCNA."
          />
          <Details
            type="Diplome de Technicien Supérieur"
            time="2015 - 2018"
            place="Ecole Supérieur de Téchnologie"
            info="Formation en administration systéme et réseau."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

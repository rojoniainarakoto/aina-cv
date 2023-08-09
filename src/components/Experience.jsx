import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-5 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp;
          <a href={companyLink} className="uppercase">
            &nbsp; - &nbsp; {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="pt-4 w-full h-full">
      <h2 className="font-bold text-7xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul>
          <Details
            position="Développeur Full-stack"
            company="SOFTWARE OVERSEAS ACADEMY"
            time="Mars 2023-Present"
            address="Androndrakely"
            work="Responsable de la maintenance et du développement d&apos;applications,
                      y compris le déploiement des applications et la création de pipelines avec Gitlab-ci. 
                      Expérience dans l&apos;installation et la configuration d&apos;outils internes.
                    "
          />
          <Details
            position="Administrateur Cloud"
            company="Vanilla Pay"
            time="Mai 2022 - Décembre 2022"
            address="Mahamasina"
            work="Assurant l&apos;administration des serveurs cloud AWS pour chaque application utilisée, en prenant en charge les mises à jour et les maintenances. 
                  Responsable de l&apos;administration des serveurs cloud sur Planethoster, Plesk et Oracle Cloud, ainsi que des serveurs locaux. 
                  Gestion de l&apos;administration des réseaux en utilisant PfSense. Implémentation du déploiement et de la migration des applications. 
                  Mise en place de mesures de sécurité et gestion des accès aux systèmes.
                    "
          />
          <Details
            position="Développeur Full-stack"
            company="Inclusiv Academy"
            time="Août 2021 - Avril 2022"
            address="Faravohitra"
            work="Les tâches comprenaient l&apos;installation de Docker et la création d&apos;images Docker pour les technologies utilisées.
                    L&apos;automatisation du déploiement a été réalisée à l&apos;aide d&apos;Ansible et Gitlab. 
                    Développement des services API Rest en utilisant Spring et Keycloak pour assurer la sécurité. 
                    "
          />
          <Details
            position="Stage en administration système et réseaux"
            company="SALFA"
            time="Octobre 2017 - Février 2018"
            address="Andohalo"
            work="Réaménagement du réseau de l&apos;entreprise, incluant le recâblage et l'optimisation. 
                  Mise en place de serveurs Samba et Webmin sur LinuxMint pour faciliter la gestion des ressources partagées. 
                  Résolution des problèmes techniques sur les ordinateurs et effectuer les dépannages nécessaires. 
                  Migration de systèmes Windows vers LinuxMint en veillant à une transition fluide et efficace.
                    "
          />
          <Details
            position="Stage en administrations réseaux"
            company="DSI JIRAMA"
            time="Septembre 2016 - Novembre 2016"
            address="Antaninarenina"
            work="Les compétences acquises comprennent le dépannage des ordinateurs, l&apos;installation du système d&apos;exploitation, la mise en réseau des ordinateurs et des imprimantes, ainsi que la configuration des réseaux locaux (LAN).
                    "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

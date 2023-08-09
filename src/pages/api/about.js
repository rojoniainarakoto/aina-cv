import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import NextImage from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Aina | A propos</title>
        <meta
          name="description"
          content="Ce page contient tous ce qui est à propos de moi"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-5">
          <AnimatedText text="La passion alimente le but !" className="mb-18" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biographie
              </h2>
              <p className="font-medium">
                - Je suis Rojo Ny Aina, développeur full-stack et certifié AWS
                Cloud Practitioner. Avec 3 ans d&apos;expérience dans le domaine, je
                suis toujours à la recherche de nouvelles méthodes innovantes
                pour concrétiser les visions de mes clients.
              </p>
              <p className="my-4 font-medium">
                - Je crois que le design va au-delà de simplement rendre les
                choses belles - c&apos;est une façon de résoudre des problèmes et de
                créer des expériences intuitives et agréables pour les
                utilisateurs.
              </p>
              <p className="font-medium">
                - Que ce soit pour la conception d&apos;un site web, l&apos;administration
                Cloud ou tout autre produit numérique, j&apos;apporte mon engagement
                envers l&apos;excellence et ma réflexion centrée sur l&apos;utilisateur à
                chaque projet sur lequel je travaille. J&apos;attends avec impatience
                l&apos;occasion de mettre mes compétences et ma passion au service de
                votre prochain projet.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-[1rem] border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <NextImage
                src={profilePic}
                alt="Rojo Ny Aina"
                className="w-full h-auto rounded-2xl"
                loader={({ src }) => `${src}`}
                />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  clients satisfaits
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projets achevés
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  années d&apos;expérience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;

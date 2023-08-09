import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import NextImage from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aina | Accueil</title>
        <meta name="description" content="Application qui enregistre mon parcours professionnelle et academique" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
            <NextImage
                src={profilePic}
                alt="Rojo Ny Aina"
                className="w-full h-auto"
                loader={({ src }) => `${src}`}
                />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Penser. Créer. Résoudre." className='!text-6xl !text-left'/>
              <h3 className='text-xl text-[#7d7c7c] font-semibold'>- Ce que je fais</h3>
              <p className='my-4 text-base font-medium'>
                J&apos;aime créer des expériences numériques agréables et centrées sur l&apos;humain.
                En tant que développeur full-stack compétent, je suis déterminé à transformer des idées en applications web innovantes.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/CV_Rojoniaina_RAKOTOARIMANANA.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                    font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  '
                  download={true}>
                    Résumé <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:rojonyainar@gmail.com" target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 inline-block w-24'>
          <NextImage
                src={lightBulb}
                alt="Rojo Ny Aina"
                className="w-full h-auto"
                loader={({ src }) => `${src}`}
                />
        </div>
      </main>
    </>
  );
};

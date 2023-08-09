import Head from 'next/head';
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import React from "react";

const parcours = () => {
  return (
    <>
      <Head>
        <title>Aina | Parcours</title>
        <meta
          name="description"
          content="Dans cette partie, il est question de mon historique professionnel et éducatif."
        />
      </Head>
      <main className='w-full h-full m-0 p-0'>
        <Layout className="pt-0">
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default parcours;

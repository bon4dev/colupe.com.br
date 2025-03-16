import { Geist } from 'next/font/google';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>LCO Systems</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div
        className={`min-h-screen flex items-center justify-center ${geistSans.variable}`}
      >
        <h1 className="text-4xl font-bold">LCO Systems</h1>
      </div>
    </>
  );
}

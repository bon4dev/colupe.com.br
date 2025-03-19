import { Geist } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

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
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">LCO Systems</h1>
          <Link
            href="/cedup/estagio"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Acessar Sistema de Estágio
          </Link>
        </div>
      </div>
    </>
  );
}

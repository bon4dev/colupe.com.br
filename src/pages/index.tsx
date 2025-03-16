import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${geistSans.variable}`}
    >
      <h1 className="text-4xl font-bold">LCO Systems</h1>
    </div>
  );
}

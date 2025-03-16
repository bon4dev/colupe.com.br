import { Geist } from 'next/font/google';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const apostilas = [
  {
    titulo: 'Transformadores',
    link: 'https://drive.google.com/file/d/109oLrURgAnzv5fyGTjrGhOJAHE9lHqo1/view?usp=sharing',
  },
  {
    titulo: 'Motores',
    link: 'https://drive.google.com/file/d/10ZK_H-QasuN6X1-YVjuHGhwHVKRw1P4a/view?usp=sharing',
  },
  {
    titulo: 'Proteção e Comando',
    link: 'https://drive.google.com/file/d/1whPXUqOWbhktC_C1ryB7LI1ClbQOIvvt/view?usp=sharing',
  },
  {
    titulo: 'Tabela de Fios de Cobre',
    link: 'https://drive.google.com/file/d/1q5CaknluXQYr2IGQnK0DKuk5onQeaF6A/view?usp=sharing',
  },
  {
    titulo: 'Manual de Bobinagem Kohlbach',
    link: 'https://drive.google.com/file/d/1FLJCFAr__SnEzKm_F1AZNyxoD_IdxANg/view?usp=sharing',
  },
  {
    titulo: 'Apostila de Instalações Elétricas',
    link: 'https://drive.google.com/file/d/1Lfh9yk1w18F9xt6rq_nplYPPCg8dVnmp/view?usp=sharing',
  },
  {
    titulo: 'Apostila de Medidas Elétricas',
    link: 'https://drive.google.com/file/d/1v-5tIwZFVosVHVpoB0cGMbsGOiKWOyFX/view?usp=sharing',
  },
];

export default function Apostilas() {
  return (
    <>
      <Head>
        <title>Apostilas - CEDUP</title>
        <link rel="icon" href="/icone.png" type="image/png" />
      </Head>

      <div className={`min-h-screen p-8 ${geistSans.variable}`}>
        <h1 className="text-3xl font-bold mb-8 text-center">Apostilas</h1>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {apostilas.map((apostila, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <a
                  href={apostila.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-lg flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {apostila.titulo}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

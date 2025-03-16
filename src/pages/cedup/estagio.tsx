import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function Estagio() {
  return (
    <div className={`min-h-screen p-8 ${geistSans.variable}`}>
      <h1 className="text-3xl font-bold mb-6">Estágio</h1>
      <div className="max-w-4xl">
        <p className="text-lg mb-4">Bem-vindo à página de estágio do CEDUP.</p>
        {/* Aqui você pode adicionar o conteúdo específico sobre estágios */}
      </div>
    </div>
  );
}

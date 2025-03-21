import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    comentarios: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Enviando...' });

    try {
      // Aqui você pode adicionar a lógica de envio do formulário
      console.log('Dados do formulário:', formData);
      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ nome: '', email: '', comentarios: '' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contato - COLUPE</title>
        <meta name="description" content="Entre em contato conosco" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="comentarios"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Comentários
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-md ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : status.type === 'error'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

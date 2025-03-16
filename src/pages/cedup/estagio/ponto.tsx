'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Ponto() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [mes, setMes] = useState('0');
  const [ano, setAno] = useState(new Date().getFullYear().toString());
  const [showPrint, setShowPrint] = useState(false);

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  useEffect(() => {
    const dataAtual = new Date();
    setMes(dataAtual.getMonth().toString());
    setAno(dataAtual.getFullYear().toString());
  }, []);

  const gerarTabela = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrint(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const getDiasDoMes = () => {
    const data = new Date(parseInt(ano), parseInt(mes), 1);
    const dias = [];

    while (data.getMonth() === parseInt(mes)) {
      const dia = data.getDate();
      const diaSemana = data.getDay();

      dias.push({ dia, diaSemana });
      data.setDate(dia + 1);
    }

    return dias;
  };

  return (
    <>
      <Head>
        <title>Folha Ponto - CEDUP</title>
      </Head>

      <div className="min-h-screen">
        <Header fixed className="py-4" />

        {/* Formulário */}
        <div
          className={`pt-40 w-[650px] mx-auto ${
            showPrint ? 'hidden print:hidden' : ''
          }`}
        >
          <div className="container mt-5">
            <h2 className="mb-4 text-2xl font-bold">Folha Ponto</h2>
          </div>
          <form onSubmit={gerarTabela}>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <label htmlFor="nomeAluno" className="block mb-2">
                  Nome Completo do Aluno
                </label>
                <a
                  href="https://docs.google.com/spreadsheets/d/1z7w8EqC-GUW2pKOYleRnkllsgNw4W05u/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Acesso a Planilha
                </a>
              </div>
              <input
                type="text"
                id="nomeAluno"
                className="w-full p-2 border rounded"
                required
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="mes" className="block mb-2">
                  Mês:
                </label>
                <select
                  id="mes"
                  className="w-full p-2 border rounded"
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                >
                  {meses.map((mes, index) => (
                    <option key={index} value={index}>
                      {mes}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ano" className="block mb-2">
                  Ano:
                </label>
                <input
                  type="number"
                  id="ano"
                  className="w-full p-2 border rounded"
                  min="1900"
                  max="2100"
                  required
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Imprimir
            </button>
          </form>
        </div>

        {/* Área de Impressão */}
        <div
          className={`hidden print:block ${
            showPrint ? 'block' : ''
          } pt-40 w-[900px] mx-auto`}
        >
          <div className="text-center text-xl font-bold space-y-2">
            <p>
              FOLHA PONTO – {meses[parseInt(mes)]} / {ano}
            </p>
            <p>ESTAGIÁRIO – {nomeAluno}</p>
          </div>

          <table className="w-full mt-6 border-collapse">
            <thead>
              <tr>
                <th className="w-[30px] border border-black bg-gray-200 p-2">
                  Dia
                </th>
                <th className="w-[450px] border border-black bg-gray-200 p-2">
                  Nome
                </th>
                <th className="w-[130px] border border-black bg-gray-200 p-2">
                  Entrada
                </th>
                <th className="w-[130px] border border-black bg-gray-200 p-2">
                  Saída
                </th>
                <th className="w-[180px] border border-black bg-gray-200 p-2">
                  Rubrica
                </th>
              </tr>
            </thead>
            <tbody>
              {getDiasDoMes().map(({ dia, diaSemana }) => (
                <tr
                  key={dia}
                  className={`${
                    diaSemana === 0 || diaSemana === 6 ? 'bg-gray-200' : ''
                  }`}
                >
                  <td className="border border-black p-2 bg-gray-200">{dia}</td>
                  <td className="border border-black p-2">
                    {diaSemana === 0
                      ? 'DOMINGO'
                      : diaSemana === 6
                      ? 'SÁBADO'
                      : ''}
                  </td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Footer fixed className="p-4" />
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 20mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
}

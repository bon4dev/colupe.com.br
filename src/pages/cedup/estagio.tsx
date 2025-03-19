'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Constante do ambiente
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000';

export default function Estagio() {
  return (
    <div className="container mx-auto px-4">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Procedimentos */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">11 - Procedimentos</h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <Link
                  href="/cedup/estagio/carta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1101 - Imprimir Carta de Apresentação de Estágio
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href={`${DOMAIN}/cedup/estagio/tce`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1105 - Imprimir Termo de Compromisso de Estágio TCE
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <Link
                  href="/cedup/estagio/ponto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1109 - Imprimir Folha Ponto
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href={`${DOMAIN}/cedup/estagiarios`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1112 - Ver e Editar a lista de Estagiários
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Planilhas */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">12 - Planilhas</h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/spreadsheets/d/1z7w8EqC-GUW2pKOYleRnkllsgNw4W05u/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1201 - Pendentes com o Estágio Obrigatório
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/spreadsheets/d/1oh05I2fYpzRD3r9_VbTV35smze7gxWti/edit?usp=sharing&ouid=112183676535910190232&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1203 - Relatórios Aprovados
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/spreadsheets/d/1s6sQCYvhdnzszquke_nWa-vsI-5ygZcK/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1205 - Convênio Empresas Atualizado
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Documentos */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">15 - Documentos</h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1k3WR9MBszogzR3-v_-E4OYJ7s2A0QL4U/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1501 - Termo de Compromisso de Estágio e Plano de Estágio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1xay9AEVA-uzqLhXRWo7FcuyxPLwx5nFU/edit?usp=sharing&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1502 - Termo de Convênio Empresa
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1zo95nUgNc-10iCqD9L968-e2bwwLKdod/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1507 - Requerimento dispensa Estágio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1Jsac0nW4uPuWFFTSjGWbHWW_bXmx_TZt/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1508 - Carta apresentação estágio curricular obrigatório
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1JPuv4MgkMOI9aLZY0bPP6lqUu1wUOKEQ/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1515 - Ficha Acompanhamento Estágio Obrigatório
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1Ryo4emBb_CLXUxsOE3CLTcU2w3p6eQbg/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1516 - Folha Ponto dos Estagiários
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1Sc1ecZcegiUykWSFJ7oLR22nyXzXhM1M/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1520 - Relatório de Avaliação do Estagiário
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1RgcTBGfCOa86-dpzyiAzu1V6Tn-NO5Cq/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1523 - Termo de Avaliação do Relatório
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1EGkiY-ySCPeNcKn_ZvcQ7iboZV6kNCwt/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1525 - Modelo de Relatório
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://drive.google.com/file/d/1GFiTi-ILv481bcfFX6iBtg-_i_hWA4Kz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1530 - Portaria 124 21-01-2020
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instruções */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">
              51 - Instruções de como fazer passo a passo
            </h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1XQ0gJihdHN53B-Kq4qVkk0TAqkM4V-s4/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5100 - Dados do Seguro de Vida
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1KGRJguQV53Xjoth0RygUM0zl4AVoSOtrMCoNzBezl5A/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5101 - Avaliar Relatório de Estágio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1aehgrOO6z2D3k1nS2qWhcD6RRB0elZ_zy9MFXkWdt7o/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5103 - Avaliar Requerimento de Dispensa de Estágio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1my911RBFw2qXFlQPggN-ctM5x7o5zOkKG7JWNxJ5efI/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5105 - Enviar por email instruções para a empresa
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1p0LwoPgsYzZrCq_blo3uDvDWb8I2PSwd/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5106 - Preencher TCE Obrigatório com Convênio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1e4Dp_nA8z0r9JGPcMjCbA3He2kao_Akf/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5107 - Preencher TCE Obrigatório sem Convênio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1HVt7aQjnaYCseR8RHK6IDtVB_qZMcO4_1-UQSnhOaFQ/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5109 - TCE Protocolar o recebimento
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1I2H20BajlGijaI93w0iXL5WNpfrC1IYllQC9WtBmR8Q/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  5110 - Termo de Convênio Protocolar o recebimento
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Declarações */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">16 - Declarações</h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1t_4FYLVWkd3MZ_5JEZqsgLJlWsfzdzHF/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1621 - Declaração Estágio no Cedup
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1LhlcWOglzllWninxX6itCdS7Z4msUWvZ/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1622 - Declaração de Estágio
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href="https://docs.google.com/document/d/1S6SPVFu_uAZfFJguekNCkWaL2VI82qkX/edit?usp=drive_link&ouid=110841182330939065822&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1630 - Declaração de Diploma em Tramitação
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

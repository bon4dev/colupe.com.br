import Image from 'next/image';

// Constante do ambiente
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000';

export default function Estagio() {
  return (
    <div className="container mx-auto px-4">
      {/* Cabeçalho */}
      <header className="flex items-center justify-between py-6">
        <div className="w-20 h-20 relative">
          <Image
            src="/images/brazao.png"
            alt="Brasão"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="text-center flex-1 mx-8">
          <div className="space-y-1">
            <p className="text-sm font-semibold">ESTADO DE SANTA CATARINA</p>
            <p className="text-sm font-semibold">
              SECRETARIA DE ESTADO DA EDUCAÇÃO
            </p>
            <p className="text-sm font-semibold">
              CENTRO DE EDUCAÇÃO PROFISSIONAL &ldquo;DARIO GERALDO SALLES&rdquo;
              - CEDUP
            </p>
            <p className="text-sm font-semibold">
              SETOR DE ESTÁGIO - JOINVILLE
            </p>
          </div>
        </div>

        <div className="w-20 h-20 relative">
          <Image
            src="/images/cedup.png"
            alt="CEDUP"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Procedimentos */}
        <div className="rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h5 className="text-lg font-medium">11 - Procedimentos</h5>
          </div>
          <div className="divide-y divide-gray-200">
            <ul>
              <li className="px-4 py-3 hover:bg-gray-50">
                <a
                  href={`${DOMAIN}/cedup/estagio/carta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1101 - Imprimir Carta de Apresentação de Estágio
                </a>
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
                <a
                  href={`${DOMAIN}/cedup/estagio/ponto`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  1109 - Imprimir Folha Ponto
                </a>
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
      </div>
    </div>
  );
}

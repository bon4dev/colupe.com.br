import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cursoURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vShZorYX2beBEdGmUYadD9rofdIPRH7GMZ2R8FjmAa0zWz1Mzs3q9Wmd_2iCM2UmUYjWd8wgSG7k5E8/pub?output=csv';

export default function Carta() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [matriculaAluno, setMatriculaAluno] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [curso, setCurso] = useState('');
  const [cursos, setCursos] = useState<{ value: string; text: string }[]>([]);
  const [showPrint, setShowPrint] = useState(false);
  const [professorData, setProfessorData] = useState({
    nome: '',
    matricula: '',
    email: '',
  });

  useEffect(() => {
    fetch(cursoURL)
      .then((response) => response.text())
      .then((data) => {
        const linhas = data.split('\n');
        const linhasSemPrimeira = linhas.slice(1);
        const cursosData = linhasSemPrimeira
          .map((linha) => {
            const colunas = linha.split(',');
            if (colunas.length >= 2) {
              return {
                value: colunas[0].trim(),
                text: colunas[1].trim(),
              };
            }
            return null;
          })
          .filter((item): item is { value: string; text: string } =>
            Boolean(item)
          );
        setCursos(cursosData);
      })
      .catch((error) => {
        console.error('Erro ao carregar os cursos:', error);
        alert('Erro ao carregar os cursos');
      });
  }, []);

  const getDataAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const buscarDados = async (chaveSelecionada: string) => {
    try {
      const resposta = await fetch(cursoURL);
      const texto = await resposta.text();
      const linhas = texto.split('\n');
      const resultado = linhas.find(
        (linha) => linha.split(',')[0] === chaveSelecionada
      );

      if (resultado) {
        const colunas = resultado.split(',');
        return {
          nome: colunas[3],
          matricula: colunas[2],
          email: colunas[4],
        };
      }
      throw new Error('Curso não encontrado');
    } catch (erro) {
      console.error('Erro ao buscar dados:', erro);
      alert('Erro ao buscar dados');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeAluno || !matriculaAluno || !cargaHoraria || !curso) return;

    const dados = await buscarDados(curso);
    if (dados) {
      setProfessorData(dados);
      setShowPrint(true);
      setTimeout(() => window.print(), 100);
    }
  };

  return (
    <>
      <Head>
        <title>Carta de Apresentação - CEDUP</title>
      </Head>

      <div className={`${showPrint ? 'hidden print:block' : 'block'}`}>
        <div className="w-[650px] mx-auto p-5">
          <h1 className="text-2xl font-bold mb-4">Carta de Apresentação</h1>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setNomeAluno(e.target.value.toUpperCase())}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="matriculaAluno" className="block mb-2">
                Matrícula do Aluno
              </label>
              <input
                type="number"
                id="matriculaAluno"
                className="w-full p-2 border rounded [appearance:textfield]"
                required
                value={matriculaAluno}
                onChange={(e) => setMatriculaAluno(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cargaHoraria" className="block mb-2">
                Carga Horária
              </label>
              <input
                type="number"
                id="cargaHoraria"
                className="w-full p-2 border rounded [appearance:textfield]"
                required
                value={cargaHoraria}
                onChange={(e) => setCargaHoraria(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="curso" className="block mb-2">
                Selecione o nome do curso
              </label>
              <select
                id="curso"
                className="w-full p-2 border rounded"
                required
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              >
                <option value="" disabled>
                  Selecione um curso
                </option>
                {cursos.map((curso, index) => (
                  <option key={index} value={curso.value}>
                    {curso.text}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Imprimir
            </button>
          </form>
        </div>
      </div>

      <div
        className={`${
          showPrint ? 'block' : 'hidden'
        } print:block w-[900px] mx-auto p-4`}
      >
        <Header fixed={true} />

        <main className="mt-32 mb-24 px-8 text-justify">
          <p className="text-center font-bold text-lg mb-4">
            CARTA DE APRESENTAÇÃO ESTÁGIO CURRICULAR OBRIGATÓRIO
          </p>

          <p className="indent-8 text-lg leading-relaxed">
            A Coordenação de Estágio do CEDUP apresenta o(a) estudante,{' '}
            <span className="font-bold">{nomeAluno}</span>, matrícula nº{' '}
            <span className="font-bold">{matriculaAluno}</span>, matriculado(a)
            no{' '}
            <span className="font-bold">
              {cursos.find((c) => c.value === curso)?.text}
            </span>
            , candidato(a) a uma vaga para{' '}
            <span className="font-bold">
              ESTÁGIO CURRICULAR OBRIGATÓRIO SUPERVISIONADO,
            </span>{' '}
            com carga horária total a cumprir de{' '}
            <span className="font-bold">{cargaHoraria}</span> horas, estágio
            esse fundamentado nas{' '}
            <span className="font-bold">
              Leis nº 11.788 de 25/09/2008 e nº 9.394 de 20/12/1996 da LDB, no
              Projeto Político Pedagógico e na portaria 124 de 21/01/2020 da SED
              que regulamenta o estágio para os alunos da rede pública estadual.
            </span>
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            A jornada do estudante/estagiário(a) será de no máximo 6 (seis)
            horas diárias até o limite de 30 (trinta) horas semanais. Os alunos
            que já concluíram o 3º módulo poderão fazer 8 (oito) horas diárias,
            até o limite de 40 horas semanais.
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            O estágio passa a ter validade somente após a aprovação do{' '}
            <span className="font-bold">
              Termo de Compromisso e Plano de Estágio
            </span>{' '}
            encaminhado em três vias, devidamente preenchidos e assinados pelo
            aluno e pela concedente, com carimbo do CNPJ. Esse documento
            descreve os direitos e deveres das partes envolvidas.{' '}
            <span className="font-bold">
              Em hipótese alguma o estágio deverá ser iniciado sem a assinatura
              desse documento.
            </span>
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            No Plano de Estágio deverá conter as atividades que serão
            desenvolvidas, o horário, a quantidade de horas diárias e total do
            aluno.
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            <span className="text-xl font-bold">
              É obrigatório Seguro de Acidente Pessoais
            </span>
            . Caso a empresa não contrate o seguro, a Secretaria de Estado da
            Educação possui uma apólice para os alunos vinculados às
            instituições estaduais de ensino que tenham cursos com estágio
            obrigatório{' '}
            <span className="font-bold">(entrar em contato por email </span>
            <a
              href="mailto:estagiocedupjlle@sed.sc.gov.br"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              estagiocedupjlle@sed.sc.gov.br
            </a>
            <span className="font-bold"> para maiores informações).</span>
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            Quaisquer alterações nas cláusulas do Termo de Compromisso devem ser
            imediatamente comunicadas através de um aditivo ao TCE.
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            De acordo com a lei do estágio, a concedente facilitará a supervisão{' '}
            <span className="italic">in loco</span> do estágio, realizada pelos
            representantes da unidade escolar, disponibilizando a documentação
            referente ao estágio e avaliações. A Unidade Escolar se compromete
            no sigilo das informações obtidas inerentes à supervisão.
          </p>

          <p className="indent-8 text-lg leading-relaxed mt-4">
            O{' '}
            <span className="font-bold">
              Termo de Compromisso e Plano de Estágio{' '}
            </span>
            deverá ser solicitado por e-mail pelo endereço{' '}
            <a
              href="mailto:estagiocedupjlle@sed.sc.gov.br"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              estagiocedupjlle@sed.sc.gov.br
            </a>
            .
          </p>

          <p className="text-lg mt-4">
            <span className="font-bold">
              Dados do orientador de estágio: {professorData.nome}
            </span>
          </p>

          <p className="text-lg">
            Matrícula: {professorData.matricula} – E-mail: {professorData.email}
          </p>

          <p className="text-lg mt-4">Atenciosamente,</p>

          <p className="text-lg text-right mt-4">
            Joinville, {getDataAtual()}.
          </p>
        </main>

        <Footer fixed={true} />
      </div>
    </>
  );
}

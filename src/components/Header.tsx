import Image from 'next/image';

interface HeaderProps {
  fixed?: boolean;
  className?: string;
}

export default function Header({ fixed = false, className = '' }: HeaderProps) {
  return (
    <header
      className={`${
        fixed ? 'fixed top-0 left-0 right-0 bg-white z-10' : ''
      } ${className}`}
    >
      <div className="flex items-center justify-center space-x-4 py-6">
        <Image
          src="/images/brazao.png"
          alt="Brasão"
          width={106}
          height={91}
          className="object-contain"
        />

        <div className="text-center font-bold">
          <p>ESTADO DE SANTA CATARINA</p>
          <p>SECRETARIA DE ESTADO DA EDUCAÇÃO</p>
          <p>COORDENADORIA REGIONAL DA EDUCAÇÃO - CRE</p>
          <p>
            CENTRO DE EDUCAÇÃO PROFISSIONAL &ldquo;DARIO GERALDO SALLES&rdquo; -
            CEDUP
          </p>
          <p>SETOR DE ESTÁGIO - JOINVILLE</p>
        </div>

        <Image
          src="/images/cedup.png"
          alt="CEDUP"
          width={91}
          height={91}
          className="object-contain"
        />
      </div>
    </header>
  );
}

interface FooterProps {
  fixed?: boolean;
  className?: string;
}

export default function Footer({ fixed = false, className = '' }: FooterProps) {
  return (
    <footer
      className={`${
        fixed ? 'fixed bottom-0 left-0 right-0 bg-white' : 'pb-2'
      } text-center text-sm text-gray-600 ${className}`}
    >
      <div className="space-y-2">
        <p>
          Rua Monsenhor Gercino, 2071 – Bairro Itaum – CEP 89210-155 – Joinville
          – SC Telefone - 34812136
        </p>
        <p>
          <a
            href="https://www.cedup.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            www.cedup.com.br
          </a>
          {' - email - '}
          <a
            href="mailto:estagiocedupjlle@sed.sc.gov.br"
            className="text-blue-600 hover:text-blue-800"
          >
            estagiocedupjlle@sed.sc.gov.br
          </a>
        </p>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} LCO Systems, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

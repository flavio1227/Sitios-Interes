import { ExternalLink } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  description: string;
  url: string;
}

interface InstitutionCardProps {
  institution: Institution;
}

function InstitutionCard({ institution }: InstitutionCardProps) {
  return (
    <div className="bg-custom-blue rounded-lg border border-gray-200 shadow-sm hover:shadow transition-shadow duration-200 flex flex-col h-full relative overflow-hidden">
      {/* Iframe de fondo con opacidad */}
      <iframe
        src={institution.url}
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0"
        style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
        title={`Preview de ${institution.name}`}
      />
      
      {/* Contenido del card con z-index para estar encima */}
      <div className="p-6 flex-1 flex flex-col relative z-10 bg-custom-blue/80 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-custom-yellow flex-1">
            {institution.name}
          </h3>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-gray-500 border border-gray-300 ml-2">
            Sitio oficial
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {institution.description}
        </p>

        <a
          href={institution.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2.5 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors duration-200"
        >
          Visitar sitio
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default InstitutionCard;

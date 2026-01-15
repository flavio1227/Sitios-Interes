import { ExternalLink } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
}

interface InstitutionCardProps {
  institution: Institution;
}

function InstitutionCard({ institution }: InstitutionCardProps) {
  return (
    <div className="bg-custom-blue rounded-lg border border-gray-200 shadow-sm hover:shadow transition-shadow duration-200 flex flex-col relative overflow-hidden" style={{ minHeight: '400px', maxHeight: '450px' }}>
      {/* SVG de fondo con opacidad */}
      <img
        src={institution.icon}
        alt={`${institution.name} icon`}
        className="absolute pointer-events-none"
        style={{ 
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          objectFit: 'contain',
          opacity: 0.2,
          zIndex: 0
        }}
        onError={(e) => {
          console.error('Error cargando SVG:', institution.icon, e);
          e.currentTarget.style.display = 'none';
        }}
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          console.log('SVG cargado exitosamente:', institution.icon, {
            naturalWidth: target.naturalWidth,
            naturalHeight: target.naturalHeight,
            width: target.width,
            height: target.height,
            complete: target.complete
          });
        }}
      />
      
      {/* Contenido del card */}
      <div className="p-6 flex flex-col h-full relative z-10 bg-custom-blue/70">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-custom-yellow flex-1">
            {institution.name}
          </h3>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-gray-500 border border-gray-300 ml-2">
            Sitio oficial
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
          {institution.description}
        </p>

        <div className="mt-auto">
          <a
            href={institution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors duration-200 w-full"
          >
            Visitar sitio
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default InstitutionCard;

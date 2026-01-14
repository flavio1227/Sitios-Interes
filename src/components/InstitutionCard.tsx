import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

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
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Generar URL de preview usando ScreenshotAPI.net con API key
  const API_KEY = 'W0EGHQG-HY6MJRV-M7TA8GQ-PD5N05B';
  const encodedUrl = encodeURIComponent(institution.url);
  // URL correcta según documentación oficial: shot.screenshotapi.net
  const previewUrl = `https://shot.screenshotapi.net/screenshot?token=${API_KEY}&url=${encodedUrl}`;
  
  // Verificar la respuesta de la API antes de mostrar la imagen
  React.useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(previewUrl, { method: 'HEAD' });
        const contentType = response.headers.get('content-type');
        
        console.log('Respuesta de API para', institution.name, ':', {
          status: response.status,
          statusText: response.statusText,
          contentType: contentType,
          ok: response.ok,
          previewUrl: previewUrl
        });
        
        // Si no es una imagen, intentar ver qué devuelve realmente
        if (!response.ok || !contentType?.startsWith('image/')) {
          console.error('La API no devolvió una imagen válida para:', institution.name);
          console.error('Status:', response.status, 'Content-Type:', contentType);
          
          // Intentar obtener el cuerpo de la respuesta para ver el error
          try {
            const textResponse = await fetch(previewUrl);
            const text = await textResponse.text();
            console.error('Respuesta de error de la API:', text.substring(0, 500));
          } catch (e) {
            console.error('No se pudo leer la respuesta de error');
          }
          
          setImageError(true);
        }
      } catch (error) {
        console.error('Error verificando preview para', institution.name, ':', error);
        setImageError(true);
      }
    };
    
    checkImage();
  }, [previewUrl, institution.name]);
  
  return (
    <div className="bg-custom-blue rounded-lg border border-gray-200 shadow-sm hover:shadow transition-shadow duration-200 flex flex-col relative overflow-hidden" style={{ minHeight: '400px', maxHeight: '450px' }}>
      {/* Imagen de preview como fondo */}
      {!imageError && (
        <img
          src={previewUrl}
          alt={`Preview de ${institution.name}`}
          className={`absolute inset-0 w-full h-full object-cover opacity-10 transition-opacity duration-300 ${imageLoaded ? 'opacity-10' : 'opacity-0'}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error('Error cargando preview:', {
              institutionName: institution.name,
              originalUrl: institution.url,
              previewUrl: previewUrl,
              error: target.error,
              naturalWidth: target.naturalWidth,
              naturalHeight: target.naturalHeight,
              complete: target.complete,
              src: target.src
            });
            console.error('URL completa del preview:', previewUrl);
            setImageError(true);
          }}
          onLoad={() => {
            console.log('Preview cargado exitosamente para:', institution.url, previewUrl);
            setImageLoaded(true);
          }}
          loading="lazy"
        />
      )}
      
      {/* Contenido del card con z-index para estar encima */}
      <div className="p-6 flex flex-col relative z-10 bg-custom-blue/80 backdrop-blur-sm h-full">
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

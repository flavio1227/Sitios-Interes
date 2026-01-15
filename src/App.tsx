import InstitutionCard from './components/InstitutionCard';

const institutions = [
  {
    id: 1,
    name: 'Asociación de Municipios de Honduras (AMHON)',
    description: 'Entidad que representa y fortalece a los gobiernos municipales, promoviendo el desarrollo local y la gestión territorial.',
    url: 'https://amhon.hn/',
    icon: '/Sitios-Interes/amhon.svg',
  },
  {
    id: 2,
    name: 'Instituto de Conservación Forestal (ICF)',
    description: 'Responsable de la protección, conservación y manejo sostenible de los recursos forestales y áreas protegidas.',
    url: 'https://icf.gob.hn/',
    icon: '/Sitios-Interes/icf.svg',
  },
  {
    id: 3,
    name: 'Secretaría de Recursos Naturales y Ambiente (SERNA)',
    description: 'Institución rectora de la política ambiental y de recursos naturales del país.',
    url: 'https://serna.gob.hn/',
    icon: '/Sitios-Interes/serna.svg',
  },
  {
    id: 4,
    name: 'Instituto de la Propiedad (IP) – Plataforma Digital',
    description: 'Sistema nacional de catastro, registro y administración de la propiedad.',
    url: 'https://app.ip.gob.hn/#/menu',
    icon: '/Sitios-Interes/ip.svg',
  },
  {
    id: 5,
    name: 'Procuraduría General de la República (PGR)',
    description: 'Entidad encargada de la representación legal y defensa de los intereses del Estado.',
    url: 'https://pgr.gob.hn/',
    icon: '/Sitios-Interes/pgr.svg',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <a
        href="https://flavio1227.github.io/SIGEM1.1/"
        className="fixed top-4 left-4 z-50 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 inline-block cursor-pointer"
      >
        SIGEM
      </a>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Red de Instituciones Vinculadas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {institutions.map((institution) => (
            <InstitutionCard key={institution.id} institution={institution} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

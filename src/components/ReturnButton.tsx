import { ArrowLeft } from 'lucide-react';

function ReturnButton() {
  return (
    <div className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="https://flavio1227.github.io/SIGEM1.1/"
          className="inline-flex items-center px-6 py-2.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Sistema Principal
        </a>
      </div>
    </div>
  );
}

export default ReturnButton;

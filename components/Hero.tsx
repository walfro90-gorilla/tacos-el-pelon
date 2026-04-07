import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-200 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Business Name ZEUS Added as per QA feedback */}
        <h1 className="text-6xl font-extrabold mb-4">ZEUS</h1>
        {/* Original tagline retained below */}
        <p className="text-2xl mb-6">
          Disfruta los mejores tacos al pastor en la ciudad
        </p>
        <a
          href="#menu"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Ver Menú
        </a>
      </div>
    </section>
  );
};

export default Hero;

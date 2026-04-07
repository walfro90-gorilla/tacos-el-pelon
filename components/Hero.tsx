export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <h1 className="text-5xl font-extrabold mb-4">[Título Hero]</h1>
      <p className="text-lg max-w-2xl mb-6">[Texto hero: usa el copy de Koko aquí]</p>
      <a href="#menu" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">
        Ver Menú
      </a>
    </section>
  );
}

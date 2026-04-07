export default function Menu() {
  return (
    <section id="menu" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestro Menú</h2>
      {/* Aquí va la lista de tacos con descripciones y precios usando el copy de Koko */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-4 rounded">
          <h3 className="font-semibold mb-2">[Taco Name]</h3>
          <p className="text-sm mb-1">[Descripción]</p>
          <span className="font-bold">[Precio]</span>
        </div>
        {/* Más ítems... */}
      </div>
    </section>
  );
}

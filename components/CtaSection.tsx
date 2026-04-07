export default function CtaSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-[url('/cta-bg.jpg')] bg-cover bg-center text-center">
      <h2 className="text-3xl font-bold mb-4">[Título CTA]</h2>
      <p className="mb-6">[Copy CTA: invita a visitar o hacer pedido]</p>
      <a href="tel:+123456789" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">
        Llámanos Ahora
      </a>
    </section>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Cada testimonio */}
        <blockquote className="bg-slate-800 p-4 rounded">
          <p className="italic">“[Testimonio de cliente]”</p>
          <footer className="mt-2 text-right">- [Nombre Cliente]</footer>
        </blockquote>
      </div>
    </section>
  );
}

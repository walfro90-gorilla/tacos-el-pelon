import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center">
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/tacos-el-pelon/tacos-el-pelon-logo-A.png?v=1775547323694"
            alt="Logo"
            width={48}
            height={48}
          />
          <span className="ml-2 text-xl font-bold">Tacos el Pelon</span>
        </a>
      </Link>
      <div className="space-x-4">
        <Link href="#menu"><a>Menú</a></Link>
        <Link href="#about"><a>Nosotros</a></Link>
        <Link href="#testimonials"><a>Testimonios</a></Link>
        <Link href="#contact"><a>Contacto</a></Link>
      </div>
    </nav>
  );
}

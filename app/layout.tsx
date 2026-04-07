import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tacos el Pelon',
  description: 'Los tacos más sabrosos y auténticos de la ciudad'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Candelaria ',
  description: 'La Candelaria, tu destino privilegiado para eventos inolvidables en Monte Grande. Nuestro salón de eventos combina elegancia y versatilidad, ofreciendo un espacio perfecto para bodas, reuniones corporativas y celebraciones especiales. En La Candelaria, nos enorgullecemos de proporcionar un servicio excepcional y atención personalizada para garantizar que tu evento sea tan único como tú. Ubicado en el corazón de Monte Grande, nuestro salón está diseñado para impresionar, con instalaciones modernas y un ambiente acogedor que hará que tus invitados se sientan especiales. Explora La Candelaria para tu próximo evento y crea recuerdos que durarán toda la vida.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

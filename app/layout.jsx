import "./globals.css";

export const metadata = {
  title: "Khaing Myo Lin | Penetration Tester",
  description: "OSCP+ | OSCP | CPTS | CRTA | AD-RTS | Cybersecurity Professional",
  keywords: "pentester, cybersecurity, OSCP, red team, penetration testing",
  authors: [{ name: "Khaing Myo Lin" }],
  openGraph: {
    title: "Khaing Myo Lin | Penetration Tester",
    description: "Cybersecurity professional with OSCP+, OSCP, CPTS, CRTA, AD-RTS certifications",
    type: "website",
    url: "https://boboaung1337.github.io",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="scanline antialiased">
        {children}
      </body>
    </html>
  );
}
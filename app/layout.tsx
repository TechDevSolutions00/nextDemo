import type { Metadata } from "next";
import { Source_Sans_3, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar/navbar";
// import Footer from "@/components/layout/Footer/footer";
// import SmoothScroll from "@/components/utils/smoothScroll";



const source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Atmosphere",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        {/* <Navbar /> */}
        {/* <Navbar /> */}
        {/* <SmoothScroll> */}
          <section className="flex-grow mx-auto w-full">
            {children}
          </section>
        {/* </SmoothScroll> */}
        {/* <Footer /> */}
        {/* Background Music */}
        {/* <audio src="/audio/audio.mp3" autoPlay loop muted={false} /> */}
      </body>
    </html>
  );
}

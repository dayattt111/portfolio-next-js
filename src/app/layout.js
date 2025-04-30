import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import Hero from "./hero/hero";
import About from "./about/page";
import Contact from "./contact/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <About />
        <CardList />
        <Contact />
        
        {/* <main>{children}</main> */}

        <Footer />
      
      </body>
    </html>
  );
}

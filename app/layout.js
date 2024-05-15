import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";

const defaultFont = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        {/* <div class="container"> */}
        <Header />
        <Hero />
        <About />
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}

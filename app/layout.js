import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

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
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}

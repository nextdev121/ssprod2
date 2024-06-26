import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S&S Engineering",
  description: "Generated by create next app",
  icons: "favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="nav">
          <NavBar/>
        </div>
        {children}
        <div className="footer">
          <Footer/>
        </div>
        </body>
    </html>
  );
}

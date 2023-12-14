import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex h-screen overflow-y-scroll flex-col items-center p-14 gap-10 ${inter.className}`}
    >
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to Pocket-Farm
      </h1>
      <h2 className="text-xl text-center mb-8 text-gray-400">
        Feel free to develop along this frontend.
      </h2>
    </main>
    <Footer />
  </div>
  );
}

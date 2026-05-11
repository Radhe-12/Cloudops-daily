import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="text-center p-10">

        <h2 className="text-5xl font-bold mb-4">
          DevOps & AI News Dailycd
        </h2>

        <p className="text-gray-700 text-lg">
          Learn DevOps, Cloud & AI with daily articles and tutorials.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Explore Articles
        </button>

      </section>

    </main>
  );
}
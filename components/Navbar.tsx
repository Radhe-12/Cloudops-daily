import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">

      <div className="max-w-6xl max-auto flex flex-colmd:flex-row justify-between items-center px-6 py-4 gap-4">

        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          CloudOps Daily 🚀
        </Link>

        <div className="flex gap-6 text-lg font-medium">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            href="/admin"
            className="hover:text-blue-600 transition"
          >
            Admin
          </Link>

        </div>

      </div>

    </nav>
  );
}
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-orange-100 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-orange-700">Air Fryer Zone</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/best-air-fryer-toaster-oven" className="hover:text-orange-600">Best Picks</Link>
          <Link href="/air-fryer-oven-vs-regular-oven" className="hover:text-orange-600">Comparisons</Link>
          <Link href="/air-fryer-temperature-guide" className="hover:text-orange-600">Guides</Link>
          <Link href="/about" className="hover:text-orange-600">About</Link>
        </nav>
        <div className="md:hidden">
          <Link href="/best-air-fryer-toaster-oven" className="text-sm font-semibold text-orange-700">Best Picks →</Link>
        </div>
      </div>
    </header>
  );
}

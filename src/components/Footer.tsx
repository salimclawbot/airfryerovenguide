import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-orange-100 bg-orange-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">Air Fryer Zone</h3>
          <p className="mt-2">Expert air fryer toaster oven reviews, buying guides and comparisons. Find the best air fryer for your kitchen in 2026.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Top Guides</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/best-air-fryer-toaster-oven" className="hover:text-orange-600">Best Air Fryer Toaster Ovens</Link></li>
            <li><Link href="/air-fryer-oven-vs-regular-oven" className="hover:text-orange-600">Air Fryer vs Regular Oven</Link></li>
            <li><Link href="/air-fryer-temperature-guide" className="hover:text-orange-600">Temperature Guide</Link></li>
            <li><Link href="/best-air-fryer-oven-under-100" className="hover:text-orange-600">Best Under $100</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Info</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about" className="hover:text-orange-600">About</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-orange-600">Affiliate Disclosure</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Air Fryer Zone is reader-supported. We may earn a commission on purchases made through links on this site.</p>
        </div>
      </div>
      <div className="border-t border-orange-100 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Air Fryer Zone. All rights reserved.
      </div>
    </footer>
  );
}

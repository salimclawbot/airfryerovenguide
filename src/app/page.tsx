import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticle } from "@/lib/articles";

export const metadata: Metadata = { title: "Home Coffee Spot", description: "Expert guides to home coffee brewing, espresso machines, grinders, and beans.", alternates: { canonical: "https://homecoffeespot.com" } };

export default async function HomePage() {
  const slugs = getAllSlugs();
  const articles = (await Promise.all(slugs.map((s) => getArticle(s)))).filter(Boolean) as any[];
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Home Coffee Spot</h1>
      <p className="mb-8 text-xl text-slate-600">Expert guides to home coffee brewing, espresso machines, grinders, and beans.</p>
      <div className="mb-10 flex flex-wrap gap-3">
        <Link href="/best-espresso-machine-home" className="rounded-lg bg-slate-900 px-4 py-2 text-white">Featured Guide</Link>
        <Link href="/best-coffee-grinder-home" className="rounded-lg border border-slate-300 px-4 py-2">Popular Pick</Link>
      </div>
      <div className="grid gap-6">
        {articles.map((a) => (
          <Link key={a.slug} href={`/${a.slug}`} className="block rounded-xl border border-slate-200 p-6 hover:shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">{a.title}</h2>
            <p className="text-slate-600">{a.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticle } from "@/lib/articles";
export const metadata: Metadata = {
  title: "Best Air Fryer Toaster Ovens (2026): Expert-Tested Picks",
  description: "Expert-tested air fryer toaster oven reviews, buying guides and comparisons for 2026. Find the best air fryer oven for your kitchen with our hands-on testing.",
  alternates: { canonical: "https://airfryerzone.com" },
};
export default async function HomePage() {
  const slugs = getAllSlugs();
  const articles = (await Promise.all(slugs.map(s => getArticle(s)))).filter(Boolean);
      return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Best Air Fryer Toaster Ovens (2026)</h1>
      <p className="mb-12 text-xl text-slate-600">Expert-tested picks for crispier food, faster cooking, and less oil.</p>
      <div className="grid gap-6">
        {articles.map((a) => a && (
          <Link key={a.slug} href={`/${a.slug}`} className="block rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-600 hover:shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">{a.title}</h2>
            <p className="text-slate-600">{a.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-blue-600">Read guide →</span>
          </Link>
        ))}
      </div>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {"@type":"Question","name":"What is the best air fryer toaster oven in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Breville Smart Oven Air Fryer Pro is our top pick for 2026, offering the best combination of capacity, cooking performance and ease of use."}},
            {"@type":"Question","name":"Are air fryer toaster ovens worth it?","acceptedAnswer":{"@type":"Answer","text":"Yes — air fryer toaster ovens are worth it for most households. They replace multiple appliances, cook faster than conventional ovens, and use 70% less energy."}},
            {"@type":"Question","name":"How is an air fryer oven different from a regular air fryer?","acceptedAnswer":{"@type":"Answer","text":"Air fryer toaster ovens are larger countertop appliances that can toast, bake, broil and air fry. Regular air fryers are smaller and primarily designed for air frying only."}}
          ]
        })}}
      />
      </main>
  );
}

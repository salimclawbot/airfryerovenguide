import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "@/lib/articles";
import Link from "next/link";

interface PageProps { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: { absolute: `${article.title} | Air Fryer Zone` },
    description: article.description,
    alternates: { canonical: `https://airfryerzone.com/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://airfryerzone.com/${article.slug}`,
      type: "article",
      siteName: "Air Fryer Zone",
      images: article.image ? [{ url: `https://airfryerzone.com${article.image}`, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author || "Marcus Webb, Kitchen Appliance Expert" },
    publisher: {
      "@type": "Organization",
      name: "Air Fryer Zone",
      logo: { "@type": "ImageObject", url: "https://airfryerzone.com/icon.svg" },
    },
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://airfryerzone.com/${article.slug}` },
    image: article.image ? `https://airfryerzone.com${article.image}` : "https://airfryerzone.com/og-image.jpg",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {article.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{article.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Category + title */}
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">{article.category || "Air Fryer Guide"}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{article.title}</h1>
        <p className="mt-3 text-sm text-slate-500">By {article.author || "Marcus Webb"} · Updated {article.dateModified || article.date}</p>

        {/* Hero image */}
        {article.image && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-auto" loading="eager" />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-slate max-w-none mt-8 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-6 [&_figure]:max-w-full [&_figure]:overflow-hidden [&_table]:display-block [&_table]:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        />
      </article>
    </>
  );
}

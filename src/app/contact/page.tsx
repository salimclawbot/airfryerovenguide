export const metadata = { title: "Contact", alternates: { canonical: "https://airfryerzone.com/contact" } };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Questions, corrections, or partnership inquiries:</p>
      <p><a className="text-blue-700 underline" href="mailto:hello@Air Fryer Zone">hello@Air Fryer Zone</a></p>
    </div>
  );
}

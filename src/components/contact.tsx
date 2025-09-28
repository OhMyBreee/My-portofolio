export default function Contact() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4">I’m currently seeking internship opportunities starting Jan 26, 2026.</p>
      <div className="flex flex-col items-center gap-2">
        <a href="mailto:your@email.com" className="text-blue-500 hover:underline">
          📧 your@email.com
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" className="text-blue-500 hover:underline">
          📷 Instagram
        </a>
        <a href="https://wa.me/yourwhatsapplink" target="_blank" className="text-blue-500 hover:underline">
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}

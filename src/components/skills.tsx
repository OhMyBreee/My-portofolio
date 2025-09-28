const skills = {
  languages: ["C (9.5/10)", "C++ (8/10)", "Java (8/10)", "Python (9/10)", "JavaScript (8/10)", "PHP (7/10)", "SQL (9/10)", "TypeScript (7/10)"],
  frameworks: ["Next.js", "Flask", "Laravel (6/10)", "TensorFlow"],
  tools: ["Git", "Conda", "VSCode", "Figma", "Supabase", "GitHub Pages", "Vercel"],
  soft: ["Teamwork", "Problem-solving", "Mentoring", "Decision-making"]
};

export default function Skills() {
  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([key, values]) => (
          <div key={key}>
            <h3 className="font-semibold capitalize mb-3">{key}</h3>
            <ul className="flex flex-wrap gap-2">
              {values.map(v => (
                <li key={v} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">{v}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

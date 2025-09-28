// import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map(t => (
          <span key={t} className="text-xs bg-blue-100 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

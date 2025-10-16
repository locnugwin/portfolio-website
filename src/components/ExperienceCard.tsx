import React from "react";

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  technologies: string[];
  overview: string;
  contributions: string[];
  image?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl h-full flex flex-col"
    >
      <div className="flex flex-col mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors mb-1">
          {experience.company}
        </h3>
        <span className="text-gray-400 text-xs">{experience.duration}</span>
      </div>
      
      <p className="text-green-400 mb-3 text-sm font-medium">{experience.position}</p>
      
      <p className="text-gray-300 mb-4 text-sm overflow-hidden flex-grow" style={{
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical' as const
      }}>
        {experience.overview}
      </p>
      
      <div className="flex flex-wrap gap-1 mt-auto">
        {experience.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {experience.technologies.length > 3 && (
          <span className="px-2 py-1 text-gray-400 text-xs">
            +{experience.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
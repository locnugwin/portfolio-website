import React, { useEffect } from "react";
import { Experience } from "./ExperienceCard";

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !experience) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] flex overflow-hidden">
        {/* Left side - Company info */}
        <div className="w-1/3 bg-gray-800 p-6 flex flex-col">
          <button
            onClick={onClose}
            className="self-end text-gray-400 hover:text-white text-2xl mb-4"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">{experience.company}</h2>
          <p className="text-green-400 text-lg mb-2">{experience.position}</p>
          <p className="text-gray-300 mb-4">{experience.duration}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - Scrollable content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">overview</h3>
              <p className="text-gray-300 leading-relaxed">{experience.overview}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">key contributions</h3>
              <ul className="space-y-3">
                {experience.contributions.map((contribution, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
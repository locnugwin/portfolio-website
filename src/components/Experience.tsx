import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import ExperienceCard, { type Experience } from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import { experiences } from "../data/experiences";

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full space-y-6">
          <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">
            &larr; back
          </Link>
          <h1 className="text-4xl font-bold text-white">experience</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                onClick={() => handleCardClick(experience)}
              />
            ))}
          </div>
        </div>
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Experience;

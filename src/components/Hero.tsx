import React from "react";
import { Link } from "@tanstack/react-router";

const Hero: React.FC = () => {
  {/* Styles */}
  const buttonStyle = {
    primary: "bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded font-medium transition-colors",
    secondary: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded font-medium transition-colors",
    text: "text-green-400 hover:underline",
  };

  {/* Helper Functions */}
  const handleExternalLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };
  const handleGitHubClick = () => {
    handleExternalLinkClick("https://github.com/locnugwin");
  };
  const handleLinkedInClick = () => {
    handleExternalLinkClick("https://www.linkedin.com/in/locnugwin/");
  };
  const handleContactClick = () => {
    handleEmailClick("loc@nugwin.net");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-white">hi, i'm loc.</h1>
        <p className="text-white">
          a computer science and mathematics student
        </p>
        {/* Sections */}
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">learn more</span>{" "}
          <Link to="/about" className={buttonStyle.text}>
            about me
          </Link>
        </div>
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">check out my</span>{" "}
          <Link to="/experience" className={buttonStyle.text}>
            experience
          </Link>
        </div>
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">browse my</span>{" "}
          <Link to="/projects" className={buttonStyle.text}>
            projects
          </Link>
        </div>
        {/* Current Work */}
        <p className="text-white text-lg mb-8">
          i'm currently building at{" "}
          <a href="https://www.bcm.io/" target="_blank" className={buttonStyle.text}>
            beavercreek marketing
          </a>
          {" "}and{" "}
          <a href="https://reachtestprep.org/" target="_blank" className={buttonStyle.text}>
            reach
          </a>
          .
        </p>
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button onClick={handleGitHubClick} className={buttonStyle.primary}>
            my github
          </button>
          <button onClick={handleLinkedInClick} className={buttonStyle.primary}>
            my linkedin
          </button>
          <button onClick={handleContactClick} className={buttonStyle.secondary}>
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

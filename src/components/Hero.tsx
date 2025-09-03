import React from "react";

const Hero: React.FC = () => {
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
          a computer science and mathematics student—
        </p>
        {/* Sections */}
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">learn more</span>{" "}
          <a href="#" className="text-green-400 hover:underline">
            about me
          </a>
        </div>
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">check out my</span>{" "}
          <a href="#" className="text-green-400 hover:underline">
            experience
          </a>
        </div>
        <div className="mb-1">
          <span className="mr-3 text-gray-400 opacity-50">&gt;</span>{" "}
          <span className="text-white">browse my</span>{" "}
          <a href="#" className="text-green-400 hover:underline">
            projects
          </a>
        </div>
        {/* Current Work */}
        <p className="text-white text-lg mb-8">
          i'm currently building at{" "}
          <a
            href="#"
            target="_blank"
            className="text-green-400 hover:underline"
          >
            Lorem ipsum dolor
          </a>
          .
        </p>
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleGitHubClick}
            className="bg-green-500 text-white px-6 py-3 rounded font-medium transition-colors"
          >
            my github
          </button>
          <button
            onClick={handleLinkedInClick}
            className="bg-green-500 text-white px-6 py-3 rounded font-medium transition-colors"
          >
            my linkedin
          </button>
          <button
            onClick={handleContactClick}
            className="border-2 border-green-500 text-green-500 px-6 py-3 rounded font-medium transition-colors"
          >
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

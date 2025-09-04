import React from "react";
import { Link } from "@tanstack/react-router";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-4">
        <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">&larr; back</Link>
        <h1 className="text-4xl font-bold text-white">hi, this is an about page.</h1>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "@tanstack/react-router";

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-4">
        <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">&larr; back</Link>
        <h1 className="text-4xl font-bold text-white">hi, this is an experience page.</h1>
        <p className="text-white">
          oops, you found this page. there's nothing here yet, but feel free to come back later!
        </p>
      </div>
    </div>
  );
};

export default Experience;

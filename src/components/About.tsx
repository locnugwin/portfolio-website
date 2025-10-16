import React from "react";
import { Link } from "@tanstack/react-router";
import Lloid from "../assets/Lloid_NH.png";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-4">
        <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">&larr; back</Link>
        <h1 className="text-4xl font-bold text-white">about me</h1>
        <p className="text-white">
          i'm a fourth year computer science and mathematics student at the university of nebraska-lincoln with declared focus areas in foundations of computer science and software engineering. i have previous experience working on full-stack web and mobile applications &#58;&#41;
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import {
  Node,
    react,
    Java,
    HTML,
    CSS,
    JavaScript,
    Python,
    Angular,
    Flutter,
    PHP,
    BootStrap,
    MUI,
} from "../helpers/projectsImg";

const getVariableName = (variable) => {
  // Create an object that maps variables to their names
  const variableMap = { Node, react, Java, HTML, CSS, JavaScript, Python, Angular, Flutter, PHP, BootStrap, MUI, };

  // Find the key corresponding to the given variable
  return Object.keys(variableMap).find((key) => variableMap[key] === variable);
};

const TechStackIcon = ({ image }) => {
  // Get the name of the variable dynamically
  const language = getVariableName(image);

  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={image} 
          alt={`${language} icon`} 
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {language}
      </span>
    </div>
  );
};

export default TechStackIcon;

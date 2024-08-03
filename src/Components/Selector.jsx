import React, { useState, useEffect } from "react";
import Projects from "./Projects";

const Selector = () => {
  const [project, setProject] = useState("All");

  // Function to handle button clicks
  const handleClick = (value) => () => {
    setProject(value);
  };

  useEffect(() => {
    console.log("Current project:", project);
  }, [project]); 

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 text-center">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center my-10">
        <div className="flex rounded-md shadow-sm mb-3 md:mb-0" role="group">
          <button
            onClick={handleClick("All")}
            type="button"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 md:rounded-l-2xl ${project === "All" ? "bg-gray-300" : ""}`}
          >
            <svg
              className="w-3 lg:w-4 h-3 lg:h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18v2H3V5Zm0 4h18v2H3V9Zm0 4h18v2H3v-2Zm0 4h18v2H3v-2Z" />
            </svg>
            All
          </button>
          <button
            onClick={handleClick("Websites")}
            type="button"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 ${project === "Websites" ? "bg-gray-300" : ""}`}
          >
            <svg
              className="w-3 lg:w-4 h-3 lg:h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H4Zm14 4H2v10h16V6Zm-8 8h4v-2h-4v2Zm0-3h4v-2h-4v2Zm0-3h4V8h-4v2Z" />
            </svg>
            Websites
          </button>
        </div>
        <div className="flex rounded-md shadow-sm" role="group">
          <button
            onClick={handleClick("Applications")}
            type="button"
            className={`inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 ${project === "Applications" ? "bg-gray-300" : ""}`}
          >
            <svg
              className="w-3 lg:w-4 h-3 lg:h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h5v5H4V4Zm0 7h5v5H4v-5Zm0 7h5v5H4v-5Zm7-14h5v5h-5V4Zm0 7h5v5h-5v-5Zm0 7h5v5h-5v-5Zm7-14h5v5h-5V4Zm0 7h5v5h-5v-5Zm0 7h5v5h-5v-5Z" />
            </svg>
            Applications
          </button>
          <button
            onClick={handleClick("Games")}
            type="button"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 md:rounded-r-2xl ${project === "Games" ? "bg-gray-300" : ""}`}
          >
            <svg
              className="w-3 lg:w-4 h-3 lg:h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C8.686 0 6 2.686 6 6c0 1.366.476 2.623 1.273 3.623L4.325 12.5a1.5 1.5 0 0 0 0 2.121l3.975 3.975c.54.541 1.354.627 1.977.209l5.23-4.232c.626-.521.654-1.424.052-1.963L13.873 8.623c.881-.706 1.505-1.726 1.715-2.873L17 6c0-3.314-2.686-6-6-6Zm-1 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-2.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-2.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm10.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            Games
          </button>
        </div>
      </div>
      <Projects projects = {project}/>
    </>
  );
};

export default Selector;

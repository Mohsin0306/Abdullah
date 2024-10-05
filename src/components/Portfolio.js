import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./images/1.jpeg" alt="Project 1" className="w-full rounded-md mb-4"/>
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-600 mt-2">This is my First Project</p>
        </div>
        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./images/2.jpeg" alt="Project 2" className="w-full rounded-md mb-4"/>
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-600 mt-2">This is my Second Project</p>
        </div>
        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="./images/3.jpeg" alt="Project 3" className="w-full rounded-md mb-4"/>
          <h3 className="text-xl font-semibold">Project 3</h3>
          <p className="text-gray-600 mt-2">This is my Third Project.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

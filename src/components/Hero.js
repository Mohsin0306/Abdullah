import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-6 py-12 bg-gray-50">
      <div className="space-y-4 md:w-1/2">
        <p className="text-gray-500 text-lg md:text-xl">Hey, I'm Abdullah</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          I enjoy designing websites and App Development
        </h1>
        <button className="bg-black text-white px-6 py-2 rounded-md mt-4">Get in touch</button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img src="./images/owner.jpeg" alt="John Carter" className="w-5/4 md:w-full rounded-full mx-auto md:mx-0" />
      </div>
    </section>
  );
};

export default Hero;

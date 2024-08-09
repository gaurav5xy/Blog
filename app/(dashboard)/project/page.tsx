import React from 'react';
import Link from 'next/link';
import Projects from '@/components/Projects';
const Project = () => {
  return (
    <main>
    <div className="h-[25rem] sm:h-[35rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span className=" text-7xl sm:text-9xl ">PROJECTS</span>
        </p>
      </div>
      <Projects/>
  </main>
  )
}

export default Project
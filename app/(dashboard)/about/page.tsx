import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
const About = () => {
  return (
    <main>
      <div className="h-[25rem] sm:h-[35rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span className=" text-7xl sm:text-9xl ">ABOUT</span>
        </p>
      </div>

      <div className=" px-5 sm:px-16">
        <div className=" w-full flex flex-col gap-8 items-center justify-center">
          <Image
            src="/image/about/image.png"
            alt="img"
            width={1216}
            height={556}
          />

          <div className=" w-full">
            <h1 className=" text-2xl font-semibold">About Me</h1>
            <span className=" text-base font-light text-neutral-300">
              As a passionate and experienced UI designer, I am dedicated to
              creating intuitive and engaging user experiences that meet the
              needs of my clients and their users. I have a strong understanding
              of design principles and a proficiency in design tools, and I am
              comfortable working with cross-functional teams to bring projects
              to fruition. I am confident in my ability to create designs that
              are both visually appealing and functional, and I am always
              looking for new challenges and opportunities to grow as a
              designer.
            </span>
          </div>

          <div className=" w-full">
            <h1 className=" text-2xl font-semibold">Skills:</h1>
            <ul className=" flex flex-col gap-2 text-base font-light text-neutral-300">
              <li>
                Extensive experience in UI design, with a strong portfolio of
                completed projects
              </li>
              <li>
                Proficiency in design tools such as Adobe Creative Suite and
                Sketch
              </li>
              <li>
                Excellent visual design skills, with a strong understanding of
                layout, color theory, and typography
              </li>
              <li>
                Ability to create wireframes and prototypes to communicate
                design concepts
              </li>
              <li>
                Strong communication and collaboration skills, with the ability
                to work effectively with cross-functional teams
              </li>
              <li>
                Experience conducting user research and gathering insights to
                inform design decisions
              </li>
              <li>Proficiency in HTML, CSS, and JavaScript</li>
            </ul>
          </div>

          <div className=" w-full">
            <h1 className=" text-2xl font-semibold">Experience:</h1>
            <ul className=" flex flex-col gap-2 text-base font-light text-neutral-300">
              <li>
                5 years of experience as a UI designer, working on a variety of
                projects for clients in the tech and retail industries
              </li>
              <li>
                Led the design of a successful e-commerce website, resulting in
                a 25% increase in online sales
              </li>
              <li>
                Created wireframes and prototypes for a mobile banking app,
                leading to a 20% increase in app usage
              </li>
              <li>
                Conducted user research and usability testing to inform the
                redesign of a healthcare provider's website, resulting in a 15%
                increase in website traffic
              </li>
            </ul>
          </div>

          <div className=" w-full">
            <h1 className=" text-2xl font-semibold">Education:</h1>
            <ul className=" flex flex-col gap-2 text-base font-light text-neutral-300">
              <li>Bachelor's degree in Graphic Design </li>
              <li>Certified User Experience Designer (CUED) </li>
            </ul>
          </div>

          <Footer/>
        
        </div>
      </div>
    </main>
  );
};

export default About;

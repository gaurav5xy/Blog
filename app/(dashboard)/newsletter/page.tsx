"use client";
import React from "react";
import { BackgroundBeams } from "../../../components/Background-beams";
import Blog from "@/components/Blog";
import { blogs } from "@/data/blogs";
import Footer from "@/components/Footer";
const NewsLetter = () => {
  return (
    <main>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Stories and interviews
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xs sm:text-lg text-center relative z-10">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>

          <div className=" flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="rounded-lg border  border-neutral-800 focus:outline-none w-9/12 sm:h-10 text-center relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
            <button className="rounded-lg border text-xs p-1 sm:text-lg  border-neutral-800 focus:outline-none md:w-1/5 sm:h-10 text-center relative z-10 mt-4  bg-neutral-950 text-neutral-500">
              Subscribe
            </button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <div className=" px-5 sm:px-16">
        <div className="mt-12 mb-5 ">
          <h1 className=" text-3xl font-bold text-neutral-200 text-center mb-5">
            All Blog Posts
          </h1>
          <p className=" text-center text-lg">
            Discover the latest insights in UX/UI design and tech trends.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full">
          <Blog blogs={blogs} />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default NewsLetter;

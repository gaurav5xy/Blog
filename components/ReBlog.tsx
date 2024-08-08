import Image from "next/image";
import React from "react";

const ReBlog = () => {
  return (
    <>
      <main className=" px-16">
        <h1 className=" text-2xl text-neutral-200 my-8">Recent Blog Posts</h1>
        <div className=" grid md:grid-rows-3 md:grid-cols-2 gap-1">
          
          <div className="flex flex-col gap-3 md:row-span-2 p-2">
              <Image
                src="/image/blogs/image2.png"
                alt="img"
                width={592}
                height={228}
              />
              <span className=" text-sm font-semibold text-custom-green">Sunday , 1 Jan 2023</span>
              <h1 className=" text-2xl font-semibold">Grid system for better Design User Interface</h1>
              <p className=" text-base font-normal text-neutral-300">
              A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
              </p>
          </div>

          <div className="flex gap-3 p-2">
          <Image
                src="/image/blogs/image3.png"
                alt="img"
                width={320}
                height={200}
              />
              <div>

              <span className=" text-sm font-semibold text-custom-green">Sunday , 1 Jan 2023</span>
              <h1 className=" text-2xl font-semibold">Migrating to Linear 101</h1>
              <p className=" text-base font-normal text-neutral-300">
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...              </p>
              </div>
          </div>
          
          <div className="flex gap-3 p-2">
          <Image
                src="/image/blogs/image4.png"
                alt="img"
                width={320}
                height={200}
              />
              <div>

              <span className=" text-sm font-semibold text-custom-green">Sunday , 1 Jan 2023</span>
              <h1 className=" text-2xl font-semibold">Building your API Stack</h1>
              <p className=" text-base font-normal text-neutral-300">
              The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
              </p>
              </div>
          </div>

          <div className=" flex md:flex-row flex-col gap-3 md:col-span-2 p-2">
              <Image
                src="/image/blogs/image1.png"
                alt="img"
                width={592}
                height={228}
              />
              <div className=" flex flex-col gap-3">
              <span className=" text-sm font-semibold text-custom-green">Sunday , 1 Jan 2023</span>
              <h1 className=" text-2xl font-semibold">UX review presentations</h1>
              <p className=" text-base font-normal text-neutral-300">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReBlog;

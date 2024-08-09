// pages/blog.tsx
import React from "react";
import Image from "next/image";


const Blog = ({blogs}) => {
  return (
    <>
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-3 p-2 md:w-96">
            <Image src={blog.image} alt="img" width={384} height={240} className=" w-full" />
            <div>
              <span className="text-sm font-semibold text-custom-green">
                {blog.date}
              </span>
              <h1 className="text-2xl font-semibold">{blog.title}</h1>
              <p className="text-base font-light text-neutral-300">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </>
  );
};

export default Blog;

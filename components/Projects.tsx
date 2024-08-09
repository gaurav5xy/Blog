import React from 'react'
import Blog from './Blog'
import { blogs } from '@/data/blogs'
const Projects = () => {
  return (
    <main>
      <div className="my-5 ">
          <p className=" text-center text-lg">
            Discover the latest insights in UX/UI design and tech trends.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full">
        <Blog blogs={blogs} />
        </div>
        <div className=" w-full h-px bg-white mt-5"></div>
    </main>
  )
}

export default Projects
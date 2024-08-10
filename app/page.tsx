import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ReBlog from "@/components/ReBlog";
import { Spotlight } from "@/components/Spotlight";
import { blogs } from "@/data/blogs";
export default function Home() {
  return (
    <main>
      <div className="h-[30rem] sm:h-[40rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <Spotlight
        className="-top-20 left-20 md:left-60 md:-top-20"
        fill="white"
      />
          <span className=" text-7xl sm:text-9xl ">THE BLOG</span>
          <span className="  w-5/6 h-16 sm:h-auto overflow-hidden lg:w-3/5 flex text-base sm:text-2xl m-auto text-center  font-light text-neutral-400 mt-4">
            Dive into the world of design with tips, tutorials. Explore the
            latest trends in UX/UI design and tech innovations, and learn how to
            create intuitive, user-friendly interfaces that captivate and
            engage.
          </span>
        </p>
      </div>
      <div className=" px-5 sm:px-16">
        <ReBlog />
        
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
        
        <div className=" w-full h-px bg-white mt-5"></div>

        <div className=" text-sm sm:text-lg flex justify-between my-5 font-light">
          <span>Previous</span>
          <div>
            <ul className=" flex gap-3 sm:gap-5">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>...</li>
              <li>...</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
          <span>Next</span>
        </div>
        <Footer />
      </div>
    </main>
  );
}

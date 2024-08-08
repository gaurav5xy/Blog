import  ReBlog  from "@/components/ReBlog";

export default function Home() {
  return (
    <main>
      <div className="h-[35rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span className=" text-9xl">THE BLOG</span>
          <span className=" w-3/5 flex text-2xl m-auto text-center  font-light text-neutral-400 mt-4">
          Dive into the world of design with tips, tutorials. Explore the latest trends in UX/UI design and tech innovations, and learn how to create intuitive, user-friendly interfaces that captivate and engage.
          </span>
        </p>
      </div>
      <ReBlog/>
    </main>
  );
}

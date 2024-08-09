"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full h-16 px-8 bg-black">
      {/* Desktop Navbar */}
      <nav className="hidden mx-auto w-11/12 h-16 md:flex justify-between items-center">
        <div className="relative">
          <h1 className="text-2xl font-bold"><Link href='/'>Gaurav Kumar</Link></h1>
          <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
        </div>
        <ul className="flex space-x-6 items-center text-base font-light text-gray-200">
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/newsletter">Newsletter</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden mx-auto w-full h-16 flex justify-between items-center">
        <div className="relative">
          <h1 className="text-2xl font-bold">Gaurav Kumar</h1>
          <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-white h-8 w-8"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setMenu(!menu)}
        >
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
        </svg>

        {/* Mobile Menu */}
        {menu && (
          <div className="absolute left-0 top-0 w-full h-screen flex flex-col items-center space-y-12 justify-center bg-black">
            <div className="relative">
              <h1 className="text-2xl font-bold">Gaurav Kumar</h1>
              <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
            </div>
            <ul className="flex flex-col text-2xl items-center space-y-8 font-light text-gray-200">
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/project">Project</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
            </ul>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-8 w-8 text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setMenu(false)}
            >
              <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
            </svg>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
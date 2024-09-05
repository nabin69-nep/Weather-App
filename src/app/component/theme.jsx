"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
export default function Theme() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className=" absolute right-10 top-5 ">
      {darkMode ? (
        <MdDarkMode
          className="text-white duration-200 ease-in cursor-pointer text-5xl md:text-6xl"
          onClick={() => setDarkMode(!darkMode)}
        />
      ) : (
        <MdOutlineLightMode
          className="text-black duration-200 ease-in cursor-pointer text-5xl md:text-6xl"
          onClick={() => setDarkMode(!darkMode)}
        />
      )}
    </div>
  );
}

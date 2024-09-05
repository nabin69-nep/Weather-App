"use client";
import React,{useEffect} from "react";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { WiHumidity } from "react-icons/wi";
import { WiDayCloudyGusts } from "react-icons/wi";
import { useContext } from "react";
import Weather from "../../context/weather"
export default function page() {
  const { data,setLocation } = useContext(Weather);

  if (!data || !data.weather || !data.main) {
    return (
      <div className="dark:text-white flex-col items-center text-center gap-5 font-bold text-black text-2xl flex justify-center h-96 ">
        <p>Error: Weather data is not available.</p>
        <Link
          className=" bg-blue-400 text-xl hover:bg-blue-600 mt-2 p-2 text-center rounded  text-white font-bold"
          href="/"
        >
          Back to search
        </Link>
      </div>
    );

  }
  {
   useEffect(()=>{
    setLocation("")
   },[]) 
      return (
      <div className="flex  justify-center items-center  h-[96vh]">
          <div className=" flex flex-col justify-center md:w-1/2 w-screen items-center dark:text-black text-white bg-black dark:bg-green-100 p-10 rounded gap-3">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
              className="w-20"
              alt="icon"
            />
            <h2 className="text-4xl  font-bold">
              {(data.main.temp - 273).toFixed(2)}&deg;C
            </h2>
            <p className="text-xl  ">{data.weather[0]?.description}</p>
            <p className="text-xl   pb-5">
              <CiLocationOn className=" inline-block" />
              {data.name}
            </p>
            <hr />
            <div className="flex mt-2 gap-5">
              <div className="flex items-center gap-2 border-r-2 pr-5 border-gray-400">
                <WiDayCloudyGusts className="text-6xl  dark:text-blue-400" />
                <div>
                  <p className="  font-bold">{data.wind.speed} m/s</p>
                  <p className=" ">wind speed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <WiHumidity className="text-6xl  dark:text-blue-400" />
                <div>
                  <p className="  font-bold">{data.main.humidity}%</p>
                  <p className=" ">Humidity</p>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <Link
              className=" bg-blue-400 text-xl hover:bg-blue-600 mt-2 p-2 text-center rounded  text-white font-bold"
              href="/"
            >
              Back to search
            </Link>
          </div>
        </div> 
      )
      }
}

"use client";
import Link from "next/link";
import { useContext } from "react";
import Weather from "@/app/context/weather";

export default function Home() {
  const { setLocation, data, location, getResponse, ownData, getResponseOwn } =
    useContext(Weather);
  function handleClick(e) {
    if (!location || location.trim().length < 4) {
      alert("Please enter a valid city name with at least 4 characters.");
      e.preventDefault();
      return;
    }
    getResponse();
  }

  function handleOwnClick(e) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${long}`);
        getResponseOwn(lat, long);
        if(!ownData.name){
          e.preventDefault();
        }
      },
      (error) => {
        alert("Allow your location to use this feature");
      }
    );
  }
  return (
    <div className="flex sm:mt-0 mt-20 dark:bg-black justify-center items-center h-[50vh] sm:h-[85vh]">
      <div className="flex flex-col bg-black dark:bg-white p-20 rounded">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City Name"
          className="input input-bordered w-full max-w-xs"
        />
        <Link
          onClick={handleClick}
          className="bg-blue-400 text-xl hover:bg-blue-600 mt-2 py-2 text-center rounded text-white font-bold"
          href={`/weather/${data.name}`}
        >
          Search
        </Link>
        <Link
          href={`/ownlocation`}
          onClick={handleOwnClick}
          className="bg-blue-400 text-xl px-1 hover:bg-blue-600 mt-2 py-2 text-center rounded text-white font-bold"
        >
          Know your location Weather
        </Link>
      </div>
     
    </div>
  );
}

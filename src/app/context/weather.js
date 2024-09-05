"use client";
import { useState, createContext } from "react";

const Weather = createContext(null);
export const WeatherProvider = (props) => {
  const [data, setData] = useState([]);
  const [ownData, setOwnData] = useState([]);
  const [location, setLocation] = useState();
  const getResponseOwn=async(lat,lon)=>{
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=315090f0d8f4009ff04aeb0d8cac3619`);
      if (!res.ok) {
        throw new Error(setData("Network response was not ok"));
      }
      const result = await res.json();
      setOwnData(result);
      console.log(ownData)
    } catch (error) { 
      console.log(error);
    }
  };
  const getResponse = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=315090f0d8f4009ff04aeb0d8cac3619`
      );
      if (!res.ok) {
        throw new Error(setData("Network response was not ok"));
      }
      const result = await res.json();
      setData(result);
    } catch (error) { 
      console.log(error);
    }
  };
  return (
    <Weather.Provider
      value={{ location, getResponse, setLocation,data, setData, getResponseOwn,ownData }}
    >
      {props.children}
    </Weather.Provider>
  );
};
export default Weather;

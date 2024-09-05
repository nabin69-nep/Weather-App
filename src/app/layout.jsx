import Theme from "./component/theme"
import "./globals.css";
import {WeatherProvider} from "./context/weather"

export const metadata = {
  title: "Weather App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className=" ">
      <WeatherProvider>
              <body
        className={` duration-200 h-[120vh] dark:bg-black bg-white  `}
      >
       <h1 className=" text-center   dark:text-white text-blue-400 font-bold text-4xl pt-20 sm:pt-10 ">
            Weather Forecast App
          </h1><Theme />   
          {children}
      </body>
      </WeatherProvider>
    </html>
  );
}

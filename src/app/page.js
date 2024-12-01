'use client';
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import { useFetchData } from "./useFetchData";
import { useState } from "react";

export default function Home() {
  const { data: countries, loading, error } = useFetchData("/data.json");
  const [selectedRegion, setSelectedRegion] = useState('');

  if (loading) {
    return <div className="grid w-full place-items-center h-screen"><p className='self-center '>Loading...</p></div>;
  }

  if (error) {
    return <p className='self-center'>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex relative w-full max-w-[400px]">
          <div className="flex items-center justify-center h-full w-16 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-[--searchIcon]">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <input type="text" className="bg-[--input] p-4 pl-16 w-full rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)]" placeholder="Search for a country..." />
        </div>
        <CountryFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
      <CountryList countries={countries} selectedRegion={selectedRegion} />
    </>
  );
}

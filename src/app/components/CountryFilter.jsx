"use client";
export default function CountryFilter({ selectedRegion, setSelectedRegion }) {
  const filterList = [
    { countryName: "africa" },
    { countryName: "americas" },
    { countryName: "asia" },
    { countryName: "europe" },
    { countryName: "oceania" },
  ];

  return (
    <div className="relative flex flex-col gap-2 max-w-52 w-full z-50">
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        aria-placeholder="select"
        className="p-4 capitalize flex flex-col bg-[--secondrybg] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-[height] duration-300 ease"
      >
        <option value="" disabled className="capitalize text-gray-400">
          Filter by Region
        </option>
        {filterList.map((item, index) => (
          <option key={index} value={item.countryName} className="p-4 capitalize">
            {item.countryName}
          </option>
        ))}
      </select>
    </div>
  );
}

{/* <button onClick={toggleDropDown} className="flex justify-between gap-3 bg-[--secondrybg] p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                Filter by Region
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    className={`fill-[--text] ${dropDown ? 'rotate-180' : ''}  transition duration-300 ease-in`}>
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            </button>
<ul className={`absolute top-16 bottom-0 right-0 left-0 flex flex-col bg-[--secondrybg] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)]
                            ${dropDown ? 'h-52' : 'h-0 overflow-hidden'} transition-all duration-300 ease`}>
                {filterList.map((item, index) => (
                    <li key={index} className="flex">
                        <Link href="/" className="w-full py-2 px-4 capitalize hover:bg-[--background] hover:font-semibold transition-[background] duration-300 ease-in">
                            {item.countryName}
                        </Link>
                    </li>
                ))}
            </ul> */}
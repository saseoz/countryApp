"use client";
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

export default function CountryList({ countries, selectedRegion }) {

    const filteredCountries = selectedRegion
    ? countries.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      )
    : countries;

    
    return (
        <ul className="grid self-center gap-14 min-[600px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {
                filteredCountries.map((country, index) => (
                    <li key={country.alpha3Code} className="flex flex-col max-w-72 bg-[--secondrybg] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] overflow-hidden ">
                        <Link href={`/pages/${country.alpha3Code}`}>
                            <div className="flex h-48 overflow-hidden">
                                <Image src={country.flags.png} alt={`${country.name} flag`} layout='responsive' width={500} height={600} className='hover:scale-105 transation duration-300'/>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col gap-4 p-6">
                                    <h2 className="font-bold">{country.name}</h2>
                                    <ul className="">
                                        <li className="">
                                            <p className="">
                                                <span className="font-bold">Population: </span>
                                                {country.population.toLocaleString()}

                                            </p>
                                        </li>
                                        <li className="">
                                            <p className="">
                                                <span className="font-bold">Region: </span>
                                                {country.region}
                                            </p>
                                        </li>
                                        <li className="">
                                            <p className="">
                                                <span className="font-bold">Capital: </span>
                                                {country.capital}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>

    )
}

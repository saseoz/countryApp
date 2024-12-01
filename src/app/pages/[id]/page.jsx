'use client';
import React, { useEffect, useState } from 'react';
import { useFetchData } from '@/app/useFetchData';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailsPage({ params }) {
  const [id, setId] = useState(null);
  const { data: countries, loading, error } = useFetchData('/data.json');

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    resolveParams();
  }, [params]);

  if (!id || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!countries) {
    return <div>No data available</div>;
  }

  const country = countries.find((c) => c.alpha3Code === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className='flex flex-col gap-8 max-lg:max-w-md max-lg:mx-auto'>
      <div className="">
        <Link href="/" className="flex gap-2 px-6 py-2 bg-[--secondrybg] rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.15)] font-light w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='fill-[--text]'>
            <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
          </svg>
          Back
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex w-full">
          <Image src={country.flags.png} alt={`${country.name} flag`} layout='responsive' width={500} height={600} />
        </div>
        <div className="flex flex-col w-full gap-4">
          <h1 className='text-2xl font-bold'>{country.name}</h1>
          <div className="flex flex-col lg:justify-between sm:flex-row gap-12">
            <ul className="flex flex-col gap-4">
              <li className="capitalize">
                <strong>native name: </strong>
                {country.nativeName}
              </li>
              <li className="capitalize">
                <strong>population: </strong>
                {country.population.toLocaleString()}
              </li>
              <li className="capitalize">
                <strong>region: </strong>
                {country.region}
              </li>
              <li className="capitalize">
                <strong>sub region: </strong>
                {country.subregion}
              </li>
              <li className="capitalize">
                <strong>capital: </strong>
                {country.capital}
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="">
                <strong className='capitalize'>top level domain: </strong>
                {country.topLevelDomain}
              </li>
              <li className="capitalize">
                <strong>languages: </strong>
                {country.languages.map(language => language.name).join(', ')}

              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex w-64">
              <h2 className="font-bold text-lg">Border Countries: </h2>
            </div>

            <div className="flex flex-wrap gap-3 w-full">
              {country.borders && country.borders.length === 1 ? (
                <div
                  className="w-24 flex justify-center h-fit px-6 bg-[--secondrybg] rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.15)] font-light"
                >
                  {country.borders[0]}
                </div>
              ) : (
                country.borders?.map((border, index) => (
                  <div
                    key={index}
                    className="w-24 flex justify-center h-fit px-6 bg-[--secondrybg] rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.15)] font-light"
                  >
                    {border}
                  </div>
                ))
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

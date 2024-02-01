"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="lg:w-full md:w-full bg-or text-white">
      <div className="pt-10">
        <div className="text-center justify-center">
          <h2 className="text-2xl font-serif italic">Shows List</h2>
        </div>
        <div className="lg:px-10 lg:mt-10 md:px-10 md:pb-20 md:mt-10 lg:grid lg:grid-cols-4 lg:gap-2 md:grid md:grid-cols-3 md:gap-4 lg:w-full md:full justify-start text-start">
          {shows.map((show) => (
            <div
              key={show.show.id}
              className="border border-white lg:h-[450px] md:h-[400px]"
            >
              <Link href={`/Show?id=${show.show.id}`}>
                <div className="bg-or lg:mb-4 md:mb-2 px-10">
                  {show.show.image?.original ? (
                    <Image
                      height={200}
                      width={300}
                      alt={show.show.name}
                      className="lg:h-64 md:h-52 "
                      src={show.show.image?.original}
                    />
                  ) : (
                    <img
                      src="/dummy.png"
                      alt="Dummy Image"
                      height={300}
                      width={300}
                      className="lg:h-64 md:h-52"
                    />
                  )}
                </div>
              </Link>
              <div className="md:mt-4">
                <span className="lg:text-xl md:text-lg font-bold lg:px-6 md:px-2 lg:mb-6 md:mb-3">
                  {show.show.name}
                </span>
                <div className="flex lg:gap-1 md:gap-6 sm:gap-5 lg:px-6 md:px-2 mt-2">
                  <h1 className="border cursor-pointer border-gray-400 text-gray-400 px-2 rounded-md text-xs ">
                    {show.show.language}
                  </h1>
                  <h1 className="border cursor-pointer border-gray-400 text-gray-400 ml-2 px-2 rounded-md text-xs ">
                    {show.show.genres}
                  </h1>
                </div>
                {show.show.runtime ? (
                  <h1 className="text-sm font-normal mt-2 lg:px-6 md:px-2">
                    Runtime: {show.show.runtime}
                  </h1>
                ) : (
                  <h1 className="text-sm font-normal mt-2 lg:px-6 md:px-2">
                    Runtime: Not Known{" "}
                  </h1>
                )}
                <hr className=" lg:mx-6 md:mx-2 mt-2" />
                <Link href={`/Show?id=${show.show.id}`}>
                  <div className="bg-pe lg:mx-4 md:mx-2 mt-4 ">
                    <button className=" lg:py-2 md:py-2 flex items-center mx-auto text-white rounded font-light">
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

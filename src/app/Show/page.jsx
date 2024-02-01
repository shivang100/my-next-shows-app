"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiClock1 } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import Link from "next/link";
export default function ShowDetails() {
  const router = useRouter();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const id = window.location.href.split("?")[1].split("=")[1];
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, []);
  const scrollToSection = () => {
    const section = document.getElementById("sectionId");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full bg-or text-white">
      {show && (
        <div className="lg:flex lg:flex-col ">
          <div class="lg:flex lg:pt-20 md:pt-10 pt-10 lg:mx-40 lg:gap-10 md:flex md:gap-10 ">
            {show.image?.original ? (
              <Image
                height={200}
                width={300}
                alt={show.name}
                className="h-76 md:ml-10 ml-10 "
                src={show.image?.original}
              />
            ) : (
              <img
                src="/dummy.png"
                alt="Dummy Image"
                height={300}
                width={300}
                className="h-76"
              />
            )}
            <div>
              <div className="lg:flex lg:flex-col lg:gap-4 ml-10 lg;ml-0 md:ml-0 mt-5 lg:mt-0 md:mt-0 flex flex-col gap-5">
                <p className="text-3xl font-medium font-serif italic">
                  {show.name}
                </p>
                <h2 className="text-base font-normal font-serif italic">
                  {show.premiered}
                </h2>
                <div className="flex flex-col">
                  <h1 className="border mb-4 w-24 cursor-pointer text-center border-gray-400 text-gray-400 px-2 rounded-md text-base">
                    {show.genres[0]}
                  </h1>
                  <h1 className="border w-24 text-center cursor-pointer border-gray-400 text-gray-400 px-2 rounded-md text-base">
                    {show.language}
                  </h1>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                  class="text-lg italic "
                ></p>

                <div className="flex gap-10">
                  {show.runtime && (
                    <div className="flex mt-1 gap-2">
                      <CiClock1 className="text-lg" />
                      <h1 className="font-serif -mt-1 italic">
                        Imdb: &nbsp;
                        {show.runtime}
                      </h1>
                    </div>
                  )}

                  {show.rating?.average && (
                    <div className="flex  gap-2">
                      <h1 className="font-serif italic">
                        Imdb: &nbsp;
                        {show.rating.average}
                      </h1>
                      <IoStarOutline className="mt-1" />
                    </div>
                  )}
                </div>
              </div>
              <Link href="/Show#book">
                <div className="mt-28 ml-10 lg:ml-0 md:ml-0 w-44">
                  <button className="lg:py-2 py-4  bg-pe hover:bg-red-700 border rounded-md border-gray-300 px-5 md:py-2 flex text-white font-light">
                    Book a Movie Ticket
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:px-80 md:mx-28 lg:mx-40 md:mt-40 md:pb-20 lg:mb-20 lg:mt-40 mt-20 items-center justify-center text-center mx-16">
            <div className="items-center lg:w-[550px] lg:h-[600px] md:w-[550px] md:h-[600px] h-full w-full  font-serif italic justify-center lg:border md:border flex flex-col">
              <h1 className="text-4xl">Book Ticket</h1>
              <form className="mt-8  ">
                <div className="flex">
                  <div className="">
                    <input
                      placeholder="Name"
                      type="text"
                      className="border-2 placeholder-gray-400 focus:outline-none
                focus:border-white  pt-4 pb-4 mt-2  pl-2  text-base block bg-or
                border-gray-300 rounded-md shadow-xl placeholder:italic placeholder:text-slate-400 "
                    />
                  </div>
                  <div className="mr-0">
                    <input
                      placeholder="Mobile No."
                      type="text"
                      className="border-2 placeholder-gray-400 focus:outline-none
                            focus:border-white  pt-4 pb-4 mt-2 ml-2 pl-2 text-base block bg-or w-48
                            border-gray-300 rounded-md shadow-xl placeholder:italic placeholder:text-slate-400 "
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <input
                      placeholder="Email"
                      type="email"
                      className="border-2 placeholder-gray-400 focus:outline-none
                                focus:border-white  pt-4 pb-4 mt-2 pl-2 text-base block bg-or
                                border-gray-300 rounded-md shadow-xl w-96 placeholder:italic placeholder:text-slate-400 "
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <input
                      placeholder="Street Address"
                      type="text"
                      className="border-2 placeholder-gray-400 focus:outline-none
                                focus:border-white  pt-4 pb-4 mt-2  pl-2 text-base block bg-or
                                border-gray-300 rounded-md shadow-xl w-96 placeholder:italic placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <input
                      placeholder="Pin  Code"
                      type="text"
                      className="border-2 placeholder-gray-400 focus:outline-none
                            focus:border-white  pt-4 pb-4 mt-2 mb-4  pl-2 pr-2 text-base block bg-or
                            border-gray-300 rounded-md shadow-xl w-32 placeholder:italic placeholder:text-slate-400"
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="City"
                      className="border-2 placeholder-gray-400 focus:outline-none
                                    focus:border-white  pt-4 pb-4 mt-2 mb-4 ml-4 pl-2 pr-2 text-base block bg-or
                                    border-gray-300 rounded-md shadow-xl w-28 placeholder:italic placeholder:text-slate-400"
                    />
                  </div>
                  <div className="">
                    <input
                      placeholder="State"
                      type="text"
                      className="border-2 placeholder-gray-400 focus:outline-none
                                    focus:border-white  pt-4 pb-4 mt-2 mb-4 ml-4  pl-2 pr-2 text-base block bg-or
                                    border-gray-300 rounded-md shadow-xl w-28 placeholder:italic placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="bg-pe lg:mx-4 md:mx-2 mt-4 mb-10 ">
                  <button
                    id="book"
                    className=" lg:py-2 md:py-2 py-4 flex items-center mx-auto text-white rounded font-light"
                  >
                    Book Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

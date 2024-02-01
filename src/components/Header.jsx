"use client";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [selectedLink, setSelectedLink] = useState("Home");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(true);
      }
    };

    document.addEventListener("keydown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="bg-black w-full text-white pl-20">
      <div className="lg:flex md:flex flex py-3 lg:py-5 items-center ">
        <div className="font-serif font-light italic lg:mr-20 text-lg">
          ticketBook
        </div>
        <div className="hidden lg:block mt-1 ml-40 ">
          <ul className="lg:flex flex text-lg font-normal lg:gap-10 gap-2">
            <Link href="/">
              <li
                onClick={() => handleLinkClick("Home")}
                className={`cursor-pointer ${
                  selectedLink === "Home" ? "text-pe" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => handleLinkClick("FAQ")}
                className={`cursor-pointer ${
                  selectedLink === "FAQ" ? "text-pe" : ""
                }`}
              >
                FAQ
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => handleLinkClick("About Us")}
                className={`cursor-pointer ${
                  selectedLink === "About Us" ? "text-pe" : ""
                }`}
              >
                About Us
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => handleLinkClick("Contact Us")}
                className={`cursor-pointer ${
                  selectedLink === "Contact Us" ? "text-pe" : ""
                }`}
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex border-2 rounded-xl lg:ml-10  ml-24 w-60 shadow-xl h-8">
          <CiSearch className="ml-2 my-auto cursor-pointer" />
          <input
            type="text"
            className="focus:outline-none w-60 pl-2 bg-black text-white rounded-2xl "
            placeholder="Search Movies Here"
          />
        </div>

        <div className="flex gap-10 ml-2">
          <CiBellOn className="ml-5 text-2xl cursor-pointer text-white" />
        </div>
        <div className="lg:hidden ml-20">
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className="absolute bg-black top-12 right-0 z-20 shadow-md rounded-md text-white"
              ref={menuRef}
            >
              <ul className="flex flex-col items-start text-lg font-semibold gap-1 pb-4 pr-3 p-3 mx-1">
                <Link href="/">
                  <li className="p-2" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="p-2" onClick={() => setIsMenuOpen(false)}>
                    Result
                  </li>
                </Link>
                <Link href="/">
                  <li className="p-2" onClick={() => setIsMenuOpen(false)}>
                    FAQ
                  </li>
                </Link>
                <Link href="/">
                  <li className="p-2" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </li>
                </Link>
                <Link href="/">
                  <li className="p-2" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

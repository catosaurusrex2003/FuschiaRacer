"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// import keyboardBlack from "../components/keyboard-black.svg";

function Navbar() {
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="flex justify-center">
      <div className="flex flex-row items-center justify-between w-full lg:w-4/5">
        {/* left side */}
        <div className="flex items-center sm:ms-8">
          <Link href="/">
            <div className="flex items-center ">
              <Image
                className="h-14 md:h-20 hidden sm:block"
                src="/keyboard-2.svg"
                height={100}
                width={100}
                alt="start typing"
              />
              <h1 className="text-lg text-donkey-magenta md:text-3xl p-4 sm:p-0 font-semibold">
                FuschiaRacer
              </h1>
            </div>
          </Link>
          <Link href="/">
            <img
              className={`mx-2  hover:opacity-60 h-5 md:h-14 ${
                pathname == "/" ? "opacity-100" : "opacity-40"
              } `}
              src="/keyboard-cyan.svg"
              height={36}
              width={36}
              alt="start typing"
            />
          </Link>
          <Link href="/leaderboard">
            <img
              className={`mx-2  hover:opacity-60 h-5 md:h-14 ${
                pathname == "/leaderboard" ? "opacity-100" : "opacity-40"
              }`}
              src="/crown-cyan.svg"
              height={28}
              width={28}
              alt="leaderboard"
            />
          </Link>
          <Link href="/compete">
            <img
              className={`mx-2  hover:opacity-60 h-5 md:h-14 ${
                pathname == "/compete" ? "opacity-100" : "opacity-40"
              }`}
              src="/globe.svg"
              height={25}
              width={25}
              alt="leaderboard"
            />
          </Link>
          <Link href="/settings">
            <img
              className={`mx-2  hover:opacity-60 h-5 md:h-14 ${
                pathname == "/settings" ? "opacity-100" : "opacity-40"
              }`}
              src="/setting-cyan.svg"
              height={30}
              width={30}
              alt="setting"
            />
          </Link>
        </div>

        {/* right side */}
        <div className="flex sm:me-8 items-center">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="flex items-center opacity-60 hover:opacity-100"
            >
              <Image
                className="mx-2  h-5 md:h-6"
                src="/profile.svg"
                height={30}
                width={30}
                alt="profile"
              />
              <span className="text-donkey-magenta text-xs hidden sm:block font-semibold ">
                catousaurusrex
              </span>
            </Link>
          ) : (
            <Image
              className="mx-2  h-5 md:h-6 opacity-60 hover:opacity-100"
              src="/profile.svg"
              height={30}
              width={30}
              alt="profile"
              onClick={()=>setIsLoggedIn(true)}
            />
          )}
          <Image
            className="mx-2 opacity-60 hover:opacity-100  cursor-pointer h-5 md:h-7"
            src="/logout.svg"
            height={30}
            width={30}
            alt="logout"
            onClick={() => setIsLoggedIn(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

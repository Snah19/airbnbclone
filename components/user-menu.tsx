"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "@/components/avatar";
import { useCallback, useState } from "react";
import { MenuItem } from "@/components/menu-item";


export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(curr => !curr);
  }, []);

  const onClick = () => {
    console.log("Not implemented");
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block py-3 px-4 text-sm font-semibold rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div className="flex items-center gap-3 rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 cursor-pointer hover:shadow-md transition" onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0 w-[40vw] md:w-3/4 text-sm rounded-xl shadow-md overflow-hidden bg-white">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Signup" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
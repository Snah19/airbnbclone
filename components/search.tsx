"use client";

import { BiSearch } from "react-icons/bi";

export const Search = () => {
  return (
    <div className="w-full md:w-auto py-2 rounded-full border-[1px] shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold px-6">
          Anywhere
        </div>
        <div className="hidden sm:block flex-1 px-6 text-sm font-semibold text-center border-x-[1px]">
          Any week
        </div>
        <div className="flex items-center gap-3 text-sm pl-6 pr-2 text-gray-600">
          <div className="hidden sm:block">
            Add Guests
          </div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
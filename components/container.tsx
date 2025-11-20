"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  );
};
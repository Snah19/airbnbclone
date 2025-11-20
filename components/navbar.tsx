"use client";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Search } from "@/components/search";
import { UserMenu } from "@/components/user-menu";

export const Navbar = () => {
  return (
    <div className="z-10 fixed w-full shadow-sm bg-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <a href="/">
              <Logo />
            </a>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
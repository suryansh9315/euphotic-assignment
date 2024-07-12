import React from "react";
import { useTheme } from "../ThemeProvider";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className={`py-5 px-10 ${theme === "dark" ? "bg-black/40" : "bg-gray-100"} z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between`}>
      <aside className="">
        <p className="text-3xl font-bold">Euphotic</p>
      </aside>
      <aside className="">
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Navbar;

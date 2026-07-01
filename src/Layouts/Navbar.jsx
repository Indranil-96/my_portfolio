import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-4 left-4 sm:top-10 sm:left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[999] flex items-center justify-center gap-2 sm:gap-5 bg-slate-200/80 px-3 sm:px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-4 sm:bottom-10" : "bottom-[-120%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

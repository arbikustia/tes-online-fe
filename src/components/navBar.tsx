import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";


const navBar = () => {
  return (
    <div className="absolute ml-20 z-2 w-[93.5vw] bg-[#151618] text-white h-12 flex flex-row px-4 justify-between">
      <div className="flex flex-row items-center gap-10">
        <button>
          <GiHamburgerMenu />
        </button>
        <p className="font-bold">DIGITALIZATION LINE PRODUCTION</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <p>FRIDAY, 23 DECEMBER 2022 | 11:21:01</p>
        <span><BsFillBellFill/></span>
      </div>
    </div>
  );
};

export default navBar;

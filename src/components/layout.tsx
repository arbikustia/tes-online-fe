import React, { ReactNode, FC } from "react";
import NavBar from "./navBar";
import SideBar from "./sideBar";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="bg-black w-screen pt-12 pl-20 h-screen">{children}</div>
    </div>
  );
};

export default layout;

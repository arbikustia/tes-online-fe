
import logo from "../assets/logo.png";
import DashboardIcon from "../assets/Dashboard-icon.png";
import DetailIcon from "../assets/detail-icon.png";
import MaintenanceIcon from "../assets/tools-icon.png";
import MasterDataIcon from "../assets/calendar-icon.png";
import ActivityIcon from "../assets/activity-icon.png";
import ManagementUserIcon from "../assets/group-icon.png";
import AccountIcon from "../assets/user-icon.png";
import SettingIcon from "../assets/settings-icon.png";


import { TbLogout2 } from "react-icons/tb";

const sideBar = () => {
  return (
    <div className="absolute w-20 z-2 h-full py-5 bg-[#151618] flex flex-col justify-between items-center">
      <img src={logo} alt="logo" className="w-[70%]" />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white ">
          <img src={DashboardIcon} alt="" className="w-[30%]" />
          <label className="text-[10px] text-white">Dashboard</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={DetailIcon} alt="" className="w-[30%]" />
          <label className="text-[10px]">Detail</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={MaintenanceIcon} alt="" className="w-[30%]" />
          <label className="text-[10px]">Maintenance</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={MasterDataIcon} alt="" className="w-[20%]" />
          <label className="text-[10px]">Master Data</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={ActivityIcon} alt="" className="w-[30%]" />
          <label className="text-[10px]">Activity User</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={ManagementUserIcon} alt="" className="w-[24%]" />
          <label className="text-[10px] text-center">Management User</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={AccountIcon} alt="" className="w-[30%]" />
          <label className="text-[10px]">Account</label>
        </div>
        <div className="flex flex-col items-center hover:bg-[#334851] py-1 text-white">
          <img src={SettingIcon} alt="" className="w-[30%]" />
          <label className="text-[10px]">Setting</label>
        </div>
      </div>
      <div className="flex flex-col items-center hover:bg-[#334851]  py-1 text-white">
        <div className="w-[30]">
            <TbLogout2/>
        </div>
        <label className="text-[10px]">Log out</label>
      </div>
    </div>
  );
};

export default sideBar;

"use client";
import { GoHome } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";

const MainNavigation = () => {
  return (
    <div className="flex gap-8 fixed">
      <GoHome size={24} />
      <GoStar size={24} />
      <HiChatBubbleOvalLeft size={24} />
      <LuUser size={24} />
    </div>
  );
};

export default MainNavigation;

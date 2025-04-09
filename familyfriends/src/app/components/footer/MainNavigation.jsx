"use client";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";

const MainNavigation = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { id: "home", icon: <GoHome size={24} /> },
    { id: "favorite", icon: <GoStar size={24} /> },
    { id: "message", icon: <HiChatBubbleOvalLeft size={24} /> },
    { id: "profile", icon: <LuUser size={24} /> },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };
  return (
    <nav>
      <ul className="list-none p-0 m-0 flex gap-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`cursor-pointer p-2 rounded ${
              activeItem === item.id ? "text-red-300" : ""
            }`}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

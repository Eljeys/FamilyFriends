"use client";
import { GoBell } from "react-icons/go";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-2xl">FamilyFriends</h1>
      <div>
        <GoBell size={24} />
      </div>
    </div>
  );
};

export default Header;

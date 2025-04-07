"use client";
import Link from "next/link";
const SelectAnimalTypeBtn = (props) => {
  return (
    <div className="bg-red-300 rounded-large text-white w-fit flex flex-row-reverse items-center justify-baseline pl-2.5 pr-6 py-2.5 gap-2">
      <Link href="#">{props.buttonText}</Link>
      <div className="rounded-full w-[20px] h-[20px] bg-gray-400 "></div>
    </div>
  );
};

export default SelectAnimalTypeBtn;

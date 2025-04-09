"use client";
import { Children, useState } from "react";

const DescriptiveLabels = ({ labelText, color, textColor }) => {
  const colors = {
    yellow: "bg-yellow-200",
    green: "bg-lime-200",
    red: "bg-rose-300",
    blue: "bg-blue-200",
  };
  const colorTexts = {
    yellow: "text-yellow-600",
    green: "text-lime-700",
    red: "text-lime-700",
    blue: "text-lime-700",
  };
  const backgroundColors = colors[color] || "bg-gray-500";
  const textclr = colorTexts[textColor] || "text-gray-700";
  return (
    <div className={`w-fit px-3.5 rounded-small ${backgroundColors}`}>
      <span className={`${textclr}`}>{labelText}</span>
    </div>
  );
};

export default DescriptiveLabels;

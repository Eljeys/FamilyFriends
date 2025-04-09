"use client";
import { Children, useState } from "react";

const DescriptiveLabels = (props) => {
  return (
    <div className={`w-fit border-2 px-3.5 rounded-small`}>
      <span>{props.labelText}</span>
    </div>
  );
};

export default DescriptiveLabels;

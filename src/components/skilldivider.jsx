import React from "react";
export function Skilldivider(props) {
  const {title} = props
  return (
    <div className=" font-medium bg-yellow-200 opacity-85 p-4 shadow-xl rounded-xl col-span-full text-gray-800">
      {title}
    </div>
  );
}

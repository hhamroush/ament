import React from "react";

export default function Card({ img, title, text }) {
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        {/* black gradient background */}
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0.5}}>
        </div>
        {/* image */}
        <img className="relative w-40" src={img} alt="" />

      </div>
      <div className="relative text-black px-6 pb-6 mt-6">
        {/* title */}
        <span className="block opacity-75 -mb-1">
            {title}
        </span>
        <div className="flex justify-between items-center">
        {/* inner text */}
          <span className="block font-semibold text-xl">
            {text}
        </span>
        </div>
      </div>
    </div>
  );
}


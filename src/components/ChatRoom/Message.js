import React from "react";

export default function Message() {
  return (
    <div className=" mb-[10px]">
      <div className="flex items-center">
        <span>
          <img
            className="w-[24px] h-[24px] rounded-[50%] object-cover"
            src="https://lh3.googleusercontent.com/a-/AOh14GjZcyQJjT-MIYc-j5z3Q5WU3xRaW43yiQ3aN-Y5=s96-c"
            alt="avatar"
          />
        </span>
        <p className="text-[14px] font-bold ml-[4px]">Nguyễn Mạnh Dũng</p>
        <p className="text-[11px] text-[#A7A7A7] ml-[10px]">
          Yesterday at 10:53 AM
        </p>
      </div>
      <p className="text-[14px] ml-[28px]">Message chat</p>
    </div>
  );
}

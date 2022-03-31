import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";
export default function RoomList() {
  const { rooms } = React.useContext(AppContext);
  return (
    <div className="text-[14px]">
      <div className="px-[16px] py-[12px] flex items-center">
        <span>
          <svg
            className="w-[12px] h-[12px] mr-[12px]"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="right"
            fill="currentColor"
            aria-hidden="true"
            style={{ transform: "rotate(90deg)" }}
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
        <p className="">Danh sách các phòng</p>
      </div>
      <div className="px-[40px]">
        <ul>
          {rooms.map((room) => (
            <li key={room.id} className="mb-[5px] text-[#1890ff]">
              <Link to="/">{room.name}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center group cursor-pointer py-[5px]">
          <svg
            className="w-[14px] h-[14px]"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="plus-square"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              className="group-hover:fill-[#cecece] transition duration-300"
              d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
            ></path>
            <path
              className="group-hover:fill-[#cecece] transition duration-300"
              d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
            ></path>
          </svg>
          <p className="ml-[8px] group-hover:text-[#cecece] transition duration-300 ">
            Thêm phòng
          </p>
        </button>
      </div>
    </div>
  );
}

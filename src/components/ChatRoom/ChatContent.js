import React from "react";
import Message from "./Message";
export default function ChatContent() {
  return (
    <div className="p-[12px] h-[calc(100vh-57px)] flex flex-col justify-end ">
      <div className="">
        <ul>
          <Message />
          <Message />
          <Message />
          <Message />
        </ul>
        <div className="w-full relative">
          <input
            placeholder="Nhập tin nhắn..."
            autoComplete="off"
            className="w-full border-[1px] border-[#ccc] outline-0 rounded-[2px] pl-4 py-[8px] text-[12px]"
          />
          <button className="bg-[#1890ff] absolute px-4 py-1 right-[2px] top-[2px] rounded-[2px]">
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}

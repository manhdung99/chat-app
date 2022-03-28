import React from "react";
import SideBar from "./SideBar";
import WindowChat from "./WindowChat";
export default function ChatRoom() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[25%]">
        <SideBar />
      </div>
      <div className="w-[75%]">
        <WindowChat />
      </div>
    </div>
  );
}

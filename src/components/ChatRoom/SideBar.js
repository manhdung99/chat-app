import React from "react";
import RoomList from "./RoomList";
import { auth } from "../../firebase/config";
// import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
export default function SideBar() {
  // useEffect(() => {
  //   db.collection("users").onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // });

  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);

  return (
    <div className="bg-[#3f0e40] h-full text-white">
      <div className="flex items-center py-[12px] px-[16px] justify-between border-b-[1px] border-[#522653]">
        <div className="flex items-center gap-[4px] ">
          <img
            className="w-[32px] h-[32px] rounded-[50%]"
            src={photoURL}
            alt="avatar"
          />
          <p className="text-[14px]">{displayName}</p>
        </div>
        <span
          onClick={() => auth.signOut()}
          className="flex items-center gap-[8px] border-[1px] border-white px-3 rounded-[2px]  py-1 cursor-pointer hover:border-[#40a9ff] group"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 12L7 16V13H16V11H7V8L2 12Z"
              fill="white"
              className="group-hover:fill-[#40a9ff]"
            />
            <path
              className="group-hover:fill-[#40a9ff]"
              d="M13.0007 2.99906C11.8182 2.99578 10.6469 3.22717 9.55447 3.67982C8.46206 4.13247 7.47032 4.79739 6.63672 5.63606L8.05072 7.05006C9.37272 5.72806 11.1307 4.99906 13.0007 4.99906C14.8707 4.99906 16.6287 5.72806 17.9507 7.05006C19.2727 8.37206 20.0017 10.1301 20.0017 12.0001C20.0017 13.8701 19.2727 15.6281 17.9507 16.9501C16.6287 18.2721 14.8707 19.0011 13.0007 19.0011C11.1307 19.0011 9.37272 18.2721 8.05072 16.9501L6.63672 18.3641C8.33572 20.0641 10.5957 21.0011 13.0007 21.0011C15.4057 21.0011 17.6657 20.0641 19.3647 18.3641C21.0647 16.6651 22.0017 14.4051 22.0017 12.0001C22.0017 9.59506 21.0647 7.33506 19.3647 5.63606C18.5311 4.79739 17.5394 4.13247 16.447 3.67982C15.3546 3.22717 14.1832 2.99578 13.0007 2.99906V2.99906Z"
              fill="white"
            />
          </svg>

          <p className="text-[14px] group-hover:text-[#40a9ff]">????ng xu???t</p>
        </span>
      </div>
      <div>
        <RoomList />
      </div>
    </div>
  );
}

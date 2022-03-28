import React from "react";
import firebase, { auth } from "../../firebase/config";
import { addDocument } from "../ChatRoom/service";

export default function Login() {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <div className=" justify-center mt-20 max-w-[500px] ml-[50%] translate-x-[-50%]">
      <p className=" text-center font-bold text-[28px] my-[12px]">Login</p>
      <div className="flex flex-col gap-y-[8px]">
        <button
          onClick={handleFbLogin}
          className="py-1 px-4 border-[1px] border-[#ccc] hover:border-[#40a9ff] hover:text-[#40a9ff]"
        >
          Login with Facebook
        </button>
        <button className="py-1 px-4 border-[1px] border-[#ccc] hover:border-[#40a9ff] hover:text-[#40a9ff]">
          Login with Google
        </button>
      </div>
    </div>
  );
}

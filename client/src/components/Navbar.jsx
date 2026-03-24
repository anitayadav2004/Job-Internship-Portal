import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="sticky top-0 z-50 shadow py-3 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-bold text-blue-600">
            Intern<span className="text-orange-500">Joby</span>
          </span>
        </div>

        {/* CENTER */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
          <li className="hover:text-blue-600 cursor-pointer">Internships</li>
          <li className="hover:text-blue-600 cursor-pointer">Companies</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        </ul>

        {/* RIGHT */}
        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <Link to="/applications">Applied Jobs</Link>
            <Link to="/Internship">Applied Internship</Link>
            <p>{user?.fullName}</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="border border-green-600 text-blue-600 px-5 py-1.5 rounded-full"
            >
              For recruiter
            </button>

            <button
              onClick={() => openSignIn()}
              className="border border-blue-600 text-blue-600 px-5 py-1.5 rounded-full"
            >
              Login
            </button>

            <button className="bg-green-500 text-white px-5 py-1.5 rounded-full">
              For Employee
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {

  const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext);

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  // If popup is false, don't show anything
  if (!showRecruiterLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      
      <div className="bg-white p-6 rounded-lg w-96 relative">

        {/* Close Button */}
        <button
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-2 right-3 text-gray-600 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Recruiter {state}
        </h2>

        {/* Name field only in Register */}
        {state === "Register" && (
          <input
            type="text"
            placeholder="Company Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-2 mb-3 rounded"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />

        <button className="bg-green-500 text-white w-full py-2 rounded mt-2">
          {state}
        </button>

        {/* Switch Login/Register */}
        <p className="text-sm text-center mt-4">
          {state === "Login" ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setState(state === "Login" ? "Register" : "Login")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            {state === "Login" ? "Register" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default RecruiterLogin;
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";

import RecruiterRegister from "./pages/recruiter/RecruiterRegister";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import PostJob from "./pages/recruiter/PostJob";

import RecruiterLogin from "./components/RecruiterLogin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { AppContext } from "./context/AppContext";

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      <div className="flex-grow">

        {/* Recruiter Login Modal */}
        {showRecruiterLogin && <RecruiterLogin />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJob />} />
          <Route path="/applications" element={<Applications />} />

          {/* Recruiter Routes */}
          <Route path="/recruiter/register" element={<RecruiterRegister />} />
          <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
          <Route path="/recruiter/post-job" element={<PostJob />} />
        </Routes>

      </div>

      <Footer />
    </div>
  );
};

export default App;
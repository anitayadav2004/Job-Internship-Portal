import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const [type, setType] = useState("job");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const slides = [
    assets.job_banner_1,
    assets.job_banner_2,
    assets.internship_banner_1,
  ];

  // Load saved search data
  useEffect(() => {
    const saved = localStorage.getItem("searchData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTitle(parsed.title || "");
      setLocation(parsed.location || "");
    }
  }, []);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const onSearch = () => {
    if (!title.trim() && !location.trim()) return;

    setSearchFilter({ title, location });
    setIsSearched(true);

    localStorage.setItem(
      "searchData",
      JSON.stringify({ title, location })
    );
  };

  const companies = [
    { logo: assets.microsoft_logo, link: "https://www.microsoft.com" },
    { logo: assets.walmart_logo, link: "https://www.walmart.com" },
    { logo: assets.accenture_logo, link: "https://www.accenture.com" },
    { logo: assets.samsung_logo, link: "https://www.samsung.com" },
    { logo: assets.amazon_logo, link: "https://www.amazon.com" },
    { logo: assets.adobe_logo, link: "https://www.adobe.com" },
  ];

  return (
    <div className="w-full">

      {/* ================= SLIDING BANNER ================= */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-white py-24 text-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={slides[currentSlide]}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-10 lg:px-20">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4">
            Your Trusted Platform for 1000+ Jobs and Internships
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-sm md:text-lg font-light">
            Begin Your Career Journey Here — Explore Quality Job and Internship Opportunities
          </p>

          {/* ================= SEARCH BAR ================= */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg text-gray-600 max-w-5xl mx-auto px-3 py-3 gap-3 shadow-lg">

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 outline-none text-sm border rounded"
            >
              <option value="job">Job</option>
              <option value="internship">Internship</option>
            </select>

            {/* Title Input */}
            <div className="flex items-center flex-1 px-3 bg-gray-100 rounded">
              <img src={assets.search_icon} alt="" className="w-4 h-4" />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`Search ${type}s`}
                list={type}
                className="p-2 outline-none w-full bg-transparent text-sm"
              />

              {type === "job" && (
                <datalist id="job">
                  <option value="Work from home" />
                  <option value="Fresher job" />
                  <option value="Part time job" />
                  <option value="Accountant job" />
                  <option value="Teacher job" />
                  <option value="Data Analyst job" />
                </datalist>
              )}

              {type === "internship" && (
                <datalist id="internship">
                  <option value="Software Engineering Internship" />
                  <option value="Web Development Internship" />
                  <option value="Data Analyst Internship" />
                  <option value="Marketing Internship" />
                  <option value="HR Internship" />
                </datalist>
              )}
            </div>

            {/* Location Input */}
            <div className="flex items-center px-3 bg-gray-100 rounded">
              <img src={assets.location_icon} alt="" className="w-4 h-4" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                list="locations"
                className="p-2 outline-none bg-transparent text-sm"
              />
              <datalist id="locations">
                <option value="Delhi" />
                <option value="Noida" />
                <option value="Gurugram" />
                <option value="Ghaziabad" />
                <option value="Remote" />
              </datalist>
            </div>

            <button
              onClick={onSearch}
              className="bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-700 transition text-sm"
            >
              Search
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= TRUSTED BY ================= */}
      <div className="flex justify-center items-center h-32 w-full">
        <p className="font-bold text-3xl md:text-4xl text-gray-800 text-center">
          Trusted by
        </p>
      </div>

      {/* ================= SLIDING COMPANY LOGOS ================= */}
      <div className="w-full border border-gray-300 shadow-md mt-5 p-8 overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={company.logo}
                alt="company"
                className="h-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
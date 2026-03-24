import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  // 🔍 Search filter
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: ""
  });

  const [isSearched, setIsSearched] = useState(false);

  // 💼 Jobs state
  const [jobs, setJobs] = useState([]);

  // 👤 Recruiter Login Modal
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  // 📥 Fetch jobs (mock/local data for now)
  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobsData: jobs,   // 👈 keeping same as your code (no change)
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
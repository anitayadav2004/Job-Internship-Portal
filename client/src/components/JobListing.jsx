import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../context/AppContext";
import JobCards from "./JobCards";

const JobListing = () => {
  const { isSearched, searchFilter, jobsData } = useContext(AppContext);
  const [showFilter,setShowFilter]=useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  // ✅ Reference for scrolling
  const jobsSectionRef = useRef(null);

  // 🔍 Filter jobs
  const filteredJobs = jobsData.filter((job) => {
    const matchTitle = searchFilter.title
      ? job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
      : true;

    const matchLocation = searchFilter.location
      ? job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
      : true;

    return matchTitle && matchLocation;
  });

  // 🧮 Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // ✅ Scroll to jobs section
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    jobsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container mx-auto my-6 flex gap-6">

      {/* Sidebar */}
      <aside className="w-full lg:w-1/4">
        {isSearched &&
          (searchFilter.title || searchFilter.location) && (
            <>
              <h2 className="font-semibold text-lg mb-3">
                Current Search
              </h2>

              <div className="flex flex-wrap gap-2">
                {searchFilter.title && (
                  <span className="px-3 py-1 bg-gray-200 rounded text-sm">
                    {searchFilter.title}
                  </span>
                )}

                {searchFilter.location && (
                  <span className="px-3 py-1 bg-gray-200 rounded text-sm">
                    {searchFilter.location}
                  </span>
                )}
              </div>
            </>
          )}
      </aside>

      {/* Job Listings */}
      <section ref={jobsSectionRef} className="w-full lg:w-3/4">
        <h1 className="font-semibold text-2xl mb-2">
          Latest Jobs
        </h1>

        <p className="text-gray-500 mb-6">
          Get your desired job and internship from top companies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentJobs.length > 0 ? (
            currentJobs.map((job, index) => (
              <JobCards key={index} job={job} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No jobs found
            </p>
          )}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 9 && (
          <div className="flex justify-center mt-10 gap-3">

            {/* Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-orange-300 rounded-md disabled:opacity-50"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-orange-300 rounded-md disabled:opacity-50"
            >
              Next
            </button>

          </div>
        )}

      </section>
    </div>
  );
};

export default JobListing;
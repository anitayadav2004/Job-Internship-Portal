import React from "react";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">

      {/* Job Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        {job.title}
      </h2>

      {/* Location + Level */}
      <div className="flex gap-2 mt-2">
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-md">
          {job.location}
        </span>
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-md">
          {job.level}
        </span>
      </div>

      {/* Description */}
      <div
        className="text-gray-600 text-sm mt-4 line-clamp-6"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
        >
          Apply now
        </button>

        <button
          onClick={() => {
            navigate(`/job-details/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Learn more
        </button>
      </div>

    </div>
  );
};

export default JobCards;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <footer className="bg-[#536895] text-white pt-12 pb-6 px-6 lg:px-20 rounded-t-2xl">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Jobs Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Jobs</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/internships" className="hover:text-white">Internship Jobs</Link></li>
              <li><Link to="/remote-jobs" className="hover:text-white">Remote Jobs</Link></li>
              <li><Link to="/government-jobs" className="hover:text-white">Government Jobs</Link></li>
              <li><Link to="/fresher-jobs" className="hover:text-white">Fresher Jobs</Link></li>
              <li><Link to="/part-time-jobs" className="hover:text-white">Part-time Jobs</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/employers" className="hover:text-white">Employers</Link></li>
              <li><Link to="/post-job" className="hover:text-white">Post a Job</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/contact" className="hover:text-white">Home</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Social + Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

            <div className="flex gap-3 mt-2 text-lg">
              <a href="#" className="bg-green-500 p-2 rounded hover:scale-110 transition"><FaWhatsapp /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded hover:scale-110 transition"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-2 rounded hover:scale-110 transition"><FaInstagram /></a>
              <a href="#" className="bg-blue-600 p-2 rounded hover:scale-110 transition"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded hover:scale-110 transition"><FaLinkedinIn /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded hover:scale-110 transition"><FaTwitter /></a>
            </div>

            {/* Clickable Phone (Opens Dialog) */}
            <p
              onClick={() => setShowDialog(true)}
              className="mt-4 text-gray-300 flex items-center gap-2 cursor-pointer hover:text-white"
            >
              <FaPhoneAlt />
              +91 7905028724
            </p>

            {/* Clickable Email */}
            <p className="text-gray-300 flex items-center gap-2 hover:text-white">
              <FaEnvelope />
              <a href="mailto:support@jobportal.com">
                support@jobportal.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-orange-400">IJ</span>
            <div>
              <h2 className="text-2xl font-semibold">
                Intern<span className="text-orange-500">Joby</span>
              </h2>
              <p className="text-gray-400 text-sm">Find Your Dream Career</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-4 md:mt-0">
            © 2026 InternJoby. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-blue-600 p-3 rounded-xl mt-4 md:mt-0 hover:bg-blue-700 transition"
          >
            <IoIosArrowUp />
          </button>

        </div>
      </footer>

      {/* Custom Call / Message Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 w-80 text-center shadow-lg">

            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Choose an Option
            </h2>

            <div className="flex flex-col gap-3">

              <a
                href="tel:+917905028724"
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                📞 Call
              </a>

              <a
                href="sms:+917905028724"
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                💬 Send Message
              </a>

              <button
                onClick={() => setShowDialog(false)}
                className="bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
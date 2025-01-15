import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="bg-[#FFF1F1] border-b border-[#FE2323]">
        <div className="container h-[76px] mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="college_logo.jpg" // Replace with the actual logo path
              alt="Trinity Logo"
              className="h-[45px] w-10"
            />
            <span className="text-lg font-bold text-yellow-600">Trinity</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-20 h-5">
            <a href="#" className="text-black hover:text-blue-600">
              Admission
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Facilities
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Gallery
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Training & Placement
            </a>
            <a href="#" className="text-black hover:text-blue-600">
              Contact Us
            </a>
          </nav>

          {/* Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="text-black flex items-center space-x-1 md:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-yellow-600 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="p-4">
          {/* Close Button */}
          <button onClick={toggleSidebar} className="text-black flex items-center justify-end absolute top-4 right-4 pr-3 pt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h2 className="text-lg font-bold text-black mb-4"></h2>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Home</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">TCOER</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Approval</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Committees</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Academics</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Admission</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Best Practices</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Training & Placement</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Alumni</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Faculty Corner</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Student Corner</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Gallery</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Careers</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Anty Ragging Cell</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Girevance & Redressal</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Facilities & Collaboration</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">NIRF</a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-blue-200">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

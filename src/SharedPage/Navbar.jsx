import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to track the visibility of the mobile menu
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  const option = (
    <>
      <li><Link to="/" className="text-base font-semibold">Home</Link> </li>
      <li><Link to="/" className="text-base font-semibold">All Jewelry</Link></li>
      <li><Link to="/" className="text-base font-semibold">My Jewelry</Link></li>
      <li><Link to="/" className="text-base font-semibold">My Jewelry</Link></li>
      <li><Link to="/" className="text-base font-semibold">User Profile Picture</Link></li>
      <li><Link to="/login" className="text-base font-semibold text-white bg-black">Login</Link></li>
    </>
  );

  return (
    <div className="navbar py-6 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn btn-ghost lg:hidden ${
              isMobileMenuVisible ? "active" : ""
            }`}
            onClick={toggleMobileMenu} // Toggle the mobile menu when clicked
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              isMobileMenuVisible ? "block" : "hidden"
            }`}
          >
            {option}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl md:text-4xl font-extrabold"><span className="text-orange-500">CHAYA</span> JEWELRY</a> 
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{option}</ul>
      </div>
    </div>
  );
};

export default Navbar;

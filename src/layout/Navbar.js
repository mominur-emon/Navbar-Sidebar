import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log("Initial Menupen state:", menuOpen);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("Initial sidebarOpen state:", sidebarOpen);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Define a function to determine if a link should be active
  const isActive = (path) => {
    return location.pathname === path ? "text-blue-500" : "md:text-white";
  };

  return (
    <>
      <nav className="bg-black p-4 ">
        <div className="navbar-ui">
          <ul
            className={`flex justify-center space-x-4 ${
              menuOpen ? "open" : ""
            }`}
          >
            <li>
              <Link to="/" className={`p-3 pl-7 ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`p-3 ${isActive("/about")}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`p-3 ${isActive("/blog")}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`p-3 ${isActive("/contact")}`}>
                Contact
              </Link>
            </li>
            <li
              className={`close-btn text-white `}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {menuOpen && <AiOutlineClose />}
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <div className="menu-btn hidden ">
            <div>
              <h1 className="mr-2">Menu</h1>
            </div>
            <div
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <i>
                <AiOutlineMenu />
              </i>
            </div>
          </div>

          <div className="side-btn hidden">
            <div>
              <h1 className="mr-2">Sidebar</h1>
            </div>
            <div
              onClick={() => {
                setSidebarOpen(!sidebarOpen); // Toggle the sidebarOpen state
              }}
            >
              <i>
                <AiOutlineMenu />
              </i>
            </div>
          </div>
        </div>
      </nav>

      {/* ------- sidebar start --------------*/}
      <div className={`sidebar-ui fixed ${sidebarOpen ? "Open" : ""}`}>
        <aside className="bg-[#c7d2fe] w-64 h-screen px-2 py-4">
          <div className="md:hidden">
            <i
              className={`close-btn text-white `}
              onClick={() => {
                setSidebarOpen(false);
              }}
            >
              {sidebarOpen && <AiOutlineClose />}
            </i>
          </div>
          <div className="sidebar-main">
            <h1 className="p-4 font-bold">Sidebar</h1>
            <div className="p-4">
              <ul className="space-y-4">
                {/* Item 1 */}
                <li
                  className="bg-white pl-1 cursor-pointer flex items-center"
                  onClick={() => {
                    setIsOpen1(!isOpen1);
                  }}
                >
                  Item 1
                  <FiChevronDown
                    className={`ml-auto ${
                      isOpen1 ? "transform rotate-180" : ""
                    }`}
                  />
                </li>
                {isOpen1 && (
                  <div>
                    <ul className="space-y-2 pl-11">
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item A
                      </li>
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item B
                      </li>
                    </ul>
                  </div>
                )}

                {/* Item 2 */}
                <li
                  className="bg-white pl-1 cursor-pointer flex items-center"
                  onClick={() => {
                    setIsOpen2(!isOpen2);
                  }}
                >
                  Item 2
                  <FiChevronDown
                    className={`ml-auto ${
                      isOpen2 ? "transform rotate-180" : ""
                    }`}
                  />
                </li>
                {isOpen2 && (
                  <div>
                    <ul className="space-y-2 pl-11">
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item A
                      </li>
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item B
                      </li>
                    </ul>
                  </div>
                )}

                {/* Item 3 */}
                <li
                  className="bg-white pl-1 cursor-pointer flex items-center"
                  onClick={() => {
                    setIsOpen3(!isOpen3);
                  }}
                >
                  Item 3
                  <FiChevronDown
                    className={`ml-auto ${
                      isOpen3 ? "transform rotate-180" : ""
                    }`}
                  />
                </li>
                {isOpen3 && (
                  <div>
                    <ul className="space-y-2 pl-11">
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item A
                      </li>
                      <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
                        Item B
                      </li>
                    </ul>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;

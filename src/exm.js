// import React, { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";

// const Sidebar = () => {
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleDropdown1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const toggleDropdown2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   const toggleDropdown3 = () => {
//     setIsOpen3(!isOpen3);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <aside
//       className={`bg-[#c7d2fe] w-64 h-screen ${isSidebarOpen ? "" : "hidden"}`}
//     >
//       <h1 className="p-4 font-bold">Sidebar</h1>
//       <div className="p-4">
//         <ul className="space-y-4">
//           {/* Item 1 */}
//           <li
//             className="bg-white pl-1 cursor-pointer flex items-center"
//             onClick={toggleDropdown1}
//           >
//             Item 1
//             <FiChevronDown
//               className={`ml-auto ${isOpen1 ? "transform rotate-180" : ""}`}
//             />
//           </li>
//           {isOpen1 && (
//             <div>
//               <ul className="space-y-2 pl-11">
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item A
//                 </li>
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item B
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Item 2 */}
//           <li
//             className="bg-white pl-1 cursor-pointer flex items-center"
//             onClick={toggleDropdown2}
//           >
//             Item 2
//             <FiChevronDown
//               className={`ml-auto ${isOpen2 ? "transform rotate-180" : ""}`}
//             />
//           </li>
//           {isOpen2 && (
//             <div>
//               <ul className="space-y-2 pl-11">
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item A
//                 </li>
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item B
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Item 3 */}
//           <li
//             className="bg-white pl-1 cursor-pointer flex items-center"
//             onClick={toggleDropdown3}
//           >
//             Item 3
//             <FiChevronDown
//               className={`ml-auto ${isOpen3 ? "transform rotate-180" : ""}`}
//             />
//           </li>
//           {isOpen3 && (
//             <div>
//               <ul className="space-y-2 pl-11">
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item A
//                 </li>
//                 <li className="bg-[#a3a3a3] pl-1 cursor-pointer text-center">
//                   Item B
//                 </li>
//               </ul>
//             </div>
//           )}
//         </ul>
//       </div>
//       {/* Hamburger Menu Button */}
//       <button
//         className="absolute top-4 right-4 lg:hidden"
//         onClick={toggleSidebar}
//       >
//         ☰
//       </button>
//     </aside>
//   );
// };

// export default Sidebar;

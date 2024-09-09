// // eslint-disable-next-line no-unused-vars
// import React from "react";

// export const Navbar = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
//           <a className="navbar-brand page-scroll" href="#page-top">
//             React Landing Page
//           </a>{" "}
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#features" className="page-scroll">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#portfolio" className="page-scroll">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="#team" className="page-scroll">
//                 Team
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="page-scroll">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;



// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          ABC Automation
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


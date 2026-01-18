// import { useState } from "react";
// import { Link } from "react-router-dom"; // needed for React Router

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img
//             src="https://cdn.prod.website-files.com/687a11f54d44d667252235a0/687a17357c9f088507c5ea71_IZZI%20LOGO.svg"
//             alt="Logo"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium">
//             Home
//           </Link>
//           <Link to="/menu" className="text-gray-700 hover:text-teal-600 font-medium">
//             Menu
//           </Link>
//           <Link to="/about" className="text-gray-700 hover:text-teal-600 font-medium">
//             About
//           </Link>
//           <Link to="/gallery" className="text-gray-700 hover:text-teal-600 font-medium">
//             Gallery
//           </Link>
//           <Link to="/reserve" className="text-gray-700 hover:text-teal-600 font-medium">
//             Reserve
//           </Link>
//         </nav>

//         {/* Right-side Reserve Button */}
//         <div className="hidden md:flex">
//           <Link
//             to="/reserve"
//             className="ml-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
//           >
//             Reserve
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-700 hover:text-teal-600 focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
//           <Link to="/" className="block text-gray-700 hover:text-teal-600 font-medium">
//             Home
//           </Link>
//           <Link to="/menu" className="block text-gray-700 hover:text-teal-600 font-medium">
//             Menu
//           </Link>
//           <Link to="/about" className="block text-gray-700 hover:text-teal-600 font-medium">
//             About
//           </Link>
//           <Link to="/gallery" className="block text-gray-700 hover:text-teal-600 font-medium">
//             Gallery
//           </Link>
//           <Link
//             to="/reserve"
//             className="block text-white bg-teal-600 text-center rounded px-4 py-2 hover:bg-teal-700 font-medium"
//           >
//             Reserve
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom"; // React Router links
import bigFish from "../assets/big_fish.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[rgba(1,56,95,1)] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-28">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={bigFish}
            alt="Logo"
            className="h-40 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-[rgba(208,0,0,1)] font-medium">
            About
          </Link>
          <Link to="/gallery" className="text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Gallery
          </Link>
        </nav>

        {/* Right-side Reserve Button */}
        <div className="hidden md:flex">
          <Link
            to="/reserve"
            className="ml-4 px-4 py-2 bg-[rgba(208,0,0,1)] text-white rounded hover:bg-red-700"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[rgba(208,0,0,1)] focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(1,56,95,1)] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link to="/" className="block text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Home
          </Link>
          <Link to="/menu" className="block text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Menu
          </Link>
          <Link to="/about" className="block text-white hover:text-[rgba(208,0,0,1)] font-medium">
            About
          </Link>
          <Link to="/gallery" className="block text-white hover:text-[rgba(208,0,0,1)] font-medium">
            Gallery
          </Link>
          <Link
            to="/reserve"
            className="block text-white bg-[rgba(208,0,0,1)] text-center rounded px-4 py-2 hover:bg-red-700 font-medium"
          >
            Reserve
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

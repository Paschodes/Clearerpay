import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderProps } from "../interface";
import { RxDashboard } from "react-icons/rx";
import { TiUserOutline } from "react-icons/ti";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

const Header = ({ logo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-50 shadow-md border-b border-gray-200 w-full">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Clearerpay Logo" className="w-32" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-10 space-x-6">
          {[
            { to: "/", label: "Dashboard", icon: <RxDashboard /> },
            { to: "/wallet", label: "Wallet" },
            { to: "/merchants", label: "Merchants" },
            { to: "/transactions", label: "Transactions" },
            { to: "/beneficiaries", label: "Beneficiaries" },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `pb-2 flex gap-2 items-center ${
                  isActive
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
                }`
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-gray-900 ml-auto"
        >
          {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Right Section: Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="text-gray-300 hover:text-gray-900 bg-gray-800 rounded-full flex px-2 py-1 items-center gap-2">
          <TiUserOutline /> Personal Account <MdKeyboardArrowDown />
        </button>
        <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
          <RiSettings4Line /> Settings
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-50 shadow-md border-t border-gray-200 md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {[
              { to: "/", label: "Dashboard", icon: <RxDashboard /> },
              { to: "/wallet", label: "Wallet" },
              { to: "/merchants", label: "Merchants" },
              { to: "/transactions", label: "Transactions" },
              { to: "/beneficiaries", label: "Beneficiaries" },
            ].map(({ to, label, icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  className={({ isActive }) =>
                    `pb-2 flex gap-2 items-center ${
                      isActive
                        ? "text-black font-semibold border-b-2 border-black"
                        : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
                    }`
                  }
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

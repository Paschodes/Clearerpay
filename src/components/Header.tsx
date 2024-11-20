import { NavLink } from "react-router-dom";
import { HeaderProps } from "../interface";
import { RxDashboard } from "react-icons/rx";
import { TiUserOutline } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

const Header = ({ logo }: HeaderProps) => (
  <header className="flex items-center justify-between p-4 pb-0 bg-gray-50 shadow-md border-b border-gray-200 w-full flex-row">
    <div className="flex items-center">
      <img src={logo} alt="Clearerpay Logo" className="w-32" />
      <nav className="ml-10 space-x-6 flex">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `pb-2 flex gap-2 items-center ${
              isActive
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
            }`
          }
        >
          <RxDashboard />
          Dashboard
        </NavLink>
        <NavLink
          to="/wallet"
          className={({ isActive }) =>
            `pb-2 flex ${
              isActive
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
            }`
          }
        >
          Wallet
        </NavLink>
        <NavLink
          to="/merchants"
          className={({ isActive }) =>
            `pb-2 flex ${
              isActive
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
            }`
          }
        >
          Merchants
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `pb-2 flex ${
              isActive
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
            }`
          }
        >
          Transactions
        </NavLink>
        <NavLink
          to="/beneficiaries"
          className={({ isActive }) =>
            `pb-2  flex${
              isActive
                ? "text-black font-semibold border-b-2 border-black"
                : "text-gray-700 hover:text-gray-900 border-b-2 border-transparent"
            }`
          }
        >
          Beneficiaries
        </NavLink>
      </nav>
    </div>
    <div className="flex items-center space-x-6">
      <button className="text-gray-300 hover:text-gray-900 bg-gray-800 rounded-full flex px-2 py-1 items-center gap-2">
        <TiUserOutline /> Personal Account <MdKeyboardArrowDown />
      </button>
      <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
        {" "}
        <RiSettings4Line /> Settings
      </button>
    </div>
  </header>
);

export default Header;

import { PiHandWaving } from "react-icons/pi";
import Button from "../components/Button";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { FaBell, FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "./Data";
import Carousel from "../components/Carousel";
import Transact from "./Transactions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-44 mb-8">
          <p className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
            Welcome Andy <PiHandWaving />
          </p>

          <div className="flex flex-col md:flex-row bg-red-50 p-3 gap-2 rounded-lg">
            <FaBell className="text-red-500" />
            <p className="text-gray-600 text-sm md:text-base">
              Your account has been setup for OTC trade, please{" "}
              <span className="text-black">Contact OTC</span> to transact
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Card 1 */}
          <Card>
            <div className="flex justify-between text-gray-700 mb-3">
              <div className="flex items-center text-sm md:text-base">
                <p className="text-lg">
                  NGN.<span className="text-xs text-gray-600">Naira</span>
                </p>{" "}
                <MdKeyboardArrowDown />
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <FaPlus />
                <p>Deposit</p>
              </div>
            </div>
            <h2 className="text-2xl font-medium mb-8">₦34,645,233</h2>
            <div className="flex flex-wrap gap-3 items-center">
              <Button
                label="Send"
                variant="secondary"
                icon={<FaArrowUpLong />}
                iconPosition="left"
              />
              <Button
                label="Receive"
                variant="secondary"
                icon={<FaArrowDownLong />}
                iconPosition="left"
              />
              <Button
                label="Swap"
                variant="secondary"
                icon={<LuArrowRightLeft />}
                iconPosition="left"
              />
              <button className="rounded-full bg-gray-100 w-8 h-8 items-center justify-center flex">
                <BsThreeDotsVertical />
              </button>
            </div>
          </Card>

          {/* Card 2 */}
          <Card>
            <div className="flex justify-between text-gray-700 mb-3">
              <p>Merchants</p>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <FaPlus />
                <p>Add Merchants</p>
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-2 justify-between">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-3"
                >
                  <h3 className="rounded-full bg-gray-100 flex items-center justify-center w-14 h-14">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <a href="/" className="text-gray-600 text-xs">
              See all
            </a>
          </Card>
        </div>

        {/* FX Rates Section */}
        <div className="mt-8 bg-white rounded-lg p-4 gap-8 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700">FX Rates</h2>
            <a href="/" className="text-gray-400 text-xs">
              See all
            </a>
          </div>
          <Carousel />
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full">
          {/* Recent Transactions */}
          <div className="flex flex-col w-full lg:w-[60%] bg-white p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-700">
                Recent Transactions
              </h2>
              <a href="/" className="text-gray-400 text-xs">
                See all
              </a>
            </div>
            <Transact />
          </div>

          {/* Money Flow */}
          <div className="bg-white w-full lg:w-[35%]">
            <h2 className="text-xl font-bold">Money Flow</h2>
            <Chart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

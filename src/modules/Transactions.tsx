import { LuArrowDown, LuArrowRight, LuArrowUp } from "react-icons/lu";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { TbArrowsExchange } from "react-icons/tb";

const Transact = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between border-b-4 pb-6 px-1">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 w-10 h-10 flex items-center justify-center rounded-lg">
            <LuArrowUp className="text-red-500 " />
          </div>
          <p className="text-base font-medium text-gray-800">Sent GBP</p>
        </div>
        <div className="flex gap-[8rem]">
          <div className="flex gap-6">
            <p className="text-gray-700">Sent to John Doe</p>
            <p className="text-gray-400">Today, 13:30</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-red-500 text-base font-medium">
              -N1,000,000
            </span>
            <PiDotsThreeOutlineVertical />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b-4 pb-6 px-1">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-100 w-10 h-10 flex items-center justify-center rounded-lg">
            <TbArrowsExchange className="text-yellow-500 " />
          </div>
          <p className="text-base font-medium text-gray-800 flex items-center gap-2">
            Exchanged GBP <LuArrowRight />
            NGN
          </p>
        </div>
        <div className="flex gap-[4rem]">
          <div className="flex gap-6">
            <p className="text-gray-700">Sent to John Doe</p>
            <p className="text-gray-400">Today, 13:30</p>
          </div>
          <div className="flex items-center gap-6">
            <h1 className="text-red-500 text-base font-medium">
              -£1,000/ <span className="text-gray-800">+N200,000</span>
            </h1>
            <PiDotsThreeOutlineVertical />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b-4 pb-6 px-1">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 w-10 h-10 flex items-center justify-center rounded-lg">
            <LuArrowDown className="text-green-500 " />
          </div>
          <p className="text-base font-medium text-gray-800 flex items-center gap-2">
            Received GBP <LuArrowRight />
            NGN
          </p>
        </div>
        <div className="flex gap-[8rem]">
          <div className="flex gap-6">
            <p className="text-gray-700">Sent to John Doe</p>
            <p className="text-gray-400">Today, 13:30</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-base font-medium">+N200,000</span>
            <PiDotsThreeOutlineVertical />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b-4 pb-6 px-1">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg">
            <LuArrowDown className="text-gray-500 " />
          </div>
          <p className="text-base font-medium text-gray-800">Withdraw GBP</p>
        </div>
        <div className="flex gap-[8rem]">
          <div className="flex gap-6">
            <p className="text-gray-700">Sent to John Doe</p>
            <p className="text-gray-400">Today, 13:30</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-base font-medium">+N200,000</span>
            <PiDotsThreeOutlineVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transact;

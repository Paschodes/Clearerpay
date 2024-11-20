import { useEffect, useRef } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import { ratesData } from "../modules/Data";

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let scrollAmount = 0;
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

    const scrollInterval = setInterval(() => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // Reset scroll position
        carousel.scrollLeft = 0;
      } else {
        scrollAmount += 1; // Adjust this value for scroll speed
        carousel.scrollLeft += 1;
      }
    }, 20); // Adjust interval for smoothness and speed

    return () => clearInterval(scrollInterval); // Clean up on unmount
  }, []);

  return (
    <div className="overflow-hidden relative w-full ">
      <div
        ref={carouselRef}
        className="flex gap-4 w-full"
        style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
      >
        {ratesData.map((rate, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 text-gray-700 rounded-lg px-4 py-2 gap-2 shadow-sm"
            style={{ flex: "0 0 auto" }}
          >
            <div className="flex flex-col">
              <p>{rate.naira}</p>
              <span className="text-base font-medium text-black">
                {rate.amountnaira}
              </span>
            </div>
            <TbArrowsExchange />
            <div className="flex flex-col">
              <p>{rate.dollar}</p>
              <span className="text-base font-medium text-black">
                {rate.amountusd}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

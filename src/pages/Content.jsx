import React from 'react'
import { useNavigate } from "react-router";
const Content = () => {
    const navigate = useNavigate()
	return (
        <div className="relative h-screen overflow-hidden opacity-100 ">
          <img
            src="https://res.cloudinary.com/ddi6pgru6/image/upload/v1709716487/Sweta-weding-pics/temp02_er5vlz.jpg"
            className="object-cover w-full h-full absolute inset-0 z-0"
            alt="Landing Image"
          />
      
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center m-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full h-[35%]">
              <div
                onClick={() => navigate("/bride-gallery")}
                className="h-[230px] w-full sm:w-[30%] lg:w-[30%] backdrop-blur-sm border-[5px] border-rose-400 rounded-3xl flex items-center justify-center cursor-pointer mb-5 sm:mb-0"
              >
                <span className="text-rose-400 lg:text-5xl font-bold text-xl sm:text-xl md:text-3xl">
                  Bride's Side
                </span>
              </div>
              <div
                onClick={() => navigate("/bride-groom-gallery")}
                className="h-[230px] w-full sm:w-[30%] lg:w-[30%] backdrop-blur-xs border-[5px] border-white rounded-3xl flex flex-col items-center justify-center cursor-pointer mb-5 sm:mb-0"
              >
                <span className="text-white lg:text-5xl font-bold text-xl sm:text-xl md:text-3xl item">
                  Bride Groom
                </span>
                <span className="text-white font-bold text-xl sm:text-xl md:text-3xl item">Special</span>
              </div>
              <div
                onClick={() => navigate("/groom-gallery")}
                className="h-[230px] w-full sm:w-[30%] lg:w-[30%] backdrop-blur-sm border-[5px] border-rose-400 rounded-3xl flex items-center justify-center cursor-pointer"
              >
                <span className="text-rose-400 lg:text-5xl font-bold text-xl sm:text-xl md:text-3xl">
                  Groom's Side
                </span>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Content
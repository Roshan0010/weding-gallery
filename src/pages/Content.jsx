/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router";

const eventList = [
	"Haldi",
	"Bride-groom-special",
	"Mehendi",
	"More-Events",
	"Reception",
	"shaadi",
];

const Content = () => {
	const navigate = useNavigate();

	return (
		<div className="relative h-screen overflow-hidden opacity-100">
			<img
				src="https://res.cloudinary.com/ddi6pgru6/image/upload/v1709716487/Sweta-weding-pics/temp02_er5vlz.jpg"
				className="object-cover w-full h-full absolute inset-0 z-0"
				alt="Landing Image"
			/>

			<div className="absolute inset-0 z-10 flex items-center justify-center m-10 sm:m-2 p-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-[35%] sm:h-auto">
					{eventList.map((event, index) => (
						<div
							key={index}
							onClick={() => navigate(`/${event.toLowerCase()}`)}
							className={`lg:h-[150px] md:h-[100px] sm:w-[90%] h-[50px] backdrop-blur-sm border-[5px] rounded-3xl flex items-center justify-center cursor-pointer ${
								index === 1 ? "border-white text-white" : "border-rose-400 text-rose-400 px-3"
							}`}
						>
							<span
								className={`text-xl sm:text-xl md:text-3xl lg:text-5xl font-bold ${
									index === 1 ? "text-white" : "text-rose-400"
								} ${index === eventList.length - 1 ? "item" : ""}`}
							>
								{event}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Content;
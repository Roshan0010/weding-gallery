/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router";

const Landing = () => {
	const navigate = useNavigate();
	return (
		<div className="relative h-screen overflow-hidden opacity-100">
			<img
				src="https://res.cloudinary.com/ddi6pgru6/image/upload/v1709716060/Sweta-weding-pics/temp001_fwli52.jpg"
				className="object-cover w-full h-full absolute inset-0 z-0"
				alt="Landing Image"
			/>

			<div className="absolute inset-0 z-10 flex flex-col items-center justify-center m-10 text-white">
				<div className="flex flex-col items-center justify-center gap-5 w-full h-[35%]">
					<span className="text-2xl lg:text-4xl text-center font-bold custom-text-shadow">
						Welcome to the marriage gallery of
					</span>
					<span className="text-4xl lg:text-6xl text-center font-bold custom-text-shadow">
						Sweta Weds Abhishek
					</span>

					<button
						onClick={() => navigate("/content")}
						className="border p-2 rounded-3xl border-[3px] bg-rose-400"
					>
						Get Started
					</button>
				</div>
			</div>

			{/* New content at the bottom */}
			<div className="absolute inset-x-0 bottom-4 z-10 flex flex-col items-center justify-center text-white">
				<span className="text-1xl lg:text-2xl text-center  custom-text-shadow">
				A wedding gift to her sister from her brother
				</span>
				<span className="text-2xl lg:text-3xl text-center custom-text-shadow">
				designed and developed by Roshan.
				</span>
			</div>
		</div>
	);
};

export default Landing;

/* eslint-disable react/prop-types */
import { saveAs } from "file-saver";
import { TfiDownload } from "react-icons/tfi";

const PhotoView = ({ setPhotoModal, url }) => {
	const handleDownload = () => {
		saveAs(url, "downloaded_image.jpg");
	};

	return (
		<div
			className="fixed inset-0 overflow-y-auto bg-white flex justify-center items-center backdrop-blur"
			style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
			onClick={() => setPhotoModal(false)}
		>
			<div
				className="bg-white z-10 max-w-[90%] max-h-[90%] overflow-hidden relative rounded-xl"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					loading="lazy"
					src={url}
					alt="Zoomed In"
					className="w-full h-auto rounded-xl"
					style={{ maxHeight: "90%", maxWidth: "100%" }}
				/>
				<button
					className="absolute bottom-4 right-4 w-10 h-10 p-2 rounded-md text-white
                    flex  justify-center items-center backdrop-blur"
					onClick={handleDownload}
				>
					<TfiDownload className="w-[2rem] h-[2rem] font-bold custom-text-shadow " />
				</button>
			</div>
		</div>
	);
};

export default PhotoView;

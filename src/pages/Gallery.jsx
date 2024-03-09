/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import useWindowDimensions from "../components/UseDimentionHook";
import PhotoView from "../components/PhotoView";
import shaddi from "../data/Shaddi";
import haldi from "../data/Haldi";
import mehendi from "../data/Mehendi";
import allinOne from "../data/allinone";
import reception from "../data/reception";
import brideGroomSpecial from "../data/brideGroomSpecial";

const Gallery = ({ event }) => {
	const { width } = useWindowDimensions();
	console.log(width);
	const [columnsCnt, setColumnsCnt] = useState(3);
	const [photoModal, setPhotoModal] = useState(false);
	const [url, setUrl] = useState("");
	const [images, setImages] = useState([]);

	useEffect(() => {
		async function fetchImage() {
			if (event === "shaddi") {
				// console.log(shaddi);
				let temp = shaddi.map((item) => item.secure_url);
				setImages(temp);
			}
			if(event === "haldi"){
				let temp = haldi.map((item) => item.secure_url);
				setImages(temp);
			}
			if(event === "mehendi"){
				let temp = mehendi.map((item) => item.secure_url);
				setImages(temp);
			}
			if(event === "more-events"){
				let temp = allinOne.map((item) => item.secure_url);
				setImages(temp);
			}
			if(event === "reception"){
				let temp = reception.map((item) => item.secure_url);
				setImages(temp);
			}
			if(event === "bride-groom"){
				let temp = brideGroomSpecial.map((item) => item.secure_url);
				setImages(temp);
			}

			//
		}
		fetchImage();
	}, []);

	useEffect(() => {
		if (width > 500 && width <= 1024) {
			setColumnsCnt(2);
		} else if (width <= 500) {
			setColumnsCnt(1);
		} else {
			setColumnsCnt(3);
		}
	}, [width]);

	const openModal = () => {
		setPhotoModal(true);
	};

	const closeModal = () => {
		setPhotoModal(false);
	};

	const items = images.map((item, index) => (
		<div
			key={index}
			className="masonry-item"
			onClick={() => {
				setUrl(item);
				openModal();
			}}
		>
			<img
				loading="lazy"
				src={item}
				alt={`Image ${index}`}
				className="w-full h-auto"
			/>
		</div>
	));

	return (
		<div className="App m-2 relative">
			<Masonry columnsCount={columnsCnt} gutter="10px">
				{items}
			</Masonry>
			{/* <PhotoView className='relative' /> */}
			{photoModal && <PhotoView setPhotoModal={setPhotoModal} url={url} />}
		</div>
	);
};

export default Gallery;

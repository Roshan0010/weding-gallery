/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { TfiDownload } from "react-icons/tfi";

const PhotoView = ({ setPhotoModal, url }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImageSize = async () => {
      const image = new Image();
      image.src = url;

      image.onload = () => {
        setImageSize({ width: image.width, height: image.height });
      };
    };

    loadImageSize();
  }, [url]);

  const handleDownload = () => {
	const unique=Date.now();
    saveAs(url, `abhishek-sweta${unique}`);
  };

  return (
    <div
      className="fixed inset-0 overflow-y-auto overflow-x-auto bg-white flex justify-center items-center backdrop-blur"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      onClick={() => setPhotoModal(false)}
    >
      <div
        className="flex flex-col items-center bg-white z-10 max-w-[90%] max-h-[90%] overflow-hidden relative rounded-xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "90vh",
          aspectRatio: `${imageSize.width} / ${imageSize.height}`,
        }}
      >
        <img
          loading="lazy"
          src={url}
          alt="Zoomed In"
          className="w-full h-full object-contain rounded-xl"
        />
        <button
          className="absolute bottom-4 right-4 w-10 h-10 p-2 rounded-md text-white
          flex justify-center items-center backdrop-blur custom-text-shadow border"
          onClick={handleDownload}
        >
          <TfiDownload className="w-[2rem] h-[2rem] font-bold custom-text-shadow" />
        </button>
      </div>
    </div>
  );
};

export default PhotoView;

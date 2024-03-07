import Masonry from "react-responsive-masonry";
import useWindowDimensions from "../components/UseDimentionHook";

const images = [
	"https://placekitten.com/400/300",
	"https://placekitten.com/300/400",
	"https://placekitten.com/500/500",
	"https://placekitten.com/600/350",
	"https://placekitten.com/350/600",
	"https://placekitten.com/450/450",
	"https://placekitten.com/550/250",
	"https://placekitten.com/700/400",
	"https://placekitten.com/400/700",
	"https://placekitten.com/800/600",
	"https://placekitten.com/600/800",
	"https://placekitten.com/750/450",
	"https://placekitten.com/450/750",
	"https://placekitten.com/850/550",
	"https://placekitten.com/500/850",
	"https://placekitten.com/900/700",
	"https://placekitten.com/700/900",
	"https://placekitten.com/950/500",
	"https://placekitten.com/550/950",
	"https://placekitten.com/1000/800",
	// Add more dynamic images here
];

const Gallery = () => {
	const { width } = useWindowDimensions();
	console.log(width);
	const [columnsCnt, setColumnsCnt] = useState(3);

    useEffect(() => {
      if(width>500 && width<1024){
        setColumnsCnt(2);
      }
      else if(width <= 500){
        setColumnsCnt(1);
      }
      else{
        setColumnsCnt(3);
      }
    

    }, [width])
    


	const items = images.map((imageUrl, index) => (
		<div key={index} className="masonry-item">
			<img src={imageUrl} alt={`Image ${index}`} className="w-full h-auto" />
		</div>
	));

	return (
		<div className="App m-2">
			<Masonry columnsCount={columnsCnt} gutter="10px">
				{items}
			</Masonry>
		</div>
	);
};

export default Gallery;

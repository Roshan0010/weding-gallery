import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Content from "./pages/Content";
import Gallery from "./pages/Gallery";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/content" element={<Content />} />
				<Route path="/bride-gallery" element={<Gallery />} />
				<Route path="/bride-groom-gallery" element={<Gallery/>} />
				<Route path="/groom-gallery" element={<Gallery />} />
			</Routes>
		</Router>
	);
};

export default App;

//bride-gallery


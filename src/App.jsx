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
				<Route path="/haldi" element={<Gallery event={"haldi"} />} />
				<Route path="/more-events" element={<Gallery event={"more-events"} />} />
				<Route path="/reception" element={<Gallery event={"reception"}  />} />
				<Route path="/shaadi" element={<Gallery event={"shaddi"}  />} />
				<Route path="/mehendi" element={<Gallery event={"mehendi"} />} />
				<Route path="/bride-groom-special" element={<Gallery event={"bride-groom"} />} />
			</Routes>
		</Router>
	);
};

export default App;

//84.jpg

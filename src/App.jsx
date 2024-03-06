import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Content from "./pages/Content";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
        <Route path="/content" element={<Content />} />

			</Routes>
		</Router>
	);
};

export default App;

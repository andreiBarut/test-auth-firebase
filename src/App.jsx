import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Vote from "./pages/Vote";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/vote/:voteID" element={<Vote />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

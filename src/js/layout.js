import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Vehiculos } from "./views/vehiculos";
import { Planetas } from "./views/planetas";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character" element={<Personajes />} />
						<Route path="/vehicles" element={<Vehiculos />} />
						<Route path="/planets" element={<Planetas />} />
						<Route path="*" element={<h1>Not found! 404 Error!!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

import React, { useContext, useState } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import Contacto from "../component/Contacto";
import { Carousel } from "./carousel";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<>
			< Carousel />
			<Contacto />
		</>
	)
};
import React, { useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Gradient } from "./StripeGradient";

const Canvas = (props) => {
	const canvasRef2 = useRef(null);
	const gradient = new Gradient();

	useEffect(() => {
		gradient.initGradient("#gradient-canvas");
	}, []);

	return (
		<canvas
			className={styles.canvas}
			id="gradient-canvas"
			ref={canvasRef2}
			{...props}
			data-transition-in
		/>
	);
};

export default Canvas;

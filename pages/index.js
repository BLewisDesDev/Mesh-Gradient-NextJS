import Head from "next/head";
import styles from "../styles/Home.module.css";
import Canvas from "../components/Canvas";

export default function Home() {
	return (
		<>
			<Head>
				<title>Stripe Gradient</title>
				<meta name="description" content="Stripe Gradient In Next.JS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/" /> */}
			</Head>
			<main className={styles.main}>
				<Canvas />
			</main>
		</>
	);
}

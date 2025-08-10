import { useEffect, useState } from "react";

function getRandomPosition() {
	const top = Math.random() * 80 + 10; // 10% to 90%
	const left = Math.random() * 80 + 10; // 10% to 90%
	return { top: `${top}%`, left: `${left}%` };
}

export default function FloatingWords({ floatingWords }) {
	const [words, setWords] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const word =
				floatingWords[Math.floor(Math.random() * floatingWords.length)];
			const position = getRandomPosition();
			const id = Math.random().toString(36).substr(2, 9);
			setWords((prev) => [...prev, { id, word, position }]);
			setTimeout(() => {
				setWords((prev) => prev.filter((w) => w.id !== id));
			}, 2000 + Math.random() * 2000); // 2-4 seconds
		}, 3000); // every 3 seconds

		return () => clearInterval(interval);
	}, [floatingWords]);

	return (
		<>
			{words.map(({ id, word, position }) => (
				<span
					key={id}
					style={{
						position: "fixed",
						top: position.top,
						left: position.left,
						zIndex: 50,
						fontSize: "1.5rem",
						fontWeight: "bold",
						color: "crimson",
						pointerEvents: "none",
						opacity: 0.8,
						transition: "opacity 1s",
						animation: "fadeOut 3s forwards",
					}}>
					{word}
				</span>
			))}
			<style>
				{`
					@keyframes fadeOut {
						0% { opacity: 1; }
						100% { opacity: 0; }
					}
				`}
			</style>
		</>
	);
}

import { useEffect, useRef } from "react";

export default function EmojiCard({ title, emoji, floatIndex, className }) {
	const cardRef = useRef(null);

	useEffect(() => {
		let frame = 0;
		const animate = () => {
			frame++;
			const y = Math.sin(frame / 80 + floatIndex) * 16;
			const x = Math.cos(frame / 120 + floatIndex) * 8;
			if (cardRef.current) {
				cardRef.current.style.transform = `translate(${x}px, ${y}px)`;
			}
			requestAnimationFrame(animate);
		};
		animate();
		return () => {};
	}, [floatIndex]);

	return (
		<div
			ref={cardRef}
			className={`backdrop-blur-sm bg-white/13 rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6 min-w-[100px] sm:min-w-[120px] min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center m-2 sm:m-4 font-medium text-sm sm:text-lg transition-transform ${
				className || ""
			}`}>
			<span className='text-2xl sm:text-4xl'>{emoji}</span>
			<div className='mt-2 sm:mt-4 text-center text-xs sm:text-base leading-tight'>
				{title}
			</div>
		</div>
	);
}

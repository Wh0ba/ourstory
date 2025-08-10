
import { useEffect, useRef, useState } from "react";

const heartsPool = ["❤️", "💖", "💕", "💘", "💝",'🍓', '💍', '🦋', '🌷'];
export default 
function FallingHeartsBackdrop() {
	const canvasRef = useRef(null);
	const [dimensions, setDimensions] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 800,
		height: typeof window !== 'undefined' ? window.innerHeight : 600,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext("2d");
		if (!ctx) return;

		const heartCount = dimensions.width < 768 ? 15 : 30;
		
		const hearts = Array.from({ length: heartCount }, () => ({
			x: Math.random() * dimensions.width,
			y: Math.random() * dimensions.height,
			size: dimensions.width < 768 ? 18 + Math.random() * 12 : 24 + Math.random() * 16,
			speed: 1 + Math.random() * 2,
			angle: Math.random() * Math.PI * 2,
			angleSpeed: 0.01 + Math.random() * 0.02,
			emoji: heartsPool[Math.floor(Math.random() * heartsPool.length)],
		}));

		let animationFrameId;
		function draw() {
			ctx.clearRect(0, 0, dimensions.width, dimensions.height);
			hearts.forEach((heart) => {
				heart.y += heart.speed;
				heart.x += Math.sin(heart.angle) * 0.5;
				heart.angle += heart.angleSpeed;
				if (heart.y > dimensions.height + heart.size) {
					heart.y = -heart.size;
					heart.x = Math.random() * dimensions.width;
				}
				ctx.font = `${heart.size}px serif`;
				ctx.globalAlpha = 0.5;
				ctx.fillText(heart.emoji, heart.x, heart.y);
				ctx.globalAlpha = 1;
			});
			animationFrameId = requestAnimationFrame(draw);
		}
		draw();
		return () => cancelAnimationFrame(animationFrameId);
	}, [dimensions]);

	return (
		<canvas
			ref={canvasRef}
			width={dimensions.width}
			height={dimensions.height}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				pointerEvents: "none",
				zIndex: 0,
			}}
		/>
	);
}
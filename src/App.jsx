import EmojiCard from "./components/EmojiCard";
import FallingHeartsBackdrop from "./components/FallingHeartsBackdrop";

const cards = [
	{ title: "ضحكاتنا", emoji: "😊" },
	{ title: "شوقنا", emoji: "💞" },
	{ title: "حبنا", emoji: "❤️" },
	{ title: "جمالنا", emoji: "⭐" },
	{
		title: `${Math.max(
			0,
			Math.floor(
				(Date.now() - new Date("2025-05-02").getTime()) /
					(1000 * 60 * 60 * 24)
			)
		)} يومًا معًا`,
		emoji: "📅",
	},
];

function CardList() {
	return (
		<div className='flex flex-wrap gap-2 sm:gap-8 justify-center items-center px-4'>
			{cards.map((card, i) => (
				<EmojiCard
					key={card.title}
					title={card.title}
					emoji={card.emoji}
					floatIndex={i}
				/>
			))}
		</div>
	);
}

function App() {
	return (
		<>
			<FallingHeartsBackdrop />
			<div className='flex flex-col items-center justify-center min-h-screen px-4 py-8 text-black'>
				<div className='w-full max-w-xs sm:max-w-sm md:w-1/4 '>
					<EmojiCard
						title='أريد ان اكون شيءً جميلاً في حياتك'
						emoji='💌'
						floatIndex={0}
					/>
				</div>
				<hr className='my-6 sm:my-8 w-3/4 sm:w-1/2 border-t-2 rounded-2xl h-1 text-white' />
				<CardList />
				<hr className='my-6 sm:my-8 w-3/4 sm:w-1/2 border-t-2 rounded-2xl h-1 text-white' />
				<EmojiCard
					title='عبدالوهاب & طيبة'
					emoji='💍♾️🩷'
					floatIndex={cards.length}
					className='mt-4 sm:mt-6'
				/>
			</div>
		</>
	);
}

export default App;

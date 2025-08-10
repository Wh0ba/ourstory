import EmojiCard from "./components/EmojiCard";
import FallingHeartsBackdrop from "./components/FallingHeartsBackdrop";
import FloatingWords from "./components/FloatingWords";

const cards = [
	{ title: "سر سعادتي", emoji: "😊" },
	{ title: "أميرتي", emoji: "💞" },
	{ title: "حبيبتي", emoji: "❤️" },
	{ title: "فراشتي الحلوة", emoji: "🦋" },
	{
		title: `صار ${Math.max(
			0,
			Math.floor(
				(Date.now() - new Date("2025-05-02").getTime()) /
					(1000 * 60 * 60 * 24)
			)
		)} يوم سوى`,
		emoji: "💍",
	},
	{ title: "كم يوم للعرس : ماندريي", emoji: "🎉" },
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
			<FloatingWords
				floatingWords={[
					"طبطبي",
					"طبيبتي",
					"طبوشي",
					"طيوبتي",
					"نور عيوني",
					"قمري",
					"حياتي",
					"أميرة قلبي",
				]}
			/>
			<div className='flex flex-col items-center justify-center min-h-screen px-4 py-8 text-black'>
				<div className='w-full max-w-xs sm:max-w-sm md:w-1/4 '>
					<EmojiCard
						title='أريد ان اكون شيءً جميلاً في حياتك'
						emoji='💌'
						floatIndex={0}
					/>

					<EmojiCard
						title='عبدالوهاب و طيبة'
						emoji='💍🩷'
						floatIndex={cards.length}
						className='mt-4 sm:mt-6'
					/>
				</div>
				<CardList />
			</div>
		</>
	);
}

export default App;

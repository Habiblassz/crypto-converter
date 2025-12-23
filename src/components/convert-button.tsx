interface ConvertButtonProps {
	onClick: () => void;
}

export function ConvertButton({ onClick }: ConvertButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-full bg-[#1f3a3a] hover:bg-[#2c4a4a] text-white text-lg font-semibold py-6 rounded-full transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2c4a4a] focus:ring-offset-2 active:scale-[0.98]"
			aria-label="Convert currency">
			Convert now
		</button>
	);
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Currency } from "../types/converter";
import { CURRENCIES } from "../lib/mock-data";

interface CurrencyInputProps {
	label: string;
	amount: string;
	onAmountChange: (amount: string) => void;
	currency: Currency;
	onCurrencyChange: (currency: Currency) => void;
	type: "pay" | "receive";
}

export function CurrencyInput({
	label,
	amount,
	onAmountChange,
	currency,
	onCurrencyChange,
	type,
}: CurrencyInputProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "" || /^\d*\.?\d*$/.test(value)) {
			onAmountChange(value);
		}
	};

	const availableCurrencies =
		type === "pay" ? CURRENCIES.crypto : CURRENCIES.fiat;

	return (
		<div className="w-full">
			<label
				className="block text-sm text-[#6a6a6a] mb-2 md:mb-3"
				id={`${type}-label`}>
				{label}
			</label>
			<div className="relative bg-white rounded-3xl p-3 md:p-6 flex items-center justify-between gap-2 md:gap-4 border border-[#e5e5e5]">
				<input
					type="text"
					inputMode="decimal"
					value={amount}
					onChange={handleAmountChange}
					aria-labelledby={`${type}-label`}
					className="text-2xl md:text-4xl font-semibold bg-transparent outline-none flex-1 min-w-0 w-full text-[#2a2a2a]"
					placeholder="0.00"
				/>

				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="shrink-0 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-[#f5f5f5] hover:bg-[#e8e8e8] transition-colors">
					<span className="text-lg md:text-xl">
						{currency.icon || currency.flag}
					</span>
					<span className="font-semibold text-sm md:text-base text-[#2a2a2a]">
						{currency.code}
					</span>
					<ChevronDown className="w-4 h-4 text-[#6a6a6a]" />
				</button>

				{isOpen && (
					<div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-[#e5e5e5] py-2 z-20 min-w-50">
						{availableCurrencies.map((curr) => (
							<button
								key={curr.code}
								type="button"
								onClick={() => {
									onCurrencyChange(curr);
									setIsOpen(false);
								}}
								className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] transition-colors text-left">
								<span className="text-xl">{curr.icon || curr.flag}</span>
								<div>
									<div className="font-semibold text-[#2a2a2a]">
										{curr.code}
									</div>
									<div className="text-xs text-[#8a8a8a]">{curr.name}</div>
								</div>
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

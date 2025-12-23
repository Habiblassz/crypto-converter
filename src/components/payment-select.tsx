import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PAYMENT_OPTIONS } from "../lib/mock-data";

interface PaymentSelectProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
}

export function PaymentSelect({ label, value, onChange }: PaymentSelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	const selectedOption = PAYMENT_OPTIONS.find((opt) => opt.value === value);

	return (
		<div className="relative">
			<label
				className="block text-sm text-[#6a6a6a] mb-2 md:mb-3"
				id={`${label}-label`}>
				{label}
			</label>

			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-labelledby={`${label}-label`}
				className="w-full bg-white rounded-3xl p-4 md:p-6 flex items-center justify-between border border-[#e5e5e5] hover:border-[#c5c5c5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2c4a4a]">
				<div className="flex items-center gap-3 overflow-hidden">
					{selectedOption ? (
						<>
							<span className="text-2xl shrink-0">{selectedOption.icon}</span>
							<span className="text-lg text-[#2a2a2a] truncate">
								{selectedOption.label}
							</span>
						</>
					) : (
						<span className="text-lg text-[#9a9a9a]">Select wallet</span>
					)}
				</div>
				<ChevronDown className="w-5 h-5 text-[#6a6a6a] shrink-0 ml-2" />
			</button>

			{isOpen && (
				<div
					role="listbox"
					className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-[#e5e5e5] py-2 z-20 max-h-75 overflow-y-auto">
					{PAYMENT_OPTIONS.map((option) => (
						<button
							key={option.value}
							type="button"
							role="option"
							aria-selected={option.value === value}
							onClick={() => {
								onChange(option.value);
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-6 py-4 hover:bg-[#f5f5f5] transition-colors text-left">
							<img
								src={selectedOption?.icon}
								alt={selectedOption?.label}
								className="w-6 h-6 block object-contain"
							/>
							<span className="font-medium text-[#2a2a2a]">{option.label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}

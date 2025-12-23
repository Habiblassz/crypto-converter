import { ConversionType } from "../types/converter";

interface ConversionTabsProps {
	activeTab: ConversionType;
	onTabChange: (tab: ConversionType) => void;
}

/**
 * Tab navigation for different conversion types
 */
export function ConversionTabs({
	activeTab,
	onTabChange,
}: ConversionTabsProps) {
	const tabs: { value: ConversionType; label: string }[] = [
		{ value: "crypto-to-cash", label: "Crypto to cash" },
		{ value: "cash-to-crypto", label: "Cash to crypto" },
		{ value: "crypto-to-loan", label: "Crypto to fiat loan" },
	];

	return (
		<div
			className="flex gap-3 justify-center flex-wrap"
			role="tablist"
			aria-label="Conversion options">
			{tabs.map((tab) => (
				<button
					key={tab.value}
					role="tab"
					aria-selected={activeTab === tab.value}
					aria-controls={`${tab.value}-panel`}
					onClick={() => onTabChange(tab.value)}
					className={`
            w-full sm:w-auto flex justify-center
            px-6 py-3 rounded-full text-sm font-medium transition-all
            focus:outline-none focus:ring-2 focus:ring-[#2c4a4a] focus:ring-offset-2 
												${
													activeTab === tab.value
														? "bg-[#1f3a3a] text-white shadow-lg"
														: "bg-transparent text-[#8a8a8a] hover:text-[#4a4a4a]"
												}
          `}>
					{tab.label}
				</button>
			))}
		</div>
	);
}

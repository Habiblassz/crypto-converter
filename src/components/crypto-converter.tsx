import { useState } from "react";
import { ConversionType, Currency } from "../types/converter";
import { ConversionTabs } from "./conversion-tabs";
import { CurrencyInput } from "./currency-input";
import { PaymentSelect } from "./payment-select";
import { ConvertButton } from "./convert-button";
import { Card } from "./ui/Card";

export function CryptoConverter() {
	const [activeTab, setActiveTab] = useState<ConversionType>("crypto-to-cash");
	const [payAmount, setPayAmount] = useState("1.00");
	const [receiveAmount, setReceiveAmount] = useState("1.00");
	const [payCurrency, setPayCurrency] = useState<Currency>({
		code: "ETH",
		name: "Ethereum",
		icon: "⟠",
	});
	const [receiveCurrency, setReceiveCurrency] = useState<Currency>({
		code: "NGN",
		name: "Nigerian Naira",
		flag: "🇳🇬",
	});
	const [payFrom, setPayFrom] = useState("");
	const [payTo, setPayTo] = useState("");

	const handleConvert = () => {
		if (!payAmount || !receiveAmount || !payFrom || !payTo) {
			alert("Please fill in all fields");
			return;
		}

		console.log("[v0] Converting:", {
			type: activeTab,
			from: { amount: payAmount, currency: payCurrency.code, method: payFrom },
			to: {
				amount: receiveAmount,
				currency: receiveCurrency.code,
				method: payTo,
			},
		});

		alert(
			`Converting ${payAmount} ${payCurrency.code} to ${receiveAmount} ${receiveCurrency.code}`
		);
	};

	return (
		<Card className="w-full max-w-2xl bg-[#f5f5f0] rounded-3xl md:rounded-[2.5rem] p-5 md:p-12 shadow-2xl">
			<ConversionTabs activeTab={activeTab} onTabChange={setActiveTab} />
			<div className="space-y-6 mt-8">
				<CurrencyInput
					label="You pay"
					amount={payAmount}
					onAmountChange={setPayAmount}
					currency={payCurrency}
					onCurrencyChange={setPayCurrency}
					type="pay"
				/>

				<CurrencyInput
					label="You receive"
					amount={receiveAmount}
					onAmountChange={setReceiveAmount}
					currency={receiveCurrency}
					onCurrencyChange={setReceiveCurrency}
					type="receive"
				/>

				<PaymentSelect label="Pay from" value={payFrom} onChange={setPayFrom} />

				<PaymentSelect label="Pay to" value={payTo} onChange={setPayTo} />

				<ConvertButton onClick={handleConvert} />
			</div>
		</Card>
	);
}

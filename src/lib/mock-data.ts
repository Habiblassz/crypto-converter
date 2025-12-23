import type { Currency, PaymentOption } from "../types/converter";

export const CURRENCIES = {
	crypto: [
		{ code: "BTC", name: "Bitcoin", icon: "₿" },
		{ code: "ETH", name: "Ethereum", icon: "⟠" },
		{ code: "USDT", name: "Tether", icon: "₮" },
		{ code: "BNB", name: "Binance Coin", icon: "🔶" },
		{ code: "SOL", name: "Solana", icon: "◎" },
	] as Currency[],
	fiat: [
		{ code: "USD", name: "US Dollar", flag: "🇺🇸" },
		{ code: "EUR", name: "Euro", flag: "🇪🇺" },
		{ code: "GBP", name: "British Pound", flag: "🇬🇧" },
		{ code: "NGN", name: "Nigerian Naira", flag: "🇳🇬" },
		{ code: "KES", name: "Kenyan Shilling", flag: "🇰🇪" },
	] as Currency[],
};

export const PAYMENT_OPTIONS: PaymentOption[] = [
	{
		value: "metamask",
		label: "MetaMask",
		icon: "/icons/metamask.svg",
	},
	{
		value: "rainbow",
		label: "Rainbow",
		icon: "/icons/rainbow.svg",
	},
	{
		value: "wallet-connect",
		label: "WalletConnect",
		icon: "/icons/walletconnect.svg",
	},
	{
		value: "other",
		label: "Other crypto wallet (Binance, Coinbase, Bybit etc)",
		icon: "/icons/wallet.svg",
	},
];

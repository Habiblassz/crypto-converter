export type ConversionType =
	| "crypto-to-cash"
	| "cash-to-crypto"
	| "crypto-to-loan";

export interface Currency {
	code: string;
	name: string;
	icon?: string;
	flag?: string;
}

export interface PaymentOption {
	value: string;
	label: string;
	icon: string;
}

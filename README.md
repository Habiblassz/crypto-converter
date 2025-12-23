Crypto Converter
A fully responsive, pixel-perfect front-end implementation of a Crypto-to-Cash converter created to a lightweight, client-side Vite + React architecture.

🚀 Features
Responsive Design: Flawless layout adaptation across mobile and desktop, including specific optimizations for touch targets and input scaling.

Conversion Modes: Tabbed interface supporting "Crypto to Cash", "Cash to Crypto", and "Crypto to Loan".

Smart Inputs: Custom currency input fields with integrated dropdowns that handle overflow and scrolling intelligently.

Payment Methods: Selector supporting MetaMask, Rainbow, WalletConnect, and generic banking options with icon support.

Modern Styling: Powered by Tailwind CSS v4 using the new CSS-first configuration approach.


🛠️ Tech Stack
Framework: React 18

Build Tool: Vite

Language: TypeScript

Styling: Tailwind CSS v4 + tailwind-merge + clsx

Icons: Lucide React

Components: Custom implementations + Radix UI primitives

📂 Project Structure
The project follows a clean src directory structure optimized for Vite.

Plaintext
src/
├── components/
│   ├── ui/
│   │   └── card.tsx          # Reusable container component
│   ├── conversion-tabs.tsx   # Navigation between conversion types
│   ├── convert-button.tsx    # Primary action button
│   ├── crypto-converter.tsx  # Main Orchestrator (State & Logic)
│   ├── currency-input.tsx    # "You pay" / "You receive" inputs
│   └── payment-select.tsx    # Wallet & Payment method selector
├── lib/
│   ├── mock-data.ts          # Static data for currencies & wallets
│   └── utils.ts              # Tailwind class merger (cn helper)
├── types/
│   └── converter.ts          # TypeScript interfaces
├── App.tsx                   # Main layout wrapper
├── index.css                 # Global styles & Tailwind v4 configuration
└── main.tsx                  # Application entry point
⚡ Getting Started
Prerequisites

Node.js (v18 or higher)

npm

Installation

Clone the repository:

Bash
git clone https://github.com/Habiblassz/crypto-converter.git
cd crypto-converter
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:5173 in your browser.

🎨 Customization
Colors & Fonts: Adjusted directly in src/index.css under the @theme directive (Tailwind v4).

Data: Edit src/lib/mock-data.ts to add new currencies or payment methods.

Icons: Payment method icons are currently managed via text/emojis in mock-data.ts. Update src/components/payment-select.tsx to switch to <img> tags if using assets.
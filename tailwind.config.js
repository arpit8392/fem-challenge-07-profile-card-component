/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-kumbh-sans)'],
			},
			backgroundImage: {
				topBg: "url('/images/bg-pattern-top.svg')",
				bottomBg: "url('/images/bg-pattern-bottom.svg')",
			},
			colors: {
				darkCyan: '#19A1AE',
				darkDesaturatedBlue: '#2E3349',
				darkGrayishBlue: '#6B7082',
				darkGray: '#E8E9EC',
			},
		},
	},
	plugins: [],
}

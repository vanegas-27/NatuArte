/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"devb" : "#263238",
				"devw" : "#f5f7fa",
				"primary" : "#28cb8b",
				"secondary" : "#4d4d4d",
				"info" : "#2194f3",
			},
			backgroundColor: {
				"primary" : "#43a046",
				"secondary" : "#263238",
				"info" : "#86898a23",
				"info1" : "#237d31",
				"info2" : "#66bb69", 
				"info3" : "#81c784",
				"greyBlue" : "#abbed1"
			},
			borderColor: {
				"info1" : "#237d31",
			},
			boxShadow: {
				"in" : "#237d31",
			}
		},
	},
	plugins: [],
}

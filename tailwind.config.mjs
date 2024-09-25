/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customPurple: '#17153B',
				customPurple2: '#0C1844',  // Aquí defines el color personalizado
			  },
		},
	},
	plugins: [],
}

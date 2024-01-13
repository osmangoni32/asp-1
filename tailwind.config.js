/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
		extend: {
			container: {
				center: true,
				padding: "1.25rem",
			},
			colors: {
				clifford: "#da373d",
			},
		},
	},
  plugins: [],
};

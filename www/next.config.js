const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "md"],
	
	output: 'export',
	distDir: '.out',

	images: {
		//TODO:Set temporary, otherwise export was not working
		unoptimized: true,
	},
	experimental: {
		scrollRestoration: true,
	},
}

module.exports = withMarkdoc()(nextConfig)

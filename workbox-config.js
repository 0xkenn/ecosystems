module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{gif,css,html,txt,scss,eot,svg,ttf,woff,woff2,jpg,png,js,json,md,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
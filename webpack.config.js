var path = require("path");

module.exports = {
	entry: {
			   app:['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
		   },
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' },
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.(jpg|png)$/, loader: "url?limit=8192"}
		],
	},
};

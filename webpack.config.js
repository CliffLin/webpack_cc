var path = require("path");

module.exports = {
	entry: {
		bundle:[/*'webpack/hot/dev-server',*/
			 path.resolve(__dirname, 'app/index.html'), 
			 path.resolve(__dirname, 'app/main.js')],
		   },
	output: {
		path: path.resolve(__dirname, 'dev'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' },
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{ test: /\.(html)$/, loader: "file?name=[path][name].[ext]&context=./app"}
		],
	},
};

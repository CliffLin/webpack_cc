var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: {
			   app:['./app/main.js'],
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
	plugins: [ 
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	]
};

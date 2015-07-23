var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: {
   		bundle:[path.resolve(__dirname, 'app/index.html'),
				path.resolve(__dirname, 'app/main.js')],
	},
	resolve: {
		alias: {'react':'react/dist/react.min.js'}
	},
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' },
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{ test: /\.(html)$/, loader: "file?name=[path][name].[ext]&context=./app"}
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

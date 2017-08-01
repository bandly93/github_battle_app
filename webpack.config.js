var path = require('path');
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry : "./src/index.js",
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : "index_bundle.js"
	},
	module:{
		rules:[
			{test: /\.(js)$/,use: 'babel-loader'},
			{test: /\.css$/,use : ['style-loader','css-loader']}
		]
	},
	plugins : [new HTMLWebpackPlugin({
		template : "index.html"
	})]
}
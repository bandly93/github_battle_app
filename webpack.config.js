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
	//This module helps watch the state of the app.
	//if you press refresh it will load the app and the react router 
	//will know where to render the next page
	devServer:{
		historyApiFallback: true
	},
	plugins : [new HTMLWebpackPlugin({
		template : "src/index.html"
	})]
}
const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	miniCss = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: ['@babel/polyfill', './src/js/app.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.js'
	},
	devServer: {
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [miniCss.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		new miniCss({
			filename: 'main.css'
		})
	]
};

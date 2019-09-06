const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const minifyCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production", //[will not minify the output file]
	//devtool: "none",

	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "scripts")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					miniCssExtractPlugin.loader, //3.extracts CSS in seperate files  ^
					"css-loader", //2.translates css to js using css loader          ^
					"sass-loader" // 1.convert sass to css using sass-loader         ^
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
		new htmlWebpackPlugin({})
	],
	optimization: {
		minimizer: [
			new minifyCssAssetsPlugin(),
			new TerserPlugin(),
			new htmlWebpackPlugin({
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	}
});

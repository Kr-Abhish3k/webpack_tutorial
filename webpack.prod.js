const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: "production", //[will not minify the output file]
	//devtool: "none",

	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "scripts")
	},
	plugins: [new CleanWebpackPlugin()]
});

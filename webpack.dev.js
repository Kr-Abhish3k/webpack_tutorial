var common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development", //[will not minify the output file]
	//devtool: "none",

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "scripts")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3.injects styles into DOM using style-loader ^
					"css-loader", //2.translates css to js using css loader        ^
					"sass-loader" // 1.convert sass to css using sass-loader       ^
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/template.html"
		})
	]
});

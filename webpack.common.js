var htmlWebpackPlugin = require("html-webpack-plugin");
const { cleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");
module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"
	},
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "scripts")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3.injects styles into DOM using style-loader ^
					"css-loader", //2.translates css to js using css loader      ™  ^
					"sass-loader" // 1.convert sass to css using sass-loader       ^
				]
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpeg|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs"
					}
				}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/template.html"
		})
	]
};

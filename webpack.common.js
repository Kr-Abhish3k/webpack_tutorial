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
	}
};

const path = require("path");
module.exports = {
	mode: "development", //[will not minify the output file]
	//devtool: "none",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "scripts")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"] // translates css to js using css loader first and injects styles into DOM using style-loader [order of execution id right to left]
			}
		]
	}
};

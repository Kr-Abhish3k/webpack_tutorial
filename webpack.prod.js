const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
module.exports = merge(common, {
	mode: "production", //[will not minify the output file]
	//devtool: "none",

	output: {
		filename: "main.[contentHash].js",
		path: path.resolve(__dirname, "scripts")
	}
});

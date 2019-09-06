var common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
module.exports = merge(common, {
	mode: "development", //[will not minify the output file]
	//devtool: "none",

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "scripts")
	}
});

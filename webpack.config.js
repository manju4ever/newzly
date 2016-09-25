module.exports = {	
	entry:"./src/Main.js",
	output: {
		filename:"bundle.js",
		path:"./dist"
	},

	devServer:{
		cosntentBase:"static",
		inline:true,
		watch:true,
		port:8181,
		publicPath:"dist/"

	},

	module:{
		loaders:[{
		  test:/.(jsx|js)$/, 
		  loader:"babel",
		  exclude:/node_modules/,
		  query:{
		  	presets:["es2015", "react"]
		  },

		},{
		  	test:/.json$/,
		  	loader:"json"
		  }]
	}
};

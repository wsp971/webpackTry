var webpack = require('webpack'); 
var path = require('path');   /*引入node path 库*/
var HtmlwebpackPlugin=require("html-webpack-plugin");/*webpack模板插件*/
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;/*代码压缩*/
var env=process.env.WEBPACK_ENV;
var outputFile;
var plugins=[new HtmlwebpackPlugin({
  title:"react study by wsp",
  template:path.resolve(__dirname,"templates/index.ejs"),
  inject:"body"
})];
if(env==='build'){
  var UglifyJsPlugin=webpack.optimize.UglifyJsPlugin;
  plugins.push(new UglifyJsPlugin({minimize:true}));
  outpuFile='bundle.min.js';
}else{
  outpuFile='bundle.js'
}

var config = {
  entry: [
    './app/test/index.js',
  	'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000'
  ],                //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),  // 指定编译后的代码位置为 dist/bundle.js
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      // 为webpack指定loaders
      //{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ } 
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: path.resolve(__dirname, 'app')
      },
      { 
        test: /\.jsx?$/, 
        loader: 'babel', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'] 
        }
      }  
    ]
    
  },
  plugins: plugins,
  devtool: 'source-map'
}

module.exports = config;
const path = require("path");
const webpack = require("webpack");
module.exports = {
    context: __dirname,
    entry: inputSetting("./src/",[
        "es6/index.js",
        "es6/module.js",
        "react/demo1.jsx",
        "react/mobx.jsx",
        "test/component.jsx",
        "react/mobxtest.js"
    ]),
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js"
    },
    watchOptions:{
        watch: true,
        ignored: /node_modules/
    },
    resolve:{
        /*alias 用来设置别名，可以设置 import amd commonjs 模块*/
        alias:{
            "lib": path.resolve(__dirname,"src/lib/"),
            "jquery-mousewheel": path.resolve(__dirname,"src/lib/jquery-mousewheel.js")
        }
    },
    /*
    * extrenals 用来设置外来的库，也就是不会打包到目标文件的库，
    * 这样做，也方便这些库文件单独做CDN缓存
    *
    * key: 为设置之后的 值，value 为<script>标签引入的库所导出的对象
    * 注意 externals 里的库都是要用script 标签引入的
    *
    *
    *
    * */
    externals: {
        'aaaa': 'React',
        'react-dom': 'ReactDOM',
        'jquery': 'jQuery',
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: [
                    {loader: 'babel-loader'},
                ],
                /*include 用来设置需要编译的模块，exclude 当然就设置不需要编译的模块，主要起提高编译效率的作用*/
                include:[
                    path.resolve(__dirname, 'src/es6'),
                    path.resolve(__dirname, 'src/react'),
                    path.resolve(__dirname, 'src/test')
                ],
                exclude:['node_modules']
            }
        ]
    },
    plugins:[
       /*把所有需要打包的文件用来生成公共模块文件*/
        new webpack.optimize.CommonsChunkPlugin( "common")
    ]
};
function inputSetting(distPath,entrys){
    let result = {};
    if(Array.isArray(entrys)){
        entrys.map((entry)=>{
            result[prefix(entry)] = distPath +entry ;
        });
    }
    return result;
}

function prefix(file){
    let index = file.lastIndexOf(".");
    return file.substring(0,index);
}


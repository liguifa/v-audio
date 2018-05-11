
class GenerateApiDoc{
    constructor(path){
        this.path = path;
    }

    apply(compiler){
        compiler.plugin('run', function(compiler, callback) {
            console.log(compiler);
        
            callback();
          });
    }
}

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./dist/v-audio.min.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)/, loader: 'babel-loader', exclude: /node_modules/, },
            { test: /\.png/, loader: "url-loader" },
            { test: /\.vue/, loader: "vue-loader", exclude: /node_modules/, }
        ]
    },
    plugins:[
        new GenerateApiDoc()
    ]
}


module.exports = {
    entry: "./src/entry.js",
    devtool: "inline-source-map",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
          test: /\.js$/, // Check for all js files
                 exclude: /node_modules/,
                 use: [{
                   loader: 'babel-loader',
                   options: { presets: ['es2015'] }
                 }]
          }
        ]
    }
};

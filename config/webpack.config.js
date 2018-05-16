var webpack = require('webpack');
var path = require('path');


module.exports = {

    // Which file types are in our project, and where they are located
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {

        // How to process project files with loaders

        rules: [
            // Process any .js or .jsx file with Babel
            {
                test: /\.jsx?$/,

                use: [

                    {
                        loader: "babel-loader"
                    }

                ] // end of use

            }

        ] // end of rules

    },
    // Which file is the entry point to our application


    entry: [
        './src/index.jsx'
    ],


    // Where to output the final bundled code to
    output: {
        filename: 'app.js'
    }
};

module.exports = function override(config, env) {
  // return file-loader?name=[path][name].[ext]
    console.log("OVERRIDING! ", config, env);
    return config;
}

const {defineConfig} = require('@vue/cli-service');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: (isDev ? '/' : `/medods-test-task/ClientForm/`),
    outputDir: '../dist/ClientForm/',
});

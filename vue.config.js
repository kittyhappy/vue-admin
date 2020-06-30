module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
    // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    // 默认值'dist'
    outputDir: "my-app",
    // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
    // 默认值''
    assetsDir: "",
    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    // 默认值'index.html'
    indexPath: "index.html",
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: false,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
    lintOnSave: process.env.NODE_ENV !== "production",
    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    configureWebpack: {},

    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: () => {

    },

    // css的处理
    css: {
        // 当为true时，css文件名可省略 module 默认为 false
        requireModuleExtension: true,
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
        // 默认生产环境下是 true，开发环境下是 false
        extract: false,
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
        loaderOptions: {
            sass: {
               prependData: `@import "./src/styles/main.scss";`
            },
        }
    },
    // 所有 webpack-dev-server 的选项都支持。
    // devServer: {
    //     host: "localhost",
    //     port: 8080, // 端口号
    //     https: false,
    //     open: true, //配置自动启动浏览器
    //     // 配置多个代理
    //     proxy: {
    //         "/api": {
    //             target: "http://localhost:3000", // 本地模拟数据服务器
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": "" // 去掉接口地址中的api字符串
    //             }
    //         },
    //         "/foo": {
    //             target: "http://localhost:8080", // 本地模拟数据服务器
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/foo": "" // 去掉接口地址中的foo字符串
    //             }
    //         }
    //     }
    // }
};
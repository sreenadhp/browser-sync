/**
 *
 * Install:
 *      npm install browser-sync
 *
 * Run:
 *      node <yourfile.js>
 *
 * This example will create a server & use the `app` directory as the root
 *  + use your custom middleware. Note: middleware will be added before
 *  any Browsersync middlewares
 *
 */

"use strict";

var browserSync = require("browser-sync");

browserSync({
    files: ["app/css/*.css"],
    server: {
        baseDir: "app",
        middleware: [
            function (req, res, next) {
                console.log("hi from the first middleware");
                next();
            },
            function (req, res, next) {
                console.log("hi from the second middleware");
                next();
            },
        ]
    }
});

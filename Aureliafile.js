
var aurelia = require('aurelia-cli');

aurelia.command("bundle", {
    js:{
      "public/appbundle":{
          modules:[
              "app.js",
              "main",
              "about/**",
              "movies/**",
              "resources/**",
              "aurelia-bootstrapper",
              "aurelia-framework",
              "aurelia-router",
              "aurelia-http-client",
              "aurelia-validation"
          ],
          options:{
              inject: true
          }
      }
    },
    templates:{
        "public/appbundle":{
            pattern:"./public/**/*.html",
            options:{
                inject: true
            }
        }
    }
})
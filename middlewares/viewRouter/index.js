const path = require("path");
const koaStatic = require("koa-static");
const fs = require("fs");

module.exports = strapi => {
  return {
    async initialize() {
      const basename = "/";

      const publicDir = path.resolve(strapi.dir, "public");

      const validRoutes = [
        "/estructura/",
        "/contenido/",
        "/adaptacion/"
      ];
      // server dashboard assets and all routers
      strapi.router.get(`${basename}*`, ctx => {
        const routePath = ctx.url.split("?")[0];
        console.log('routePath' + routePath);
        let fileName = ctx.url;
        if (routePath === '/') fileName = "index.html";
        if (validRoutes.find(r => routePath.startsWith(r))) fileName = "index.html";

        ctx.type = "html";
        ctx.body = fs.createReadStream(
          path.join(publicDir + `/${fileName}`)
        );
      });
    }
  };
};

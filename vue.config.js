const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  pwa: {
    name: "Descobrindo a depressão",
    short_name: "Descobrindo a depressão",
    themeColor: "##5f88b4",
    msTileColor: "##5f88b4",
    background_color: "##5f88b4",
    appleMobileWebAppStatusBarStyle: "##5f88b4",
    manifestOptions: {
      background_color: "##5f88b4",
    },
  },
});

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  pwa: {
    name: 'Descobrindo a depressão',
    short_name: 'Descobrindo a depressão',
    themeColor: '#521ba6',
    msTileColor: '#521ba6',
    background_color: '#521ba6',
    appleMobileWebAppStatusBarStyle: '#521ba6',
    manifestOptions: {
      background_color: '#521ba6'
    }
  }
})

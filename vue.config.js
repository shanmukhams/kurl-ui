module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://kurl-server.herokuapp.com/'
    : 'localhost:3000/'
}

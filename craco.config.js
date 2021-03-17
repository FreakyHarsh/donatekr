const CracoLessPlugin = require("craco-less");
const antTheme = require("./src/constants/antTheme");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

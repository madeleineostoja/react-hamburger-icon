const path = require('path');

const CONFIG = {
  typescript: {
    forkTsCheckerWebpackPluginOptions: {
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      compilerOptions: {
        strict: false
      }
    }
  }
};

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: CONFIG.typescript
    },
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
};

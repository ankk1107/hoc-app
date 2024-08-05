const { override, addWebpackPlugin } = require('customize-cra');
const TranslateLangPlugin = require('./src/lan/translate-lang-plugin');

module.exports = override(
    addWebpackPlugin(new TranslateLangPlugin())
);
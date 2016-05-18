Package.describe({
  name: 'mys:hmcc',
  version: '0.0.2',
  git: 'https://github.com/kamilkisiela/meteor-html-minifier-repro',
  summary: 'test',
  documentation: null
});

Package.registerBuildPlugin({
  name: 'htmlMinifer',
  use: [
    'ecmascript@0.2.0',
    'caching-compiler@1.0.2',
  ],
  sources: [
    'compiler.js',
    'plugin.js'
  ],
  npmDependencies: {
    'html-minifier': '2.1.3'
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('isobuild:compiler-plugin@1.0.0');
});

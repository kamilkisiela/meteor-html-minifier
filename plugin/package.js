Package.describe({
  name: 'mys:hm',
  version: '0.0.5',
  git: 'https://github.com/kamilkisiela/meteor-html-minifier-repro',
  summary: 'test',
  documentation: null
});

Package.registerBuildPlugin({
  name: 'htmlMinifer',
  use: [
    'ecmascript@0.2.0',
    'mys:hmc@0.0.5'
  ],
  sources: [
    'plugin.js'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('isobuild:compiler-plugin@1.0.0');
});

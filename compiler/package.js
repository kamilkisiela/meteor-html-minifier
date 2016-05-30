Package.describe({
  name: 'mys:hmc',
  version: '0.0.4',
  git: 'https://github.com/kamilkisiela/meteor-html-minifier-repro',
  summary: 'test',
  documentation: null
});

Npm.depends({
  'html-minifier': '2.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript@0.2.0');
  api.use('caching-compiler@1.0.2');

  api.mainModule('compiler.js', 'server');

  api.export([
    'MinifyHtmlCompiler'
  ], 'server');
});

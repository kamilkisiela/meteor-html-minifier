Plugin.registerCompiler({
  extensions: [
    'html5'
  ]
}, () => new MinifyHtmlCompiler());

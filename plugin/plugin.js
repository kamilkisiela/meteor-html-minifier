import {
  MinifyHtmlCompiler
} from 'meteor/mys:hmc'

Plugin.registerCompiler({
  extensions: [
    'html5'
  ]
}, () => new MinifyHtmlCompiler());

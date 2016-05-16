# meteor-html-minifier-app

Reproduction.

## Error

```
While loading plugin `htmlMinifer` from package `mys:hm`:
fs.js:691:18: ENOENT, no such file or directory '/node_modules'
at Object.fs.lstatSync (fs.js:691:18)
at Object.realpathSync (fs.js:1279:21)
at
node_modules/meteor/mys:hmc/node_modules/html-minifier/node_modules/uglify-js/tools/node.js:17:1
at Array.map (native)
at
meteorInstall.node_modules.meteor.mys:hmc.node_modules.html-minifier.node_modules.uglify-js.tools.node.js
(node_modules/meteor/mys:hmc/node_modules/html-minifier/node_modules/uglify-js/tools/node.js:16:1)
at fileEvaluate
(packages/modules-runtime/.npm/package/node_modules/install/install.js:141:1)
at require
(packages/modules-runtime/.npm/package/node_modules/install/install.js:75:1)
at
meteorInstall.node_modules.meteor.mys:hmc.node_modules.html-minifier.src.htmlminifier.js
(node_modules/meteor/mys:hmc/node_modules/html-minifier/src/htmlminifier.js:8:1)
at fileEvaluate
(packages/modules-runtime/.npm/package/node_modules/install/install.js:141:1)
at require
(packages/modules-runtime/.npm/package/node_modules/install/install.js:75:1)
at meteorInstall.node_modules.meteor.mys:hmc.compiler.js
(packages/mys:hmc/compiler.js:5:1)
at fileEvaluate
(packages/modules-runtime/.npm/package/node_modules/install/install.js:141:1)
at require
(packages/modules-runtime/.npm/package/node_modules/install/install.js:75:1)
at
node_modules/meteor/mys:hmc/node_modules/html-minifier/node_modules/uglify-js/node_modules/source-map/lib/source-node.js:407:1
at
node_modules/meteor/mys:hmc/node_modules/html-minifier/node_modules/uglify-js/node_modules/source-map/lib/source-node.js:407:1

```

import {
  CachingCompiler
} from 'meteor/caching-compiler';

import {
  minify
} from 'html-minifier';

export class MinifyHtmlCompiler extends CachingCompiler {
  constructor() {
    super({
      compilerName: 'minifyHtml',
      defaultCacheSize: 1024 * 1024 * 10
    });
  }
  getCacheKey(file) {
    return file.getSourceHash();
  }

  compileResultSize(result) {
    return result.length;
  }

  compileOneFile(file) {
    console.log('Minify: ' + file.getPathInPackage());
    return file.getContentsAsString();
  }

  addCompileResult(file, result) {
    const path = file.getPathInPackage();
    const name = file.getPackageName();
    const prefix = name ? `packages/${name}/` : '';

    const options = {
      collapseWhitespace: true,
      conservativeCollapse: true,
      caseSensitive: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      processScripts: ['text/html']
    };

    const minified = minify(result, options);

    const data = `
      if (typeof exports !== 'undefined') {
        exports.raw = ${JSON.stringify(result)};
        exports.minified = ${JSON.stringify(minified)};
        exports.url = "${prefix + path}";
      }
    `;

    file.addJavaScript({
      data,
      path,
    });
  }
}

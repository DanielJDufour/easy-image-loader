var loadImageCache = {};

function loadImage(url, options) {
  var debug = (options && options.debug) || false;
  var useCache = (options && options.useCache) || false;
  if (debug) console.log("[easy-image-loader] starting to load", url);

  if (useCache && loadImageCache[url]) return loadImageCache[url];

  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      if (debug) console.log("[easy-image-loader] successfully loaded", url);
      resolve(img);
    };
    img.onerror = function (error) {
      if (debug) console.error("[easy-image-loader] failed to load", url);
      reject(error);
    };
    img.src = url;
  });

  if (useCache) loadImageCache[url] = promise;

  return promise;
}

if (typeof window !== "undefined") window.loadImage = loadImage;
if (typeof self !== "undefined") self.loadImage = loadImage;
if (typeof global !== "undefined") global.loadImage = loadImage;
if (typeof module !== "undefined") module.exports = loadImage;

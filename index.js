var loadImageCache = {};

function loadImage(url, options) {
  var debug = (options && options.debug) || false;
  var useCache = (options && options.useCache) || false;
  var crossOrigin = (options && options.crossOrigin) || null;
  if (debug) console.log("[easy-image-loader] starting to load", url);

  if (useCache && loadImageCache[url]) return loadImageCache[url];

  const promise = new Promise(function (resolve, reject) {
    var timeout;
    var img = document.createElement("img");
    img.onload = function () {
      if (debug) console.log("[easy-image-loader] successfully loaded", url);
      if (timeout) clearTimeout(timeout);
      resolve(img);
    };
    img.onerror = function (error) {
      if (debug) console.error("[easy-image-loader] failed to load", url);
      if (timeout) clearTimeout(timeout);
      reject(error);
    };
    img.src = url;
    img.crossOrigin = crossOrigin;
    if (options && typeof options.timeout === "number") {
      setTimeout(() => {
        if (debug) console.error("[easy-image-loader] timed out loading", url);
        reject(new Error("timeout"));
      }, options.timeout);
    }
  });

  if (useCache) loadImageCache[url] = promise;

  return promise;
}

if (typeof define === "function" && define.amd)
  define(function () {
    return loadImage;
  });
if (typeof window !== "undefined") window.loadImage = loadImage;
if (typeof self !== "undefined") self.loadImage = loadImage;
if (typeof global !== "undefined") global.loadImage = loadImage;
if (typeof module !== "undefined") module.exports = loadImage;

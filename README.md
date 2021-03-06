# easy-image-loader
> Easily Load an Image. Returns a Promise.

# load via script tag
```bash
<script src="https://unpkg.com/easy-image-loader"></script>
```

# install via npm
```bash
npm install easy-image-loader
```

# usage
```javascript
const loadImage = require("easy-image-loader");
```
or
```javascript
import loadImage from 'easy-image-loader';
```
or
```html
<head>
    <script src="https://unpkg.com/easy-image-loader"></script>
</head>
<body>
    <script>
        loadImage("test.jpg").then(img => {
            console.log("loaded image:", img);
        });
    </script>
</body>
```

# useCache
You can cache images with `useCache` set to true, so subsequent requests for an image
avoid additional network requests.
```js
await loadImage("test.jpg", { useCache: true });
```

# crossOrigin
You can configure to use a cross-origin request with `crossOrigin` set to `anonymous`.
See [HTMLImageElement.crossOrigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin) for details.
```js
await loadImage("test.jpg", { crossOrigin: "anonymous" });
```

# timeout
You can limit how long to wait for an image to load in milliseconds by setting timeout to a number.
```js
// wait 5000 milliseconds (5 seconds)
await loadImage("test.jpg", { timeout: 5000 });
```

# debugging
You can pass in an options object with `debug` set to true for additional logging.
```js
await loadImage("test.jpg", { debug: true });
```
will output
```
[easy-image-loader] starting to load test.jpg
[easy-image-loader] successfully loaded test.jpg
```

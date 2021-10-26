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
loadImage("test.jpg", { useCache: true });
```

# debugging
You can pass in an options object with `debug` set to true for additional logging.
```js
loadImage("test.jpg", { debug: true });
```
will output
```
[easy-image-loader] starting to load test.jpg
[easy-image-loader] successfully loaded test.jpg
```

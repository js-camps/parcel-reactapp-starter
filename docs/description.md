# Parcel React Components 1

# js-parcel-react-antd

Project structure

```
/js-parcel-react-antd
├── src 
│  ├── App.js 
│  ├── index.html 
│  └── index.js
├── styles 
│  ├── App.less 
│  └── theme-overrides.less
├── .gitignore 
├── package-lock.json 
├── package.json 
└── Readme.md
```

`src/App.js`
```js
import "../styles/App.less";

export function App() {
    return (
        <div className="landing-main-text">
            <h1>Welcome to Labs Basic SPA</h1>
            <div className="landing-main-text">
                <p>
                This is an example of how we&apos;d like for you to use <span>State</span>.
                </p>

            </div>
        </div>
    );
  }
```

`src/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Parcel App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

`src/index.js`
```js
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
```

`styles/App.less`
```less
@import "./theme-overrides";

h1 {
    //color: red;
    color: @primary-color;
}

h2 {
    color: red;
}

.landing-main-title {
    font-family: @text__font-family, @text__font-family--header;
  }
  
.landing-main-text {
  margin: 5% 0;
  text-align: center;
  font-family: @text__font-family--header;
  font-size: 1.25rem;
}
  
  /* Example usage of primary color */
  span {
    color: @primary-color;
    font-size: 2.25rem;
  }
```

`styles/theme-overrides.less`
```less
// General
@primary-color: #ff1856;
@link-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
// Fonts
@text__font-family: 'Montserrat', sans-serif;
@text__font-family--header: 'Staatliches', cursive;

@text__font-size--h1: 2.375rem;
@text__font-size--h2: 1.875rem;
@text__font-size--h3: 1.5rem;
@text__font-size--h4: 1.25rem;
@text__font-size--h5: 1rem;
@text__font-size--body: 0.875rem;
@text__font-size--footer: 0.75rem;
```

```package.json```
```json
{
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html"
  },
  "devDependencies": {
    "@parcel/transformer-less": "^2.12.0",
    "parcel": "^2.12.0",
    "process": "^0.11.10"
  },
  "dependencies": {
    "antd": "^5.20.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

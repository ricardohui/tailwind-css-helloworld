# Tailwind CSS Playground

# Project Setup
Tips

⚠️⚠️use node version of 12 to use `yarn`. Otherwise you would encounter `flatMap` error.
remove any globally installed `create-react-app`

try to use `yarn add` install of `npm install`

```
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn add @craco/craco
```
change the script section of `package.json`
```
     "start": "craco start",
+     "build": "craco build",
+     "test": "craco test",
      "eject": "react-scripts eject"
```

The `craco.config.js` set the override of create-react-app
```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

This command then create the configuration file for tailwind
```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

`tailwind.config.js`
```
  // tailwind.config.js
  module.exports = {
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

The `index.css` should be imported in the `index.html`
```
/* ./src/index.css replace all content with the following*/
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run
```
yarn start
```

# VSCode supports

install the intellisense of tailwindCSS, you need to enable the VS settings to enjoy code completion for React project.
```
tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
```
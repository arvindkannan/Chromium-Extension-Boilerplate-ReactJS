# [Chromium-Extension-Boilerplate-ReactJS](https://github.com/arvindkannan/Chromium-Extension-Boilerplate-ReactJS).

This boilerplate can be used as template for creating `React.js` based Chromium Based browser extensions.

Final Solution should support any chromium based browser such as Microsoft Edge, Google Chrome.


## Adding The Manifest

Chrome extensions need to have a manifest.json file in their root folder. That manifest tells Chrome how to create the extension and how to run it. In the manifest you will configure things like logo, name and description of your extension. Since you will want to make the manifest as part of your build root folder, I suggest to put it in the project’s public folder. In create-react-app the public folder is just copied as is to the build folder when you compile the project. Other things that I suggest to put in the public folder include content and background scripts and assets.

### manifest.json

We have the manifest version, name and description which are self explanatory. The browser_action section tells Chrome that we will have a popup which will run the index.html file. The icons will be used to present the icon in the extension tray and in Chrome extension list. Last but not least, the permissions array will include all the permissions that the extension will need to operate successfully. Currently it is left empty.

## Adding The Extension to Your Chromium Based Browser

In order to check your new extension, you will have to install it in Edge/Chrome. You can do the following to install it:

### `edge://extensions/`

Press the Load unpacked extension… button.
Browse to the build folder and press the OK button.

In Chrome, open the extension list by opening a new tab and running the following URL:

### `chrome://extensions/`

Press the Load unpacked extension… button.
Browse to the build folder and press the OK button.

If everything goes right, you will have your extension installed in Edge/Chrome.

## Error if any in loading Extension to chromium based browser

Latest versions of Chrome block inline scripts in Chrome extensions. Since create-react-app build in version 2 creates an inline script to run the app you might stumble upon an error message which is related to Content Security Policy (CSP) in the console. In the error message you will get a sha value which can be added to the manifest.json file to solve the problem.

Add to [Manifest.json](public/manifest.json) :"content_security_policy": "script-src 'self' 'sha256-GgRxr...'; object-src 'self'"

Replace `sha256-GgRxr...` with the sha value shown in Error Field -> Chromium browser Developer Mode

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm build`

### `npm test`

### `npm eject`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## License

Release under MIT License.

## Contribution:

Contributions are always welcomed unless it violates code of conduct

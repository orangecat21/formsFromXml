# Forms From Xml

Application for building forms based on XML uploads from ONAP AAI

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [ http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in the browser.<br />
Also runs a server at [http://127.0.0.1:8080](http://127.0.0.1:8080) to distribute xml files.

The page will reload if you make edits.<br />

### `yarn build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Additional info

When you run the application in dev mode, it downloads an XSD file from the server and generates from it a d.ts file with the declaration of interfaces by java attributes

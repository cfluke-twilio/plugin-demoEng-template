# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org), [`npm`](https://npmjs.com), and [Twilio cli](https://www.twilio.com/docs/twilio-cli/quickstart) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cp public/appConfig.example.js public/appConfig.js

# update the appConfig.js file to include your accountSid

# If you use npm
npm install
```

In package.json, update the name field to your plugin name

In the src/constants.js file, update the packageName to match the package name in package.json

Update the variable PLUGIN_NAME in DemoEngTemplatePlugin.js file to your plugin name

Rename the DemoEngTemplatePlugin.js file to your plugin name

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.

## Plugin Configuration

This template supports configuration that is set at deploy and can be overwritten by localStorage.

In the src/contants.js file, there is a rjsf form definition for the settings and the deploy time default configuration.

react-json-schema-form allows creating a dynamic form and is used to allow plugin-flex-configurator to update the localStorage values and therefore your plugin's configuration.

To create a form [rjsf playground](https://rjsf-team.github.io/react-jsonschema-form/) is a great resource

## Services

If you are making any callouts, please create a service file. This will decouple the rest request from the component lifecycle for testing.

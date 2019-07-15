# Serverless API: Typescript and Jest Template
A Serverless API template using Typescript and Jest.

This setup uses AWS as the provider. 

To use your own provider, edit the `serverless.yml` as needed.
The endpoint for the tests to run against will also need to be set to be more specific to your provider.

## Getting up and running
First install `serverless` and get that up and running. documentation [here](https://serverless.com/framework/docs/providers/aws/guide/quick-start/).

You can use the standard `sls` commands or utilise the npm scripts in the project.

Then:

```
npm install
```

## Deployment - Dev

```
npm run deploy
```

## Deployment - Prod
```
npm run deploy:prod
```

## To remove:
```
npm run remove
```

# API interactions
The API url can be found either the console output, or programatically accessed via the `.serverless/output.json` object.

## GET: Healthcheck
Test the service is up

```
/healthcheck
```

# Testing
This template uses Jest (Typescript) to run its tests.

To test, first deploy the application to your desired AWS stack.
Then run
```
npm run test
```

This will use the generated API url to automatically test the application.
# papaya-js
 A Typescript framework for React

## `/server/`
The `/server/` folder features and express server written in Typescript which is compiled by SWC into `/dist/`. This server is responsible for serving the bundled files in the `/public/` folder to the client.

## `/client/`
The `/client/` folder contains the minimum necessary files to bootstrap the client and load the React appliction. It is bundled by Webpack and SWC into the `/public/` folder.

## `/pages/`
The `/pages/` folder is where you will develop your React app. It includes React Router so you can build multipage applications.
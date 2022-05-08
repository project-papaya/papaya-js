# papaya-js
 A Typescript framework for React

## `/server/`
The `/server/` folder features an Express server written in Typescript which is compiled by SWC into `/dist.server/`. This server is responsible for serving the client files bundled in the `/dist.client/` folder. Feel free to add onto the Express server to develop an API.

## `/client/`
The `/client/` folder contains the minimum necessary files to bootstrap the client and load the React appliction. It is bundled by Webpack and SWC into the `/dist.client/` folder.

## `/pages/`
The `/pages/` folder is where you will develop your React app. It includes React Router so you can build multipage applications.
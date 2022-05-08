# papaya-js
 A Typescript framework for React

## Scripts
### `npm run build`
Builds your application for production use. It is expected you use `npm start`, `nodemon .`, or `node .` from the root of the project as most file paths used in the framework are relative to that location.

### `npm run dev`
The framework provides a development server with hot reloading. This allows you to make *and see* changes to both your frontend and backend in __realtime__. This command starts both the Express server and a Webpack server. Connect to the Webpack server at `localhost:8080` to see your changes in realtime. 

## Directory Structure
### `/server/`
The `/server/` folder features an Express server written in Typescript which is compiled by SWC into `/dist.server/`. This server is responsible for serving the client files bundled in the `/dist.client/` folder. Feel free to add onto the Express server to develop an API.

### `/client/`
The `/client/` folder contains the minimum necessary files to bootstrap the client and load the React appliction. It is bundled by Webpack and SWC into the `/dist.client/` folder.

### `/pages/`
The `/pages/` folder is where you will develop your React app. It includes React Router so you can build multipage applications.
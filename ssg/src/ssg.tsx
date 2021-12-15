import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { App } from "../../client/src/App";
import fs from "fs";


const props = { source: "SSG" };
const app = ReactDOMServer.renderToString(<App {...props} />);

const html = `
    <html lang="en">
    <head>
        <script src="app.js" async defer></script>
    </head>
    <body>
        <div id="root">${app}</div>
        <script id="props" type="application/json">${JSON.stringify(props)}</script>
    </body>
    </html>
`
fs.writeFileSync("./built/app.html", html);
import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { App } from "../../client/src/App";
import fs from "fs";


const app = ReactDOMServer.renderToString(<App source="SSG" />);

const html = `
    <html lang="en">
    <head>
        <script src="app.js" async defer></script>
    </head>
    <body>
        <div id="root">${app}</div>
        <script>config = {source: "SSG"};</script>
    </body>
    </html>
`
fs.writeFileSync("./built/app.html", html);
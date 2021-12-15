import express from "express";
import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { App } from "../../client/src/App";

const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App source="SSR" />);

    const html = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
            <script>config = {source: "SSR"};</script>
        </body>
        </html>
    `
    res.send(html);
});

app.use(express.static("./built"));

app.listen(4242);
console.log("Listening on http://localhost:4242");
import React from "react";
import ReactDOM from 'react-dom';
import { App } from './App';

const props = JSON.parse(document.getElementById("props").innerText);

ReactDOM.hydrate(<App {...props} />, document.getElementById('root'));


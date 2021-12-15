import React from "react";
import ReactDOM from 'react-dom';
import { App } from './App';

declare global {
    interface Window {
        config: { source: string };
    }
}

ReactDOM.hydrate(<App source={window.config.source} />, document.getElementById('root'));


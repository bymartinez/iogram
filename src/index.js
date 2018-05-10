import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

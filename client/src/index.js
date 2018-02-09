import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

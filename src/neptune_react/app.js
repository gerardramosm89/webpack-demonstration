import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import ProjectHome from './components/ProjectHome';
import NavbarSidebar from './components/NavSidebar';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


// Routing
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

// Redux
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div className="appContainer">
        <NavbarSidebar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/projecthome" component={ProjectHome} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.querySelector('#root'));

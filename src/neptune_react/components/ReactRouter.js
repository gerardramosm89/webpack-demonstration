import Main from './Main';
import ProjectHome from './ProjectHome';
import Data from './Data';
import Predict from './Predict';
import Discover from './Discover';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const ReactRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/projecthome">Project Home</Link></li>
        <li><Link to="/data">Data</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/projecthome" component={ProjectHome}/>
      <Route path="/data" component={Data}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/predict" component={Predict}/>
    </div>
  </Router>
)
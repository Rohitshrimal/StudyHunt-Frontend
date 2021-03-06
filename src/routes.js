import React from 'react';
import {IndexRoute, Route} from 'react-router';

import BrowseAZ from './components/BrowseAZ.js';
import SearchPage from './components/SearchPage';
import App from './components/App';
import Dashboard from './components/Dashboard';
import NoMatch from "./components/NoMatch";
import LibrarySimulator from './components/simulation/LibrarySimulator';
import LibraryPage from './components/LibraryPage';
import LibraryHistory from './components/LibraryHistory';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="browse" component={BrowseAZ}/>
    <Route path="search" component={SearchPage}/>
    <Route path="simulator" component={LibrarySimulator} />
    <Route path="library/:libraryId/history" component={LibraryHistory} />
    <Route path="library/:libraryId" component={LibraryPage} />
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default Routes;

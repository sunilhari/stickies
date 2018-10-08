import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import List from '../List/List'
const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/List' component={List} />
    </Switch>
)
export default Routes;
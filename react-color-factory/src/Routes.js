import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import CheckColorDetails from './CheckColorDetails';
import ColorList from './ColorList';
import NewColor from './NewColor';

const Routes = ({ colors, addColor }) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/colors/:color">
            <CheckColorDetails colors={colors} />
          </Route>
          <Route path="/new-color">
            <NewColor colors={colors} addColor={addColor} />
          </Route>
          <Route path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;

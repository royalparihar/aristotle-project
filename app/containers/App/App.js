/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Task2 from 'containers/Task2/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Task1 from 'containers/Task1/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Aristotle Project"
      defaultTitle="Aristotle Project"
    >
      <meta name="description" content="Aristotle Tasks" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/task2" component={Task2} />
      <Route path="/task1" component={Task1} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;

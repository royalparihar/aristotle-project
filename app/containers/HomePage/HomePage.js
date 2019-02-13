/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import NavLink from '../../components/NavLink';

// import PropTypes from 'prop-types';
// import ReposList from 'components/ReposList';
import './style.scss';
// import Task1 from '../'
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   const { username, onSubmitForm } = this.props;
  //   if (username && username.trim().length > 0) {
  //     onSubmitForm();
  //   }
  // }

  render() {
    // const {
    //   loading, error, repos, username, onChangeUsername, onSubmitForm
    // } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos
    // };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <div className="nav-bar">
              <NavLink to="/task1" label="Task 1" />
              <NavLink to="/task2" label="Task 2" />
            </div>
          </section>
        </div>
      </article>
    );
  }
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func
// };

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page/landing_page';
import HomePageContainer from './home_page/home_page_container';
import DetailPage from './detail_page/detail_page';
import NavigationBarContainer from './home_page/navigation_bar_container';
import FriendshipRequestsContainer from
  './friendship_request_page/friendship_requests_container';

const App = props => {
  return (
    <div id='window' onClick={() => props.clearDropdown()}>
      <AuthRoute exact={true} path='/' component={ LandingPage } />
      <ProtectedRoute path='/' component={ NavigationBarContainer } />
      <ProtectedRoute exact={true} path='/' component={ HomePageContainer } />
      <ProtectedRoute path='/profile/:userId' component={ DetailPage } />
      <ProtectedRoute path='/friends/requests/'
        component={ FriendshipRequestsContainer } />
    </div>
  );
};

export default App;

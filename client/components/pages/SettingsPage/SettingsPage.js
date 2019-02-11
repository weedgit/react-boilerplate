import React, { useEffect } from 'react';
import R from '_utils/ramda';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import ProfileSettings from '_templates/ProfileSettings';
import AccountSettings from '_templates/AccountSettings';
import SettingsMenu from '_organisms/SettingsMenu';

export default function SettingsPage({ user, pushToLogin, location }) {
  useEffect(() => {
    if (R.isEmpty(user)) {
      pushToLogin();
    }
  }, []);

  return (
    <div className="settings-page page">
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <SettingsMenu pathname={location.pathname} />
            </div>
            <div className="column">
              <Switch>
                <Route path="/settings/profile/" component={ProfileSettings} />
                <Route path="/settings/account/" component={AccountSettings} />
                <Route path="*" component={ProfileSettings} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SettingsPage.propTypes = {
  user: PropTypes.shape({}).isRequired,
  pushToLogin: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

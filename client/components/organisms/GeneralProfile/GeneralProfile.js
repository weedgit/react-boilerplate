import React from 'react';
import PropTypes from 'prop-types';
import Box from '_molecules/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export default function GeneralProfile(props) {
  const {
    edited, save, refresh, usernameCase, firstName, lastName, bio, profilePic,
    updateFirstName, updateLastName, updateBio, updateProfilePic,
  } = props;

  const charactersRemaining = 240 - bio.length;

  return (
    <Box className="general-profile">
      <span className="icon is-medium is-pulled-right" onClick={refresh} onKeyPress={refresh}>
        <FontAwesomeIcon icon={faSync} size="lg" />
      </span>
      <h3 className="title is-3">
        General
      </h3>
      <hr className="separator" />
      <div className="columns">
        <div className="column is-4">
          <h3 className="title is-3 has-text-centered">
            {usernameCase}
          </h3>
          <figure className="image">
            <img
              className="profile-img"
              src={profilePic || '/images/default-profile.png'}
              alt="Profile"
            />
          </figure>
          <div className="field">
            <label htmlFor="profile-pic-url" className="label">
              Picture URL
            </label>
            <p className="control">
              <input
                id="profile-pic-url"
                className="input"
                type="text"
                placeholder="Picture URL"
                value={profilePic}
                onChange={updateProfilePic}
              />
            </p>
          </div>
        </div>

        <div className="column is-8">
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label htmlFor="first-name" className="label">
                  First Name
                </label>
                <p className="control">
                  <input
                    id="first-name"
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={updateFirstName}
                  />
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label htmlFor="last-name" className="label">
                  Last Name
                </label>
                <p className="control">
                  <input
                    id="last-name"
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={updateLastName}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="bio" className="label">
              Bio
            </label>
            <p className="control">
              <textarea
                id="bio"
                className="textarea"
                placeholder="Tell us about yourself."
                value={bio}
                maxLength={240}
                onChange={updateBio}
              />
            </p>
            <p className="help">
              {`Characters remaining: ${charactersRemaining}`}
            </p>
          </div>

        </div>
      </div>
      <hr className="separator" />
      <button type="button" className="button is-success" disabled={!edited} onClick={save}>
        Save
      </button>
    </Box>
  );
}

GeneralProfile.propTypes = {
  edited: PropTypes.bool.isRequired,
  usernameCase: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  updateLastName: PropTypes.func.isRequired,
  updateBio: PropTypes.func.isRequired,
  updateProfilePic: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

GeneralProfile.defaultProps = {
  usernameCase: '',
};

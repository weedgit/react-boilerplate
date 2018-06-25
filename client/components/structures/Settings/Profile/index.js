import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptGetUser, attemptUpdateUser } from '_store/actions/user';
import ProfileContainer from './ProfileContainer';

const mapStateToProps = R.pick(['user', 'locations']);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

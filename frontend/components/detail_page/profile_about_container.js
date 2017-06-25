import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSingleUser } from '../../actions/user_actions';
import ProfileAbout from './profile_about';

const mapStateToProps = ({user, session}) => {
  return {
    user,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleUser: user => dispatch(updateSingleUser(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAbout));
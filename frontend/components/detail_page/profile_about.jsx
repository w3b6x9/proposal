import React from 'react';
import { Link } from 'react-router-dom';
import NameFormContainer from './name_form_container';
import EmailFormContainer from './email_form_container';
import GenderFormContainer from './gender_form_container';

export default class ProfileAbout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNameForm: false,
      showEmailForm: false,
      showGenderForm: false,
    };
  }

  formClicked(property) {
    return () => {
      if (this.state.property) {
        this.setState({ [property]: false });
      } else {
        this.setState({ [property]: true });
      }
    };
  }

  render() {
    const { first_name, last_name, email, gender, birth_year,
      birth_month, birth_day, id } = this.props.user;

    return (
      <div className='about-section'>
        <h3>About</h3>
        <div className='about-subsection'>
          <div className='about-tab'>
            <Link to={this.props.location.pathname} replace>Overview</Link>
          </div>
          <div className='about-main'>
            <div className='about-item'>
              { first_name + ' ' + last_name }
              { id === this.props.currentUser.id ?
                this.state.showNameForm ? <NameFormContainer /> :
                  <Link to={this.props.location.pathname}
                    onClick={this.formClicked('showNameForm')}
                      replace>Edit your name</Link> :
                        null
              }
            </div>
            <div className='about-item'>
              { email }
              { id === this.props.currentUser.id ?
                this.state.showEmailForm ? <EmailFormContainer /> :
                  <Link to={this.props.location.pathname}
                    onClick={this.formClicked('showEmailForm')}
                      replace>Edit your email</Link> :
                        null
              }
            </div>
            <div className='about-item'>
              { gender }
              { id === this.props.currentUser.id ?
                this.state.showGenderForm ? <GenderFormContainer /> :
                  <Link to={this.props.location.pathname}
                    onClick={this.formClicked('showGenderForm')}
                      replace>Edit your gender</Link> :
                        null
              }
            </div>
            <div className='about-item'>
              { birth_month + '/' + birth_day + '/' + birth_year }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

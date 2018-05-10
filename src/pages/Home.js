import React from 'react';
import Layout from '../components/Layout';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';
import UserInformation from '../components/UserInformation';
import Auth from '../components/Auth';
import { Redirect } from 'react-router-dom';
import ImageList from '../components/ImageList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: props.isLoggedIn,
      userInformation: props.userInformation,
    }
  }

  renderUserInformation() {
    const { photoURL, displayName } = this.state.userInformation;
    return (
      <UserInformation photoURL={photoURL} displayName={displayName} showButton={true} />
    );
  }

  render() {
    return (
      <Layout>
        { this.renderUserInformation() }
        <ImageList />
      </Layout>
    );
  }
}

export default Auth(Home, () => <Redirect to='/login' />);
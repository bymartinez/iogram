import React from 'react';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.tryLogin = this.tryLogin.bind(this);
  }

  tryLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(this.saveUser)
      .catch(this.showError);
  }

  saveUser(result) {
    const { user } = result;

    localStorage.setItem('isLogged',true);
    localStorage.setItem('userInformation',JSON.stringify(user));
    window.location = '/';
  }

  render() {
    return (
      <Layout>
        <h2> Login with Google</h2>
        <Button bsStyle='info' onClick={this.tryLogin}>Login</Button>
      </Layout>
    );
  }
}

export default Login;
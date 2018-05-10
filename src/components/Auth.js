import React from 'react';
import firebase from 'firebase';

const Auth = (SuccesComponent, FailComponent) => {
  return class Auth extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLogged: false,
        userInformation: {}
      }
    }

    static getDerivedStateFromProps() {
      const userInformation = (localStorage.getItem('userInformation') & JSON.parse(localStorage.getItem('userInformation'))) || {};
      return {
        isLogged: localStorage.getItem('isLogged'),
        userInformation,
      };
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
    }

    render() {
      const isLoggedIn = localStorage.getItem('isLogged');
      const userInformation = JSON.parse(localStorage.getItem('userInformation'));
    
      if(isLoggedIn) {
        return (
          <SuccesComponent
            isLoggedIn={isLoggedIn}
            userInformation={userInformation} />
        );
      }
      
      return (
        <FailComponent />
      );
    }
  }
};  

export default Auth;
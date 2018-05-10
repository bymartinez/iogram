import React from 'react';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Button
} from 'react-bootstrap';
import firebase from 'firebase';

const logout = () => {
  localStorage.removeItem('isLogged');
  localStorage.removeItem('userInformation');
  firebase.auth().signOut();
  window.location = '/';
};

const Layout = ({ children }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <PageHeader>
            I/O Gram
            <small> Universidad Galileo </small>
            <Button bsStyle='warning' onClick={logout}> Logout </Button>
          </PageHeader>
        </Col>
        {children}
      </Row>
    </Grid>
  );
};

export default Layout;
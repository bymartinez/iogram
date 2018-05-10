import React from 'react';
import {
  Grid,
  Row,
  Col,
  PageHeader,
} from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <PageHeader>
            I/O Gram
            <small> Universidad Galileo </small>
          </PageHeader>
        </Col>
        {children}
      </Row>
    </Grid>
  );
};

export default Layout;
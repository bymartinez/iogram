import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Button } from 'react-bootstrap';

const UserInformation = ({ photoURL, displayName, showButton }) => {
  return (
    <Row>
      <Col xs={2} md={2}>
        <Image src={photoURL} circle width={50} height={50} />
      </Col>
      <Col xs={8} md={8} className='text-left'>
        <h2>{displayName}</h2>
        <Link to='/upload-image'>
          {(showButton) ? <Button bsStyle='info'>Add photo</Button> : null }
        </Link>
      </Col>
    </Row>
  );
};

export default UserInformation;
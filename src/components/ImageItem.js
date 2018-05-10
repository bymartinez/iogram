import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import UserInformation  from './UserInformation';

const ImageItem = ({ description, image, userName,photoURL }) => {
  return (
    <Panel>
      <Panel.Heading>
        {description}
      </Panel.Heading>
      <Panel.Body>
        <Image src={image} responsive/>
        <hr />
        <UserInformation 
          photoURL={photoURL}
          displayName={userName}
          showButton={false} />
      </Panel.Body>
    </Panel>
  );
};

export default ImageItem;
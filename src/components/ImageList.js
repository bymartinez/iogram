import React from 'react';
import {
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import firebase from 'firebase';
import ImageItem from './ImageItem';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const databaseRef = firebase.database().ref('images');
    databaseRef.on('value', (snapshot) => {
      const imagesKeys = Object.keys(snapshot.val());
      const images = imagesKeys.map((key) => snapshot.val()[key]).reverse();
      this.setState({
        images
      });
    });
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <Row>
        <Col>
          {images.map(image => <ImageItem description={image.description} image={image.image} userName={image.user.displayName} photoURL={image.user.photoURL}/>)}
        </Col>
      </Row>
    );
  }
}

export default ImageList;
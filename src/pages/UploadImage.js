import React from 'react';
import { Form, FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import firebase from 'firebase';
import Layout from '../components/Layout';
import Auth from '../components/Auth';
import { Redirect } from 'react-router-dom';

class UploadImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      image: {},
      loading: false,
    };

    this.uploadImage = this.uploadImage.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  uploadImage() {
    this.setState({
      loading: true
    });

    const { description, image } = this.state;
    const storageRef = firebase.storage().ref();
    const imageName = `${new Date().toString()}-${image.name}`;
    const task = storageRef.child(imageName);

    task.put(image)
      .then(snapshot => {
        snapshot.ref.getDownloadURL()
          .then(url => {
            firebase.database().ref('images').push({
              description,
              user: JSON.parse(localStorage.getItem('userInformation')),
              image: url,
            }).then(snapshot => {
              this.setState({
                loading: false
              });
              window.location = '/';
            });
        });
      });
  } 

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleChangeImage(event) {
    this.setState({ 
      image: event.target.files[0] 
    });
  }

  render() {
    return (
      <Layout>
        <h2> Add new image</h2>
        <Form>
          <FormGroup>
            <ControlLabel> Description </ControlLabel>
            <FormControl
              type='text'
              placeholder='Description...'
              onChange={this.handleChangeDescription} />
          </FormGroup>
          <FormGroup>
            <ControlLabel> Add your image </ControlLabel>
            <FormControl
              type='file'
              placeholder='Add a image'
              onChange={this.handleChangeImage} />
          </FormGroup>
          { (!this.state.loading) ? 
            <Button bsStyle='success' onClick={this.uploadImage}>Add image</Button> :
            <h2> Uploading... </h2> }
        </Form>
      </Layout>
    );
  }
}

export default Auth(UploadImage, () => <Redirect to='/' />);
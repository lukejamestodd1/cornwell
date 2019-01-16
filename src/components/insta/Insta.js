import React, { Component } from 'react';
import './Insta.css';
import request from 'superagent';

class Insta extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    this.fetchPhotos();
  }

  //store token in a .env file instead
  fetchPhotos() {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=6463676.1677ed0.7ecfe8cce8884b168828613f6b221fba')
      .then((res) => {
        this.setState({
          //hard coded my fave 3 photos here
          photos: [res.body.data[4], res.body.data[6], res.body.data[8]]
        })
      })
  }  
  
  render() {
      return (
        <div className="Insta">
          <div className="photos">
            {this.state.photos.map((photo, key) => {
              return (
                <div className="picture" key={photo.id}>
                  <img src={photo.images.low_resolution.url} alt={photo.caption}/>
                </div>
              )
            })}
            <a className="button" href="https://github.com/lukejamestodd1/cornwell" target="_blank"><span>FOLLOW US →</span></a>
          </div>
          
          <div>
            {console.log(this.state.photos)}
          </div>
      </div>
      );
    }
  }
  
  export default Insta;
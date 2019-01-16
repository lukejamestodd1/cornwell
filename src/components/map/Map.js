import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import StyleOptions from './MapStyle.json';

const Location = ({ text }) => <div>
    
    <span class="D">{text}</span>
    <div class="pointer"></div>
  </div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -37.81,
      lng: 144.936
    },
    zoom: 13,
    disableDefaultUI: true,
    zoomControl: false,
    gestureHandling: 'none',
    backgroundColor:"#eeeeee",
    //tried custom styles with Google maps API, not enough time
    style: StyleOptions
  };
    render() {
      return (
        <div className="Map" style={{ height: '100vh', width: '50%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAJ914nvbWDv457JXNCo8GBPig_F_3HTvw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // style={this.props.style}
        >
          <Location
            lat={-37.8102734}
            lng={144.9365478}
            text={'D'}
          />
        </GoogleMapReact>
      </div>
      );
    }
  }
  
  export default Map;
  
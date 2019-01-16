import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
const StyleOptions = require('./MapStyle.json');

const Location = ({ text }) => <div>
    
    <span className="D">{text}</span>
    <div className="pointer"></div>
  </div>;

const onApiLoad = (map, maps) => {
  console.log('hello');
}

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
    styles: StyleOptions
  };
    
    render() {
      return (
        <div className="Map" style={{ height: '100vh', width: '50%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAJ914nvbWDv457JXNCo8GBPig_F_3HTvw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // defaultOptions={{
          //   disableDefaultUI: true, // disable default map UI
          //   draggable: false, // make map draggable
          //   keyboardShortcuts: false, // disable keyboard shortcuts
          //   scaleControl: true, // allow scale controle
          //   scrollwheel: true, // allow scroll wheel
          //   styles: this.props.styles // change default map styles
          // }}
          yesIWantToUseGoogleMapApiInternals='true'
          onGoogleApiLoaded={({ map, maps }) => onApiLoad(map, maps)}
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
  
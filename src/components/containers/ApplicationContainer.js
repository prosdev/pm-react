import React, { Component } from 'react';
import Banner from '../common/Banner';
import PropertyContainer from '../property/PropertyContainer';

class ApplicationContainer extends Component {
  render() {
    return (
      <div className="album">
        <Banner />
        <PropertyContainer/>
      </div>
    );
  }
}

export default ApplicationContainer;
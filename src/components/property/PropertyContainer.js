import React, { Component } from 'react';
import PropertyCardList from './PropertyCardList';
import { graphql } from 'react-apollo';
import Properties from '../../queries/getPropertiesQuery';

class PropertyContainer extends Component {


    render() {
        console.log(this.props.data);
        return (
            <PropertyCardList/>
        )
    }
}

export default graphql(Properties)(PropertyContainer);
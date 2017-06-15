import React, { Component } from 'react';
import PropertyCardList from './PropertyCardList';
import { graphql } from 'react-apollo';
import Properties from '../../queries/getPropertiesQuery';

class PropertyContainer extends Component {

    /**
     * Display the property cards
     *
     * renderPropertyCards
     * @returns {HTML}
     */
    renderPropertyCards() {
        //We can access loading, properties and a variety of others from the connected graphql endpt
        const {loading, properties} = this.props.data;

        //If still loading data, display some indicator to the user
        if(loading) {
            return (
                <div>Loading data...</div>
            )
        }

        //If properties have been successfully fetched, then display property cards
        if(properties) {
            return (
                <PropertyCardList properties={properties}/>
            )
        }
    }

    /**
     * Render function
     *
     * @returns {HTML}
     */
    render() {
        return (
            <div className="container">
                {this.renderPropertyCards()}
            </div>
        )
    }
}

export default graphql(Properties)(PropertyContainer);
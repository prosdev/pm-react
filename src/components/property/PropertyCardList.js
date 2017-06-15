import React  from 'react';
import PropertyCard from './PropertyCard';

const PropertyCardList = ({properties}) => {

    function renderProperties (property) {
        return (
            <PropertyCard key={property.id} property={property}/>
        )
    }

    return (
        <div className="row">
            {properties.map(renderProperties)}
        </div>
    );

};

export default PropertyCardList;
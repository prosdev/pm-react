import React  from 'react';

const PropertyCard = ({property}) => {
    console.log(property);

    return (
        <div className="card">
            <h4 className="card-header">{property.name}</h4>
            <img className="img-fluid" src={`${property.thumbImage[0]}`} alt={property.name}/>
            <div className="card-block">
                <h4 className="card-title">{property.location.streetAddress}</h4>
                <p className="card-text">{property.description.substr(0, 100) + " ..."}</p>
                <button className="btn btn-info">See details</button>
            </div>
        </div>

    )
};

export default PropertyCard;
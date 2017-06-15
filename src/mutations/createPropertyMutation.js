import gql from 'graphql-tag'

export default gql`
    mutation CreateProperty{
        addProperty(
            name:"Elm's Hollow",
            description:"A single family home that contains 2,136 sq ft and was built in 1954. It contains 3 bedrooms and 3 bathrooms."
            tags: ["personal"]
            thumbImage: ["https://placeimg.com/350/200/arch"]
            mainImage: ["https://placeimg.com/1080/500/arch"]
            location: {
                streetAddress: "6919 SW Canyon Ln, Portland, OR 97225"
                coordinates: [-122.748476, 45.504593]
            }
        ) {
            name
        }
    }
`;

import gql from 'graphql-tag'

export default gql`
    query Properties {
        properties{
            id
            name
            description
            location {
                streetAddress
                coordinates
            },
            slug,
            thumbImage,
            mainImage,
            tags
        }
    }
`;
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
  } = require('graphql');
  
  let citrusType = {
    name: 'Citrus',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      color: { type: GraphQLString },
      taste: { type: GraphQLString },
    }),
  };
  
  module.exports = new GraphQLObjectType(citrusType)
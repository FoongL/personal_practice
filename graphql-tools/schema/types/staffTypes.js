const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');

let staffType = {
  name: 'Staff',
  fields: () => ({
    staff_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    salary: { type: GraphQLInt },
    contract_length: { type: GraphQLInt },
  }),
};

module.exports = new GraphQLObjectType(staffType)
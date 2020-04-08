const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');
require('dotenv').config();
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);

// staffType configuration
const StaffType = new GraphQLObjectType({
  name: 'Staff',
  fields: () => ({
    staff_id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    salary: { type: GraphQLInt },
    contract_length: { type: GraphQLInt },
  }),
});
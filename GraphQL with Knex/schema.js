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
const knexConfig = require('./knexfile').development;
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

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    staff_members: {
      type: new GraphQLList(StaffType),
      resolve(parent, args) {
        return knex('staff').select('*');
      },
    },
  },
});
//mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addNewStaff: {
      type: StaffType,
      args: {
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        salary: { type: new GraphQLNonNull(GraphQLInt) },
        contract_length: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, args) {
        return knex('staff')
          .returning('*')
          .insert({
            first_name: args.first_name,
            last_name: args.last_name,
            salary: args.salary,
            contract_length: args.contract_length,
          })
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

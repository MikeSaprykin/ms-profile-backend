import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { descriptionMutations, descriptionQueries } from './description';
import { technologyMutations, technologyQueries } from './technology';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...descriptionQueries,
    ...technologyQueries,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...descriptionMutations,
    ...technologyMutations,
  },
});

export default new GraphQLSchema({
  query,
  mutation,
});

import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  // Use FakeQL's GraphQL API mocking as a service
  uri: 'https://fakeql.com/graphql/b392a1321ec1a1d6f3894a2f827b3064',
  fetch,
});

const client = new ApolloClient({
  cache,
  link,
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};

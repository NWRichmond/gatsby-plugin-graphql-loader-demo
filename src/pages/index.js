import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { UserInfo } from '../components/user-info';

const queryString = `query getUserComments($firstname: String!) {
  users(where: { firstname_eq: $firstname }) {
    firstname
    comments {
      text
    }
  }
}`;

const IndexPage = () => {
  const [user, setUser] = useState('Sophia');
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome</h1>
      <p>
        This page fetches fake blog post data from a GraphQL API on the client.
        A GraphQL query is loaded directly from a <code>.gql</code> file using{' '}
        <a
          href="https://github.com/NWRichmond/gatsby-plugin-graphql-loader"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-plugin-graphql-loader
        </a>{' '}
        and is then passed to Apollo Client.
      </p>
      <p>
        <a
          href="https://fireql.dev/?url=https://fakeql.com/graphql/b392a1321ec1a1d6f3894a2f827b3064"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>{' '}
        to explore the fake dataset (blog posts with authors and comments) and
        experiment with GraphQL queries.
      </p>
      <p>
        The query contained in the <code>.gql</code> file is as follows:
      </p>
      <pre style={{ maxWidth: `500px` }}>
        <code>{queryString}</code>
      </pre>
      <p>
        ...which is saved as a <code>.gql</code> file and imported into a React
        component which uses Apollo Client to query the GraphQL endpoint.
      </p>
      <h3>Select A User:</h3>
      <div style={{ margin: `1rem auto` }}>
        <select
          onChange={event => {
            setUser(event.target.value);
          }}
        >
          <option value="Sophia">Sophia</option>
          <option value="Hulda">Hulda</option>
          <option value="Lucy">Lucy</option>
          <option value="Brett">Brett</option>
        </select>
      </div>
      <h2>Query Result:</h2>
      <UserInfo firstname={user} />
    </Layout>
  );
};

export default IndexPage;

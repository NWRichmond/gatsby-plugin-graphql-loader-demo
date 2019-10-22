import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_USER_COMMENTS from '../queries/get-comments-by-first-name.gql';

const UserInfo = ({ firstname }) => {
  const { data, loading, error } = useQuery(GET_USER_COMMENTS, {
    variables: { firstname },
  });
  const user = !loading && !error ? data.users[0] : null;
  if (error) {
    console.log(`QUERY ERROR: ${error}`);
    return <p>Error Querying Data</p>;
  }
  return (
    error ||
    (!loading && (
      <div
        style={{
          backgroundColor: `#f0faff`,
          margin: `2rem auto`,
          padding: `1rem`,
          border: `1px solid black`,
        }}
      >
        <h3>First Name</h3>
        <p>{user.firstname}</p>
        <h3>Comments</h3>{' '}
        {user.comments.map(({ text }) => (
          <p key={text.slice(0, 30)}>{text}</p>
        ))}
      </div>
    ))
  );
};

export { UserInfo };

import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import GET_USER_COMMENTS from '../queries/get-comments-by-first-name.gql';

const UserComments = ({ comments }) => (
  <div
    style={{
      display: 'inline-block',
      height: '300px',
      overflow: 'auto',
    }}
  >
    <ul>
      {comments.map(({ text }) => (
        <li key={text.slice(0, 30)}>{text}</li>
      ))}
    </ul>
  </div>
);

UserComments.propTypes = {
  comments: PropTypes.array,
};

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
    <div
      style={{
        backgroundColor: `#f0faff`,
        margin: `2rem auto`,
        padding: `1rem`,
        border: `1px solid black`,
        height: `500px`,
      }}
    >
      <h4>First Name</h4>
      <p>{(!loading && user.firstname) || <br />}</p>
      <h4>Comments</h4>
      {!loading && <UserComments comments={user.comments} />}
    </div>
  );
};

UserInfo.propTypes = {
  firstname: PropTypes.string,
};

export { UserInfo };

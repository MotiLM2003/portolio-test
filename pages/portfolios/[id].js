import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/shared/layouts/Layout';
import axios from 'axios';

const PostDetails = ({ post }) => {
  // const { id } = props.params;

  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>BODY: {post.body}</p>
      <p>ID: {post.id}</p>
    </Layout>
  );
};

export default PostDetails;

PostDetails.getInitialProps = async ({ query }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );

  return { post: data };
};

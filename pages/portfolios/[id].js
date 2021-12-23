import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useGetPostsById } from '@/actions';
import Layout from '@/components/shared/layouts/Layout';

const PostDetails = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useGetPostsById(id);
  console.log(loading);
  return loading ? (
    <div>Loading</div>
  ) : (
    <Layout>
      {data && (
        <React.Fragment>
          <h1>{data.title}</h1>
          <p>BODY: {data.body}</p>
          <p>ID: {data.id}</p>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default PostDetails;

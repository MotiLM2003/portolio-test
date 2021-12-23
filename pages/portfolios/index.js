import React from 'react';
import axios from 'axios';

import Layout from '../../components/shared/layouts/Layout';
import Link from 'next/link';

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };

  return (
    <Layout>
      Portfolios page
      <div>
        <ul>{renderPosts()}</ul>
      </div>
    </Layout>
  );
};

export default Portfolios;

Portfolios.getInitialProps = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return { posts: data.slice(0, 10) };
};

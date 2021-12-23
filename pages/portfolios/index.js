import React, { useState, useEffect } from 'react';

import Layout from '@/components/shared/layouts/Layout';
import Link from 'next/link';
import { useGetPosts } from '@/actions';
const Portfolios = () => {
  const { data, loading, error } = useGetPosts();
  const posts = data?.posts;

  const renderPosts = () => {
    console.log(loading);
    if (loading) return <div>Loading...</div>;
    return (
      posts &&
      posts.map((post) => (
        <li key={post.id}>
          <Link href={`/portfolios/${post.id}`}>{post.title}</Link>
        </li>
      ))
    );
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

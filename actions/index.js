import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPosts = () => {
  return useSWR('/api/v1/posts', fetcher);
};

export const useGetPostsById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/posts/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, rest };
};

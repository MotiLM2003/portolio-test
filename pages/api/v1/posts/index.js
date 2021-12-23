import { data } from '@/data';
import axios from 'axios';

export const getPosts = async (req, res) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  res.status(200).json({ posts: data.splice(0, 10) });
};

export default getPosts;

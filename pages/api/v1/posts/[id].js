import { data } from '@/data';
import axios from 'axios';

export const getPost = async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
  );
  res.status(200).json(data);
};

export default getPost;

import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
};

export default usePosts;

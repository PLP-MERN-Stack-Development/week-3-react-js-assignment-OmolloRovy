import { useEffect, useState } from 'react';
import { getPosts } from '../api/apiService';

export const useApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(res => setData(res.slice(0, 5)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};

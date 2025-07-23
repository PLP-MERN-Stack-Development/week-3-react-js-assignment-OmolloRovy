export const getPosts = async () => {
  const res = await fetch('https://dev.to/api/articles?tag=mern');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

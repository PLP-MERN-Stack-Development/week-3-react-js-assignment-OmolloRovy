export const fetchPosts = async () => {
  const response = await fetch('https://dev.to/api/articles?tag=mern&per_page=10');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

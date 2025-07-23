import React, { useState } from "react";
import TaskManager from "./components/TaskManager";
import usePosts from "./hooks/usePosts";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';

function Home() {
  const { posts, loading, error } = usePosts();
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <Navbar />
      
      <h1 className="text-4xl font-bold mb-6 text-center">Task Manager + API Fetches</h1>
      
      <main className="flex-1 max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Counter</h2>
          <div className="flex items-center gap-4">
            <Button variant="danger" onClick={() => setCount(c => c - 1)}>-</Button>
            <span className="text-2xl font-bold">{count}</span>
            <Button variant="success" onClick={() => setCount(c => c + 1)}>+</Button>
          </div>
        </section>

        <TaskManager />

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">API Data</h2>
          {loading && <p>Loading posts...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-white dark:bg-gray-800 rounded shadow"
              >
                <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

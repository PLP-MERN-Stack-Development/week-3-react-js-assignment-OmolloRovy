import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

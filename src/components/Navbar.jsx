import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">PLP Task Manager</h1>

        <div className="flex items-center space-x-2">
          <Link to="/signin">
            <Button size="sm" variant="secondary">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" variant="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

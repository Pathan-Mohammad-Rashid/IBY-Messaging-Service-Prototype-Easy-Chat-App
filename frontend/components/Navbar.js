import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div>
        <Link href="/">Easy Chat</Link>
      </div>
      <div>
        <Link href="/chat">Chat</Link>
        <Link href="/login">Login</Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

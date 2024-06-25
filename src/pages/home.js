import React from 'react';
import './css/home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to My Home Page</h1>
        <p>This is the home page of my React application.</p>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is a simple React application demonstrating a home page.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Easy to use</li>
            <li>Component-based</li>
            <li>Fast and efficient</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
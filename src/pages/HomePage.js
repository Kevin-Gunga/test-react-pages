import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Home Page</h1>
      </header>
      <section>
        <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
          <h2>Section 1</h2>
          <p>This is the first section of the home page.</p>
        </div>
        <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
          <h2>Section 2</h2>
          <p>This is the second section of the home page.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

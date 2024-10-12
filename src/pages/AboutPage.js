import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <section>
        <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>
          <h2>Section A</h2>
          <p>This is the first section of the about page.</p>
        </div>
        <div style={{ backgroundColor: 'lightyellow', padding: '20px' }}>
          <h2>Section B</h2>
          <p>This is the second section of the about page.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

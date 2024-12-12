import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import './index.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="hero-container">
      <section className="hero">
        <div>
          <h1>Welcome to Our Landing Page</h1>
          <p>Your one-stop solution for amazing content and services.</p>
          <button className="button" onClick={toggleTheme}>
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </section>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            At our company, we pride ourselves on delivering high-quality solutions tailored to meet the specific needs of our clients. Whether you're looking for web development, app creation, or strategic digital marketing, we have the expertise and dedication to help your vision come to life. Our team is passionate about crafting innovative strategies that lead to measurable success.
          </p>
          <p>
            Since our inception, we have worked with businesses across various industries, providing custom solutions that drive growth and efficiency. We believe that our commitment to understanding your unique goals sets us apart, ensuring that every project we undertake is a true reflection of your brand and aspirations.
          </p>
          <Carousel />
        </section>

        <section>
          <h2>Our Services</h2>
          <p>
            Our services encompass a wide range of digital solutions designed to help your business thrive in an increasingly competitive landscape. From designing responsive websites to developing powerful mobile applications, we ensure that every product we deliver meets the highest standards of quality and functionality. With a deep understanding of the latest technologies, we create tools that engage your audience and enhance user experiences.
          </p>
          <p>
            Additionally, our expertise extends to digital marketing strategies that amplify your reach and impact. Whether through SEO, social media marketing, or targeted advertising campaigns, we help you connect with your audience in meaningful ways. Our goal is to provide a comprehensive suite of services that drive both immediate results and long-term growth.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <p>
            Choosing the right partner for your digital needs can be a daunting task, but we make the decision simple by focusing on what matters most: quality, efficiency, and customer satisfaction. Our team is made up of seasoned professionals who are dedicated to delivering results that exceed expectations. We approach every project with a clear plan, a commitment to deadlines, and a passion for excellence.
          </p>
          <p>
            Beyond our technical expertise, what truly sets us apart is our ability to listen. We take the time to understand your goals and challenges, ensuring that the solutions we deliver are perfectly aligned with your needs. When you choose us, you're not just hiring a service provider; you're gaining a trusted partner invested in your success.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

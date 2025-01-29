import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">TWiRE</div>
      <nav>
        <ul>
          <li><a href="#hero">Meet Twire</a></li>
          <li><a href="#about">Our Services</a></li>
          <li><a href="#about">Vacancies</a></li>
        </ul>
      </nav>
      <a href="#about" className="cta">Get in Touch</a>
    </header>
  );
};

export default Header;

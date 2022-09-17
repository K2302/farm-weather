import React from "react";

const Hero = () => {
  return (
    <div class="hero">
      <link rel="stylesheet" href="/styles/hero.css" />
      <nav class="navbar">
        <ul class="nav-list">
          <div class="logo">
            <h2 class="logo letters">Farm Weather</h2>
          </div>
          <li>
            <a href="#crops">Crops</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div class="right-nav">
          <div id="google_translate_element"></div>
        </div>
      </nav>

      <section class="weather">
        <h1 class="temp">18&#176;</h1>
        <div class="city-time">
          <h1 class="Silchar">Silchar</h1>
        </div>
        <span class="time">12:30</span>-<span class="date">Sunday Sep 19</span>
      </section>

      <div class="location_in">
        <form if="locationInput">
          <input type="text" class="search" placeholder="Location.." />
          <button type="submit" class="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      <ul class="cities">
        <li class="city">New Delhi</li>
        <li class="city">Mumbai</li>
        <li class="city">Chennai</li>
        <li class="city">Kolkata</li>
        <li class="city">Guwahati</li>
      </ul>

      <ul class="details">
        <h3>Details</h3>
        <li>
          <span>Cloudy</span>
          <span class="cloud">60%</span>
        </li>
        <li>
          <span>Humidity</span>
          <span class="humidity">70%</span>
        </li>
        <li>
          <span>Wind</span>
          <span class="wind">6km/h</span>
        </li>
      </ul>
    </div>
  );
};

export default Hero;

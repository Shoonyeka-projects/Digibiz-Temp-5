import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  // Function to toggle the navigation menu
  toggleNav = () => {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  };

  // Function to close the navigation menu
  closeNav = () => {
    document.getElementById("myNav").classList.remove("menu_width");
    document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style");
  };

  render() {
    return (
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container d-block">
            <div className="main_nav_menu">
              <div className="fk_width">
                <div className="custom_menu-btn">
                  <button onClick={this.toggleNav}>
                    <span className="s-1"> </span>
                    <span className="s-2"> </span>
                    <span className="s-3"> </span>
                  </button>
                </div>
                <div id="myNav" className="overlay">
                  <div className="overlay-content">
                    <Link to="/" onClick={this.closeNav}>Home</Link><span className="sr-only">(current)</span>
                    <Link to="/about" onClick={this.closeNav}>About</Link>
                    <Link to="/gallery" onClick={this.closeNav}>Gallery</Link>
                    <Link to="/blog" onClick={this.closeNav}>Blog</Link>
                    <Link to="/testimonial" onClick={this.closeNav}>Testimonial</Link>
                  </div>
                </div>
              </div>
              <Link to="/" className="navbar-brand">
                <span>
                  Picstudio
                </span>
              </Link>
              <div className="user_option">
                <a href="login">
                  login
                </a>
                <form className="form-inline" onSubmit={this.closeNav}>
                  <button className="btn nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

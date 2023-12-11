import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_2.json'; // Adjust the path accordingly

export default class Component_2 extends Component {
  render() {
    const { aboutSection } = data;

    return (
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    {aboutSection.title}
                  </h2>
                  <p>
                    {aboutSection.content}
                  </p>
                  <Link to={aboutSection.readMoreLink}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-box">
          <div className="play_btn">
            <Link to={aboutSection.playLink}>
              <img src={aboutSection.playImageSrc} alt="" />
            </Link>
          </div>
          <img src={aboutSection.aboutImageSrc} className="about-img" alt="" />
        </div>
      </section>
    );
  }
}

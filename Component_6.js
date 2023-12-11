import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_6.json';

export default class Component_6 extends Component {
  render() {
    const { contactSection } = data;

    return (
      <section className="info_section">
        <div className="info_container layout_padding-top">
          <div className="container">
            <div className="heading_container">
              <h2>{contactSection.title}</h2>
            </div>
            <div className="info_main">
              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <div className="info_contact">
                    {contactSection.links.map((link) => (
                      <Link key={link.to} to={link.to} className="link-box">
                        <div className="img-box">
                          <img src={link.imageSrc} alt="" />
                        </div>
                        <div className="detail-box">
                          <h6>{link.text}</h6>
                          <p>{link.detail}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-md-2 col-lg-3">
                  <div className="info_link-box">
                    <ul>
                      {contactSection.navigationLinks.map((navLink) => (
                        <li key={navLink.to}>
                          <Link to={navLink.to} className={navLink.isCurrent ? "active" : ""}>
                            {navLink.text} <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="social_box">
                    {contactSection.socialLinks.map((socialLink) => (
                      <a key={socialLink.url} href={socialLink.url}>
                        <img src={socialLink.imageSrc} alt={socialLink.alt} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

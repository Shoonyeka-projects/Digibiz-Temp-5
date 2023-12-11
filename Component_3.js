import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_3.json'; // Adjust the path accordingly

export default class Component_3 extends Component {
  render() {
    const { gallerySection } = data;

    return (
      <section className="gallery_section layout_padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ml-auto">
              <div className="heading_container">
                <h2>
                  {gallerySection.title}
                </h2>
                <p>
                  {gallerySection.content}
                </p>
                <Link to={gallerySection.seeMoreLink}>
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_container">
          <div className="gallery_bg">
            <img src={gallerySection.galleryBgSrc} alt="" />
          </div>
          <div className="container">
            <div className="gallery_box">
              {gallerySection.galleryItems.map((item, index) => (
                <div key={index} className={`box b${index + 1}`}>
                  <div className="img-box">
                    <img src={item.imageSrc} alt="" />
                    <h5>
                      {item.category}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

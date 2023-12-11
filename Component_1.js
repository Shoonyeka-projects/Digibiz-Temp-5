import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_1.json';

class Component_1 extends Component {
  render() {
    const { carouselItems } = data;
    return (
      <section className="slider_section position-relative">
        <div className="container-fluid">
          <div className="row slider-row">
            <div className="col-lg-3 offset-lg-1">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-inner">
                  {carouselItems.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="detail-box">
                        <h1>
                          {item.title}
                        </h1>
                        <p>
                          {item.content}
                        </p>
                        <div>
                          <Link to="/request-quote">
                            {item.linkText}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                  <div className="carousel-item">
                    <div className="detail-box">
                      <h1>
                        Pic <br />
                        Studio
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                      </p>
                      <div>
                        <Link to="/request-quote">
                          Request A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_control-box">
                  <div className="carousel_btn-container">
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active li_one">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="li_two">02</li>
                    <li className="ol_design"></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-8 px-0">
              <div className="img-box">
                <img src="images/slider-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Component_1;

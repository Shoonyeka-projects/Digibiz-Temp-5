import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_5.json';

export default class Component_5 extends Component {
  render() {
    const { clientSection } = data;

    return (
      <section className="client_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ml-auto">
              <div className="heading_container">
                <h2>{clientSection.title}</h2>
                <p>{clientSection.content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="client_container">
          <div className="client_bg">
            <img src={clientSection.bgImageSrc} alt="" />
          </div>
          <div className="container">
            <div className="client_box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="box b1">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        {clientSection.clients.map((client, index) => (
                          <div key={client.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="client_content-box layout_padding">
                              <div className="img-box">
                                <img src={client.imageSrc} alt="" />
                              </div>
                              <div className="detail-box">
                                <h4>{client.name}</h4>
                                <p>{client.testimonial}</p>
                                <img src="images/quote.png" alt="" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box b2">
                    <div className="camera_img-box">
                      <img src="images/camera.png" alt="" />
                    </div>
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

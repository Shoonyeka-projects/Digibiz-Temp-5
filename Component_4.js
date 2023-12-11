import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../json/Comp_4.json'; // Adjust the path accordingly

export default class Component_4 extends Component {
  render() {
    const { blogSection } = data;

    return (
      <section className="blog_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    {blogSection.title}
                  </h2>
                  <p>
                    {blogSection.content}
                  </p>
                  <Link to={blogSection.readMoreLink}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_container">
          <div className="blog_bg">
            <img src={blogSection.blogBgSrc} alt="" />
          </div>
          <div className="container">
            <div className="blog_box">
              <div className="row">
                {blogSection.blogItems.map((item) => (
                  <div key={item.id} className={`col-md-6`}>
                    <div className={`box ${item.id}`}>
                      <div className="img-box">
                        <img src={item.imageSrc} alt="" />
                      </div>
                      <div className="blog-detail">
                        <div className="blog_title">
                          <h5>
                            {item.title}
                          </h5>
                          <div className="blog_post">
                            <h6>
                              Post By: {item.postBy}
                            </h6>
                            <h6>
                              {item.postDate}
                            </h6>
                          </div>
                        </div>
                        <p>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

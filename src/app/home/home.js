import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export class Home extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          controls={false}
          indicators={false}
          >
          <Carousel.Item>
            <img alt="" src="../app/assets/image/banner-background.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="" src="../app/assets/image/banner-background.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="" src="../app/assets/image/banner-background.jpg"/>
          </Carousel.Item>
        </Carousel>
        <div className="logo-banner">
          <img src="../app/assets/image/logo-banner.svg" alt=""/>
        </div>
      </div>
    );
  }
}

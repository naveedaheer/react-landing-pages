import React, { Component } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';

import SuccessStories1 from './Assets/successStories1.jpg'
import SuccessStoriess2 from './Assets/successStories2.jpg'

import './successStories.css';


class Successstories extends Component {
    render() {
        return (
            <div className="success-stories-area" >
                <Container className="success-stories-area-container text-left">
                    <Col>
                        <Col>
                            <p className="fontColorBlack thin-long-text d-flex align-items-center">Sucess Stories <div className="hor-sm-saparater d-flex justify-content-center align-items-center"></div><br /></p>
                            <p className="success-review-text">What They Say About Us</p>
                        </Col>
                        <Row className="d-flex justify-content-spacebetween success-stories-show-area">
                            <Col className="success-story-column d-flex align-items-center">
                                <Image className="success-story-img" src={SuccessStories1} roundedCircle/>
                                <div className="successor-text">
                                    <p className="successor-text-heading">I believe I can fly!</p>
                                    <p className="successor-text-desc">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                                    <p className="successor-text-name">Dimitri Rogers</p>
                                </div>
                            </Col>
                            <Col className="success-story-column d-flex align-items-center">
                                <Image className="success-story-img" src={SuccessStoriess2} roundedCircle />
                                <div className="successor-text">
                                    <p className="successor-text-heading">I believe I can fly!</p>
                                    <p className="successor-text-desc">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                                    <p className="successor-text-name">Dimitri Rogers</p>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Successstories;

import React, { Component } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';

import Businessman from './Assets/author.png'

import './aboutAuthor.css';


class Aboutauthor extends Component {
    render() {
        return (
            <div className="about-author-area">
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="d-flex justify-content-center align-items-center about-author-group">
                        <Col>
                            <Image className="author-img" src={Businessman} />
                        </Col>
                        <Col className="text-left video-course-area">
                            <p className="fontColorBlack thin-long-text d-flex align-items-center">Video Course <div className="hor-sm-saparater d-flex justify-content-center align-items-center"></div><br /></p>
                            <p className="author-name">The Basics of Video Editing></p>
                            <p className="fontColorBlack authors-info-text">Few words about the author</p>
                            <p className="fontColorBlack authors-info-text">A supporting statement for your value preparation to encourage customer to encourage your CTA</p>

                            <p className="fontColorBlack authors-info-text yellow-text-box">A supporting statement for your value preparation to encourage customer to encourage your CTA</p>
                            <p className="fontColorBlack authors-info-text">A supporting statement for your value preparation to encourage customer to encourage your CTA</p>
                            <p className="fontColorBlack authors-info-text">Add a description of your offer!</p>
                            <div className="">

                                <Button variant="danger" size="md"> Download Course </Button>
                                <button type="button" className="btn btn-outline-dark read-more-btn">READ MORE</button>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Aboutauthor;

import React, { Component } from 'react';
import { Container, Col, Button, Row, CardDeck, Card } from 'react-bootstrap';
import './aboutCourse.css';

import Avatar from './Assets/avatar.png'
import Barchart1 from './Assets/barChart1.jpg'
import Barchart2 from './Assets/barchart3.jpg'

class Aboutcourse extends Component {

    render() {
        return (
            <div className="about-course-area">
                <Container className="about-course-area-container text-left">
                    <Col>
                        <Row>
                            <p className="thin-long-text d-flex align-items-center">About Course<div className="hor-sm-saparater d-flex justify-content-center align-items-center"></div></p>
                        </Row>
                        <Row>
                            <p className="biggest-text ">Clear Value for your Customer</p>
                        </Row>
                        <Row className="mt-10">
                            <p className="mt-10 course-facination-text">How will your product change your customer's life. <br />
                                How will your product change your customer's life How will your product change your customer's life
                                How will your product change your customer's life How will your product change your customer's life
                                How will your product change your customer's life How will your product change your customer's life
                                How will your product change your customer's lifeHow will your product change your customer's life </p>

                        </Row>
                        <Row className="course-benefit-area">
                            <CardDeck className="course-benefit-desc-area">
                                <Card>
                                    <Card.Img variant="top" src={Barchart1} />
                                    <Card.Body>
                                        <Card.Title>Benefit No.1</Card.Title>
                                        <Card.Text className="benefits-desc">
                                            Add a description of your offer and key benefits how it can attract customers    
                                        </Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Barchart1} />
                                    <Card.Body>
                                        <Card.Title>Benefit No.2</Card.Title>
                                        <Card.Text className="benefits-desc">
                                        Add a description of your offer and key benefits how it can attract customers
                                        </Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Barchart1} />
                                    <Card.Body>
                                        <Card.Title>Benefit No.3</Card.Title>
                                        <Card.Text className="benefits-desc">
                                        Add a description of your offer and key benefits how it can attract customers</Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                            </CardDeck>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Aboutcourse;

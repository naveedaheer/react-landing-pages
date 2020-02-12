import React, { Component } from 'react';
import { Container, Col,Row , Button } from 'react-bootstrap';
import YouTube from 'react-youtube';

import './App.css';
import './Header.css'


class Header extends Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '260',
            width: '100%',
            playerVars: { 
                autoplay: 1
            }
        };
        return (
            <div className="header-img d-flex">
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="d-flex justify-content-center align-items-center header-elements">
                        <Col>
                            <YouTube
                                videoId="sX1Y2JMK6g8"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </Col>
                        <Col className="text-left video-course-area">
                            <p className="fontColorWhite thin-long-text d-flex align-items-center">Video Course <div className="hor-sm-saparater d-flex justify-content-center align-items-center"></div></p>
                            <p className="fontColorWhite biggest-text">The Basics of Video Editing</p>
                            <p className="fontColorWhite">A supporting statement for your value preparation to encourage customer to encourage your CTA</p>
                            <p className="fontColorWhite super-price-text d-flex align-items-baseline">Super price <span className="course-price">$19.99</span></p>
                            <Button variant="danger" size="lg"> Download Course </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;

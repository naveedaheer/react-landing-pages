import React, { Component } from 'react';
import { Container, Col, Button, Row, CardDeck, Card } from 'react-bootstrap';

import './informationStatistics.css';


class informationStatistics extends Component {
    render() {
        return (
            <div className="information-statistics d-flex justify-content-center align-items-center text-left">
                <Container className="fontColorWhite">
                    <Row className="d-flex justify-content-center align-items-center text-left">
                        <Col className="d-flex col justify-content-center align-items-center">
                            <p className="info-statistics-number">15</p>
                            <div className="vertical-separator"></div>
                            <p className="statistics-info-text">Professional<br /> Teachers</p>
                        </Col>
                        <Col className="d-flex col justify-content-center align-items-center">
                            <p className="info-statistics-number">06</p>
                            <div className="vertical-separator"></div>
                            <p className="statistics-info-text">Delivered<br /> Projects</p>
                        </Col>
                        <Col className="d-flex col justify-content-center align-items-center">
                            <p className="info-statistics-number">55</p>
                            <div className="vertical-separator"></div>
                            <p className="statistics-info-text">Professional<br /> Teachers</p>
                        </Col>
                        <Col className="d-flex col justify-content-center align-items-center">
                            <p className="info-statistics-number">55</p>
                            <div className="vertical-separator"></div>
                            <p className="statistics-info-text">Delivered<br /> Projects</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default informationStatistics;

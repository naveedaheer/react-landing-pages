import React, { Component } from 'react';
import { Container, Col, Row, Button, Image, Form } from 'react-bootstrap';

import './subscribeArea.css';

class Subscribearea extends Component {
    render() {
        return (
            <div className="subscribe-area" >
                <Container className="subscribe-area-container">
                    <Row className="subscribe-area-elements">
                        <Col>
                            <p className="fontColorBlack Subscribe-email-text">Subscribe Email<br /><span className="subscribe-desc-text">Subscribe to get further notifications and much more</span></p>
                        </Col>
                        <Col className="d-flex flex-nowrap subscribe-area-form">
                            <Row className="d-flex flex-nowrap subscribe-area-form">
                                <Form.Control type="email" sm="10"/>
                                <Button variant="danger" size="md" style={{marginLeft:10}}> Subscribe </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Subscribearea;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
import { InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

export default function KmpSettings(props) {
    /**
     * 
     * props.inputStr, props.setInputStr
     * props.searchStr, props.setSearchStr
     * props.animationDelay, props.setAnimationDelay
     * 
     */

    return (
            <Row>
                <Col md={4} lg={4} xs={12}>
                    <InputGroup className="sm-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Input String</InputGroup.Text>
                        </InputGroup.Prepend>
                        
                        <FormControl
                            aria-label="txt-str"
                            aria-describedby="inputGroup-sizing-default"
                            value={props.inputStr}
                            onChange={(e) => props.setInputStr(e.target.value)}
                            disabled={props.running}
                        />
                    </InputGroup>
                </Col>
                <Col md={3} lg={3} xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Search String</InputGroup.Text>
                        </InputGroup.Prepend>
                        
                        <FormControl
                            aria-label="txt-str"
                            aria-describedby="inputGroup-sizing-default"
                            value={props.searchStr}
                            onChange={(e) => props.setSearchStr(e.target.value)}
                            disabled={props.running}
                        />
                    </InputGroup>
                </Col>
                <Col md={3} lg={3} xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Speed</InputGroup.Text>
                        </InputGroup.Prepend>
                        <div className="range-slider">
                            <RangeSlider
                                value={3000 - props.animationDelay}
                                onChange={(e) => props.setAnimationDelay(3000 - e.target.value)}
                                step={100}
                                max={3000}
                                min={0}
                                disabled={props.running} 
                                size="sm"
                            />             
                        </div>
                    </InputGroup>
                </Col>
                <Col md={1}>
                    <Button onClick={props.onStart} disabled={props.running}>Search</Button>
                </Col>
                
            </Row>
    )
}


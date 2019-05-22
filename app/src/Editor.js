import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap'
import { DateTime } from 'react-datetime-bootstrap'

class Editor extends Component {
    state = {
        rooms: [],
        quantities: 0
    }

    roomSelected(e) {
        let selectedRoom = {}
        this.state.rooms.map((room) => {
            if (room._id === e.target.value) {
                selectedRoom = room
            }
        })

        this.setState({quantities: selectedRoom.quantities})

        console.log(selectedRoom)
    }

    componentDidMount() {
        let url = 'http://localhost:3001/api/rooms';
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({rooms: data.data})
                console.log(this.state.rooms)
            })
    }

    render() {
        return (
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card>
                                <Card.Header>Bulk Editor</Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Room</Form.Label>
                                            <Form.Control
                                            onChange={this.roomSelected.bind(this)} as="select">
                                                <option value="">Select Room</option>
                                                {this.state.rooms.map((room) => {
                                                    return <option value={room._id}>{room.name}</option>
                                                })}
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>From</Form.Label>
                                                <DateTime pickerOptions={{ format: "D/M/YYYY" }} />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Label>To</Form.Label>
                                                <DateTime pickerOptions={{ format: "D/M/YYYY" }} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Quantities</Form.Label>
                                                <Form.Control type="text" value={this.state.quantities} />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Label>Price</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>RM</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control aria-label="Amount (to the nearest dollar)" value="0" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Editor

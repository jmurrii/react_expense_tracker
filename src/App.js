import React from 'react';
import { Container, Row, Col, Button, Form, } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

      <Container className="main-container">
        <h1 className="main-heading mt-3 mb-5">React Expense Tracker</h1>

        <Container>
          <Form>

            <Row>
              <Col>
                <Form.Group controlId='formSelectField'>
                  <Form.Label>Type:</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Choose payment method</option>
                    <option value="card">Card</option>
                    <option value="cash">Cash</option>
                    <option value="cryptocoin">Cryptocoin</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formNameField'>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="What did you purchase?"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId='formDateField'>
                  <Form.Label className="label">Date:</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId='formAmountField'>
                  <Form.Label>Amount:</Form.Label>
                  <Form.Control type="number" min="0"
                    step="0.01"></Form.Control>
                </Form.Group>
              </Col>
            </Row>


            <Form.Group className="btn-container">
              <Button className='mt-5 btn-success'>Add A New Expense!</Button>
            </Form.Group>
          </Form>
        </Container>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Type</th>
                <th colspan="">Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="table-body">
              <tr>
                <td id="placeholder-row" colspan="5">
                  Your Items Will Be Added Here!
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </ Container >
    </div>
  );
}

export default App;

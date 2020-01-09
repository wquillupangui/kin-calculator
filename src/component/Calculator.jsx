import React, { Component } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals
} from "@fortawesome/free-solid-svg-icons";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: null,
      valueB: null,
      valueResult: null,
      operOpt: null
    };
  }

  toggleDanger = () => {
    this.setState({
      errorMess: null
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(this.state.operOpt);
    try {
      if (this.state.operOpt === 0) {
        this.setState({
          valueResult: Number(this.state.valueA) + Number(this.state.valueB)
        });
      } else if (this.state.operOpt === 1) {
        this.setState({
          valueResult: Number(this.state.valueA) - Number(this.state.valueB)
        });
      } else if (this.state.operOpt === 2) {
        this.setState({
          valueResult: Number(this.state.valueA) * Number(this.state.valueB)
        });
      } else if (this.state.operOpt === 3) {
        this.setState({
          valueResult: Number(this.state.valueA) / Number(this.state.valueB)
        });
      } else {
        this.setState({ errorMess: "Error on Calculator select operation" });
      }
    } catch (e) {
      this.setState({ errorMess: "Error on Calculator" });
    }
  };
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <strong>Calculator</strong>
          </CardHeader>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md="2">
                  <Input
                    value={this.state.valueA}
                    onChange={evt => {
                      if (!isNaN(evt.target.value)) {
                        this.setState({
                          valueA: evt.target.value
                        });
                      }
                    }}
                    required
                  ></Input>
                </Col>
                <Col>
                  <Row>
                    <Col md="3">
                      <Button
                        block
                        color="primary"
                        outline
                        onClick={() => this.setState({ operOpt: 0 })}
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                      </Button>
                    </Col>
                    <Col md="3">
                      <Button
                        block
                        color="primary"
                        outline
                        onClick={() => this.setState({ operOpt: 1 })}
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faMinus} size="2x" />
                      </Button>
                    </Col>
                    <Col md="3">
                      <Button
                        block
                        color="primary"
                        outline
                        onClick={() => this.setState({ operOpt: 2 })}
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                      </Button>
                    </Col>
                    <Col md="3">
                      <Button
                        block
                        color="primary"
                        outline
                        onClick={() => this.setState({ operOpt: 3 })}
                        type="submit"
                      >
                        <FontAwesomeIcon icon={faDivide} size="2x" />
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col md="2">
                  <Input
                    value={this.state.valueB}
                    onChange={evt => {
                      if (!isNaN(evt.target.value)) {
                        this.setState({
                          valueB: evt.target.value
                        });
                      }
                    }}
                    required
                  ></Input>
                </Col>
                <Col md="1">
                  <Button
                    block
                    color="primary"
                    outline
                    md={3}
                    type="submit"
                    disabled
                  >
                    <FontAwesomeIcon icon={faEquals} size="2x" />
                  </Button>
                </Col>
                <Col md="2">
                  <Alert color="success">{this.state.valueResult}</Alert>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Modal
          isOpen={this.state.errorMess}
          toggle={this.toggleDanger}
          className={"modal-danger " + this.props.className}
        >
          <ModalHeader toggle={this.toggleDanger}>Error</ModalHeader>
          <ModalBody>{this.state.errorMess}</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggleDanger}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Calculator;

import React, { Component } from 'react';
import { ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

class CardsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState({ show: true })
  }

  render() {
    const { details, modalState } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Modal isOpen={show ? !show : modalState} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{details.name} appears in {details.comics.available} Comics</ModalHeader>
          <ModalBody>
            {details.description}
          </ModalBody>
          <ModalBody className="imageModal">
            <img src={details.thumbnail.path + '.' + details.thumbnail.extension} alt="hero" />
          </ModalBody>
          <ModalFooter>
            {
              details.comics.items
              .filter(el => details.comics.items.indexOf(el) <= 2)
              .map((el, index) => 
                <ul key={index}>
                  <li>{index+1} {el.name}</li>
                </ul>)
            }
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

CardsInfo.propTypes = {
  modalState: PropTypes.bool,
  details: PropTypes.object
}

export default CardsInfo;
import React, { Component } from 'react';
import CardsInfo from './CardsInfo';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false
    }
  }

  handleClick = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal })
  }

  render() {
    const { characters } = this.props;
    const { isOpenModal } = this.state;
    return (
      <div>
        <Card className="cardClass d-flex justify-content-around">
          <CardImg className="cardImage" src={characters.thumbnail.path + '.' + characters.thumbnail.extension} alt="Card image cap" />
          <CardBody className="text-center">
            <CardTitle><Button onClick={() => this.handleClick()}>{characters.name}</Button></CardTitle>
          </CardBody>
        </Card>
        {
          isOpenModal ?
          <CardsInfo modalState={isOpenModal} details={characters} />
          :
          null
        }
      </div >
    );
  };
}


Cards.propTypes = {
  characters: PropTypes.array,
}

export default Cards;
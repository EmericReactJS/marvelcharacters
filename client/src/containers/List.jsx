import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Row, Col } from "reactstrap";
import Cards from "./Cards";
import { fetchingInitial } from "../actions/actions";
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.fetchChar();
  }

  async fetchChar() {
    const { fetching } = this.props;
    let res = await axios.get("api");
    let fetchedList = [res.data.results];
    fetching(fetchedList);
  };

  displayCardsResults(arrayOrigin) {
    const { twentyChar } = this.props;
    const currentTwenty = arrayOrigin.slice(twentyChar.indexA, twentyChar.indexB);
    return (
      <Row className="fullList">
        {currentTwenty.map(item => (
          <Col xs="3" md="3" key={item.id}>
            <Cards characters={item} />
          </Col>
        ))}
      </Row>
    );
  };

  render() {
    const { arrayOrigin } = this.props;
    return <div>{this.displayCardsResults(arrayOrigin)}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetching: array => dispatch(fetchingInitial(array))
});

const mapStateToProps = state => ({
  twentyChar: state.pagination,
  arrayOrigin: state.fetchOrigin
});

List.propTypes = {
  fetching: PropTypes.func,
  arrayOrigin: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

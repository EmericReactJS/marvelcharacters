import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, NavLink, Button } from "reactstrap";
import { nextPage, previousPage } from "../actions/actions";

class MainBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { twentyChar, previousTwenty, nextTwenty} = this.props;
    console.log(twentyChar)
    return (
      <div>
        <Navbar className="container-fluid">
          <Nav className="navMain d-flex justify-content-around mx-auto">
            <NavItem>
              <Button size="sm" onClick={() => previousTwenty({a: twentyChar.indexA - 20, b: twentyChar.indexB - 20})}>
                Previous
              </Button>
            </NavItem>
            <NavItem>
              <NavLink>Favs</NavLink>
            </NavItem>
            <NavItem>
              <Button size="sm" onClick={() => nextTwenty({a: twentyChar.indexA + 20, b: twentyChar.indexB + 20})}>
                Next
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  nextTwenty: indexNext => dispatch(nextPage(indexNext)),
  previousTwenty: indexPrevious => dispatch(previousPage(indexPrevious))
});

const mapStateToProps = state => ({
  twentyChar: state.pagination
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBar);

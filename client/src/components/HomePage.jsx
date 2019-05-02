import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MainBar from "../containers/MainBar";
import List from "../containers/List";

const HomePage = () => {
  return (
    <div>
      <Navbar className="homepageNav container-fluid">
        <NavbarBrand className="homepageBrand w-50 mx-auto text-center">
          Marvel Characters
        </NavbarBrand>
      </Navbar>
      <MainBar />
      <List />
    </div>
  );
};

export default HomePage;

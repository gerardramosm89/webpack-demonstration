import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeSVG from '../../svgs/HomeSVG';

class NavbarSidebar extends Component {
  render() {
    return (
      <div className="navSidebar">
        <h2>this is the navbar</h2>
        <Link className="sideBarItem" to="/">
          <h2>Project Home</h2>
        </Link>
        <Link className="sideBarItem" to="/projecthome">
          <h2>Data</h2>
        </Link>
      </div>
    )
  }
}

export default connect()(NavbarSidebar);
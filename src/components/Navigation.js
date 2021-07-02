import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <h4 className="h4 ml-3 text-white">
          {this.props.titulo}
          <span className="badge badge-pill badge-light ml-2">
            {this.props.total}
          </span>
        </h4>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from "react";

class Card extends Component {
  constructor(params) {
    super();
  }

  render() {
    return (
      <div className="col-md-4 mt-4">
        <div className="card">
          <div className="card-header">
            <h3>{this.props.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {this.props.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{this.props.description}</p>
            <p>
              <mark className="px-3 badge-pill">{this.props.responsible}</mark>
            </p>
          </div>
          <div
            className="card-footer"
            onClick={this.removeTask.bind(this, this.props.index)}
          >
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";

class Card extends Component {
  constructor(params) {
    super();
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(e) {
    this.props.onRemoveTask(this.props.index);
  }

  render() {
    let priorityColor = "badge-danger";
    if (this.props.priority === "low") {
      priorityColor = "badge-success";
    } else if (this.props.priority === "medium") {
      priorityColor = "badge-warning";
    }
    return (
      <div className="col-md-4 mt-4">
        <div className="card">
          <div className="card-header">
            <h3>{this.props.title}</h3>
            <span className={"badge badge-pill ml-2 " + priorityColor}>
              {this.props.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{this.props.description}</p>
            <p>
              <mark className="px-3 badge-pill">{this.props.responsible}</mark>
            </p>
          </div>
          <div className="card-footer" onClick={this.removeTask}>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

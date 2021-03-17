import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class User extends Component {
  render () {
    let {name, email, id} = this.props.user;

    return <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{ email }</p>
      </div>
      <div className="card-footer">
        <Link to={`/users/${id}`} className="btn btn-primary">Détails</Link>
        <Link to={`/users/${id}/modifier`} className="btn btn-warning">Modifier</Link>
      </div>
    </div>
  }
}
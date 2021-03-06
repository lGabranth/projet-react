import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Post extends Component {
  render () {
    let {title, body, id, user} = this.props.post;

    return <div className="card">
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{ title }</h5>
        <p className="card-text">{ body }</p>
        <p className="card-text"><b>Ecrit par : { user && user.name }</b></p>
        <Link to={`/articles/${id}`} className="btn btn-primary">Détails</Link>
        <Link to={`/articles/${id}/modifier`} className="btn btn-warning">Modifier</Link>
      </div>
    </div>
  }
}
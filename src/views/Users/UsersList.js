import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserService from "../../services/user.service";
import User from "../../components/User";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let users = await UserService.list();
    this.setState({users});
  }

  render() {
    let {users} = this.state;

    return <div className="container">
      <h1>Liste des utilisateurs</h1>

      <Link className="btn btn-sm btn-primary" to="/users/ajouter">Ajouter un utilisateur</Link>

      <div className="row">
        {users.map((user, index)=> {
          return <div className="col-md-4" key={index}>
            <User user={user} />
          </div>
        })}
      </div>
    </div>
  }
}
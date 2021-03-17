import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {name, email} = this.state;
    await UserService.create({name, email});
    this.props.history.push('/users');
  }

  render() {
    return <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Veuillez ajouter un utilisateur</h1>

          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Nom et prénom</label>
              <input type="text" name="name" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label>Adresse email</label>
              <textarea name="email" rows="5" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <button className="btn btn-primary btn-sm mt-4" type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  }
}
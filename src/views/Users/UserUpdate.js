import React, {Component} from "react";
import UserService from "../../services/user.service";

export default class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      user: null
    }
  }

  async componentDidMount() {
    let {id} = this.props.match.params;
    let response = await UserService.details(id);
    this.setState({user: response.data, name: response.data.name, email: response.data.email});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {name, email} = this.state;
    await UserService.update(this.state.user.id, {name, email});
    this.props.history.push('/users');
  }

  render() {
    let {email, name, user} = this.state;
    return <div className="container text-center">
      <h1>Modifier l'utilisateur : { user && user.name }</h1>

      <div className="row">
        <div className="col">
          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Nom</label>
              <input value={name} type="text" name="name" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label>Email</label>
              <input value={email} type="text" name="email" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <button className="btn btn-primary btn-sm mt-4" type="submit">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  }
}
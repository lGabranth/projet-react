import React, {Component} from "react";
import PostService from "../../services/post.service";

export default class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {title, body} = this.state;
    await PostService.create({title, body, userId: 1});
    this.props.history.push('/articles');
  }

  render() {
    return <div className="container text-center">
      <h1>Veuillez ajouter votre article</h1>

      <div className="row">
        <div className="col">
          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Titre</label>
              <input type="text" name="title" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label>Contenu</label>
              <textarea name="body" rows="5" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <button className="btn btn-primary btn-sm mt-4" type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  }
}
import React, {Component} from "react";
import PostService from "../../services/post.service";

export default class PostUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      post: null
    }
  }

  async componentDidMount() {
    let {id} = this.props.match.params;
    let response = await PostService.details(id);
    this.setState({post: response.data, body: response.data.body, title: response.data.title});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    let {title, body, post} = this.state;
    let obj_tmp = post;
    obj_tmp.title = title;
    obj_tmp.body = body;

    await PostService.update(obj_tmp);
    this.props.history.push('/articles');
  }

  render() {
    let {title, body, post} = this.state;
    return <div className="container text-center">
      <h1>Modifier votre article - { post && post.title }</h1>

      <div className="row">
        <div className="col">
          <form className="mt-4" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Titre</label>
              <input value={title} type="text" name="title" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <div className="form-group mt-3">
              <label>Contenu</label>
              <textarea value={body} name="body" rows="5" className="form-control" required onChange={e => this.handleChange(e)}/>
            </div>

            <button className="btn btn-primary btn-sm mt-4" type="submit">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  }
}
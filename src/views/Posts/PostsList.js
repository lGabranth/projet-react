import React, {Component} from "react";
import PostService from "../../services/post.service";
import Post from "../../components/Post";
import {Link} from "react-router-dom";

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let posts = await PostService.list();
    this.setState({posts});
  }

  render() {
    let {posts} = this.state;

    return <div className="container">
      <h1>Liste des articles</h1>

      <Link className="btn btn-sm btn-primary" to="/articles/ajouter">Ajouter un article</Link>

      <div className="row">
        {posts.map((post, index)=> {
          return <div className="col-md-4" key={index}>
            <Post post={post} />
          </div>
        })}
      </div>
    </div>
  }
}
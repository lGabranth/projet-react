import React, {Component} from "react";
import Post from "../components/Post";
import PostService from "../services/post.service";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    let posts = await PostService.list(3);
    if(posts) this.setState({posts});
  }

  render() {
    let {posts} = this.state;

    return <div className="container">
      <h1 className="jumbotron">Homepage</h1>

      <div className="row">
        <div className="col">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores eos ex harum laboriosam molestiae quas sint totam ullam veniam voluptate, voluptates! A alias aliquam animi autem corporis cumque dolores, eaque earum eos excepturi illum itaque iure minus nam natus nemo, nisi nobis numquam porro quasi qui quis quisquam quo, repellat repudiandae rerum temporibus. Accusantium alias ducimus ipsam libero magni quod, repellendus similique sit voluptas! Consequatur ducimus est maiores provident quo veritatis. Aliquam assumenda, consequuntur cumque eos ex exercitationem, facere harum inventore sapiente tenetur unde veritatis. Corporis, eligendi excepturi explicabo iure officiis placeat quis suscipit. Ab accusantium autem commodi consequuntur dolorum ea esse laudantium, libero mollitia natus nemo nostrum obcaecati odio quasi, quia, sequi vitae! Architecto commodi consequatur cum deserunt distinctio dolorem dolorum ducimus est fugit incidunt ipsam laborum nulla odio porro, quae quasi recusandae repudiandae similique, soluta temporibus. Debitis dolor ducimus est explicabo in odio officiis qui tempora. Eos?</p>

          <div className="row">
            {posts.length === 0 && <div className="alert alert-info">Aucun post pour le moment..</div>}
            {
              posts.length > 0 && posts.map((post, index) => {
              return <div className="col-3" key={index}>
                <Post post={post} />
              </div>
            })
            }
          </div>
        </div>
      </div>
    </div>
  }
}
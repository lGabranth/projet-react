import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com"

export default class UserService {
  static async list(limit = null) {
    let call = await axios.get(`${baseUrl}/users`);
    let users = limit !== null ? call.data.slice(0, limit) : call.data;
    let posts = await axios.get(`${baseUrl}/posts`);

    for(let user of users) {
      let nbPost = 0;
      for(let post of posts.data) if(user.id === post.userId) nbPost++;
      user.nbPosts = nbPost;
    }

    return users;
  }

  static async create(data) {
    return await axios.post(`${baseUrl}/users`, data);
  }

  static async details(id) {
    return await axios.get(`${baseUrl}/users/${id}`);
  }

  static async update(id, data) {
    return await axios.put(`${baseUrl}/users/${id}`, data);
  }

  static async delete(id) {
    return await axios.delete(`${baseUrl}/users/${id}`);
  }
}
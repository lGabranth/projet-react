import axios from "axios";
import UserService from "./user.service";

const baseUrl = "https://jsonplaceholder.typicode.com"

export default class PostService {
  static async list(limit = null) {
    let call = await axios.get(`${baseUrl}/posts`);
    let posts = limit !== null ? call.data.slice(0, limit) : call.data;
    let users = await UserService.list();

    return posts.map(post => {
      post.user = users.find(user => user.id === post.userId);
      return post;
    });
  }

  static async create(data) {
    return await axios.post(`${baseUrl}/posts`, data);
  }

  static async details(id) {
    return await axios.get(`${baseUrl}/posts/${id}`);
  }

  static async update(data) {
    let {id} = data;
    return await axios.put(`${baseUrl}/posts/${id}`, data);
  }

  static async delete(id) {
    return await axios.delete(`${baseUrl}/posts/${id}`);
  }
}
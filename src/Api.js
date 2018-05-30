import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default {
  getPosts() {
    return axios.get("/posts");
  },

  getPost(id) {
    return axios.get("/posts/" + id);
  },

  getPhotos() {
    return axios.get("/photos");
  }
};

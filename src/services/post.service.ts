import axios from "axios";
import {IPost} from "../interfaces/post.interface";

export const PostService = {
  async getAll() {
    const {data} = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/photos");
    return data;
  },
  async getById(id: string) {
    const {data} = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/photos/", {
      params: {
        id,
      },
    });
    return data[0];
  },
};

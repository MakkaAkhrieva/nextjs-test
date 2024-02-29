export interface IPost {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPostData {
  posts: IPost[];
}

export interface IPostDataSimgle {
  post: IPost;
}

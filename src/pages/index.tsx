import Home from "../components/screens/home/Home";

import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import {IPostData} from "../interfaces/post.interface";
import {PostService} from "../services/post.service";

const HomePage: NextPage<IPostData> = ({posts}) => {
  return <Home posts={posts} />;
};

/* export const getServerSideProps: GetServerSideProps<IPostData> = async () => {
  const posts = await PostService.getAll();
  return {
    props: {posts},
  };
}; */

export const getStaticProps: GetStaticProps<IPostData> = async () => {
  const posts = await PostService.getAll();
  return {
    props: {posts},
    revalidate: 60,
  };
};

export default HomePage;

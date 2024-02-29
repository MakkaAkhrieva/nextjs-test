import {NextPage} from "next";
import Layout from "../../layout/Layout";
import {IPostData} from "../../../interfaces/post.interface";
import PostItem from '../../ui/post/PostItem';

const Home: NextPage<IPostData> = ({posts}) => {
  return (
    <Layout title="Home page" description="We love our customers">
      <h1>Hello Next</h1>
      {posts.length ? posts.map((post) => <PostItem key={post.id} post={post} />) : <div>There is no such data</div>}
    </Layout>
  );
};

export default Home;
 
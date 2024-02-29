import {NextPage} from "next";
import {IPostDataSimgle} from "../../../interfaces/post.interface";
import Layout from "../../layout/Layout";
import PostItem from "../../ui/post/PostItem";

const CarDetail: NextPage<IPostDataSimgle> = ({post}) => {
  return (
    <Layout title={post.title} description="good post">
      <PostItem post={post} />
    </Layout>
  );
};

export default CarDetail;

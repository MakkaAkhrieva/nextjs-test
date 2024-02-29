import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from "next";
import CarDetail from "../../components/screens/car-detail/CarDetail";
import {IPostDataSimgle} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";
import {ParsedUrlQuery} from "querystring";

const CarDetailPage: NextPage<IPostDataSimgle> = ({post}) => {
  return <CarDetail post={post} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await PostService.getAll();
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IPostDataSimgle> = async ({params}) => {
  const post = await PostService.getById(String(params?.id));
  return {
    props: {post},
    revalidate: 60,
  };
};

export default CarDetailPage;

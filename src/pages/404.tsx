import {NextPage} from "next";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Image src={"/404.jpg"} alt="not found" height={700} width={700} />
    </Layout>
  );
};

export default NotFound;

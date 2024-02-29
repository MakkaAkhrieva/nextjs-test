import Layout from "../components/layout/Layout";
import {NextPageAuth} from "../interfaces/page.interface";

interface Props {}

const AboutPage: NextPageAuth<Props> = ({}) => {
  return <Layout title="about">About</Layout>;
};
AboutPage.isOnlyUser = true;
export default AboutPage;

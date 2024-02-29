import {NextPage} from "next";
import {IPostDataSimgle} from "../../../interfaces/post.interface";
import Image from "next/image";
import Link from "next/link";

const PostItem: NextPage<IPostDataSimgle> = ({post}) => {
  return (
    <div>
      <Image src={post.url} alt={post.title} height={150} width={150 } />
      <h2>{post.title}</h2>
      <Link href={`/car/${post.id}`}>Ream more</Link>
    </div>
  );
};

export default PostItem;

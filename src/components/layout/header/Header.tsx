import {NextPage} from "next";
import Link from "next/link";
import styles from "./Header.module.css";
import {useRouter} from "next/router";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const {pathname} = useRouter();
  return (
    <header className={styles.header}>
      <Link href={"/"} className={pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link href={"/about"} className={pathname === "/about" ? styles.active : ""}>
        About Page
      </Link>
    </header>
  );
};

export default Header;

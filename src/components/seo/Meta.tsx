import {NextPage} from "next";
import {PropsWithChildren} from "react";
import {IMeta} from "./meta.interface";
import Head from "next/head";

const getTitle = (title: string) => `${title} | Our project`;

const Meta: NextPage<PropsWithChildren<IMeta>> = ({title, description, children}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;

import Head from "next/head";
import { FunctionComponent } from "react";

interface MetaProps {
  title: string;
}

const Meta: FunctionComponent<MetaProps> = ({ title }) => (
  <Head>
    <title>{title} | Chatoryx</title>
    <meta
      name="description"
      content="Chat with people from the same Youtube community"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Meta;

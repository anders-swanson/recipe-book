import Layout from "../components/layout";
import { Posts } from "../lib/metadata";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import styles from "../components/index.module.css";

export default function Home({ posts }) {
  return (
    <Layout
      home
      allPostsData={posts}
      description={`A recipe book of my favorite dishes.`}
    >
      <div className={`${utilStyles.flexGapContainer} ${styles.container}`}>
        <div className={styles.cover_image}>
          <div className={styles.text}>{`My Recipe Book`}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = Posts();
  return {
    props: {
      posts,
    },
  };
}

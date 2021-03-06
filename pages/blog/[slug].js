import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  //console.log(title);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  //console.log(context);
  const { params } = context;
  //console.log(params.slug);
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}

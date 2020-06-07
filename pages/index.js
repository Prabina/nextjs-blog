import Head from 'next/head'
import Link from "next/link";
import Date from "../components/Date/Date";
import Layout, { siteTitle } from '../components/Layout/Layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedBlogsData} from "../lib/posts";

export default function Home({allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi! I'm Prabina. This is my first nextjs project.</p>
          <p>I find Next.js an awesome tool to create Web Applications, and at the end of this post I hope you'll be as excited about it as I am.
                And I hope it will help you learn Next.js!</p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Contents</h2>
              <ul className={utilStyles.list} >
                  {allPostsData.map(({ id, date, title }) => (
                      <li key={id}>
                          <Link href="/posts/[id]" as={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
          <style jsx>
              {`
                ul {
                  flex-direction: column;
                  flex-wrap: wrap;
                  display: flex;
                  height: 50vh;
                }
                ul li {
                  flex: 0 0 26%;
                }
              `}
          </style>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedBlogsData()
    return {
        props: {
            allPostsData
        }
    }
}
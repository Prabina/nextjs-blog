import Head from "next/head";

import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/Layout/Layout";
import { getAllBlogIds, getBlogPost } from "../../lib/posts";
import Date from "../../components/Date/Date";

export default function Post({postData}) {
return <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.blogContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
</Layout>
}

export async function getStaticPaths(){
    const paths= getAllBlogIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getBlogPost(params.id)
    return {
        props:{
            postData
        }
    }
}
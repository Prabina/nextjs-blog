import Layout from "../components/Layout/Layout";
import {getTestData} from "../lib/about";

export default function about({testData}){
    return <Layout>
                <p> About this page </p>
                <p>Server Side Rendered Data : {testData.data} </p>
           </Layout>
}

export async function getServerSideProps() {
    const data = getTestData();
    return { props:
                {
                    testData : data
                }
            }
}
import Head from 'next/head'
import Header from '../Components/Header'
import ListsCommits from '../Components/ListsCommits'
import Pagination from '../Components/Pagination'
import React, {useState} from 'react'
import { USERNAME, REPO, URL_BASE } from '../Util/constants'

export default function Home({results}) {

  const [posts] = useState(results);
  const [loading] = useState(false);
  const [currenPage, setCurrenPage] = useState(1)
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currenPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrenPage(pageNumber)

  return (
    <div >
      <Head>
        <title>Commits</title>
        <meta name="description" content="Generated by Danny Aguirre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <ListsCommits results={currentPosts} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
    </div>
  )
}


export async function getServerSideProps(context) {
  const username = USERNAME;
  const repo = REPO
  const url = `${URL_BASE}/repos/${username}/${repo}/commits`;
  var result
  try {
     result = await fetch(url).then(res => res.json()).catch(err => err.json());
  } catch (error) {
    result = []
  }
  
  return {props: {results: result}}
}
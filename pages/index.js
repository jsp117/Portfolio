import ActiveLink from "./router";
import AllRepos from '../components/repos';
import Landing from '../components/landing';
import { useEffect, useState } from 'react';
import githubApi from './api/github';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router'
import { Router } from 'react-router';
import Carousel from '../components/carousel';

export default function App({ files, notFound }) {
  const [page, setPage] = useState('/');
  useEffect(()=>{
  }, [page])
  // console.log("page: ", page);

  function newPage(x){
    setPage(x);
  }
  // console.log("new files: ", files);
  const router = useRouter();
  console.log("Router home: ", router);
  return (
    <div>
      <Navbar page={page} newPage={newPage}></Navbar>
      <Landing></Landing>
      {page == "/projects" ? <AllRepos repos={files}></AllRepos> : <Carousel></Carousel>}
    </div>
  )
}

export async function getServerSideProps() {
  // const res = await fetch(`/api/github`);
  const files = await githubApi();
  if (!files) {
    return {
      notFound: true,
    }
  }
  return {
    props: { files }
  }
}
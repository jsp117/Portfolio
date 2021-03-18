import ActiveLink from "./router";
import AllRepos from './allRepos';
import { useEffect, useState } from 'react';
import githubApi from './api/github';

export default function App({ files }) {
  console.log("new files: ", files);


  return (
    <AllRepos repos={files}></AllRepos>
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
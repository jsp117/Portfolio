import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../components/landing"
import All from "./allRepos";
export default function Home() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getRepos();
    }, [])

    async function getRepos() {
        const res = await fetch(`/api/github`);
        const files = await res.json();
        console.log("files: ", files);
        setRepos(files);
    }

    return (
        <Router>
            <Route exact path={"/"}>
                <Landing></Landing>
            </Route>
            <Route exact path={"/all"}>
                <All repos={repos}></All>
            </Route>
        </Router>
    )
}

export default function All({repos}) {
    console.log("repos on allRepos: ", repos);
    return (

        <div>
            {repos.map((x) => {
                return (
                    <div>{x.name}</div>
                )
            })}
        </div>

    )
}
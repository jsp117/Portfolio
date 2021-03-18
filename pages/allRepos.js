export default function All({ repos }) {
    console.log("repos on allRepos: ", repos);
    return (

        <div className="m-20">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">All Projects</h2>
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {repos.map((x) => {
                    return (
                        <li className="col-span-1 flex shadow-sm rounded-md">
                            {/* <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                                GA
      </div> */}
                            <div className="flex-1 flex items-center justify-between border border-gray-200 bg-white rounded-r-md truncate">
                                {/* overflow added here */}
                                <div className="flex-1 px-4 py-2 text-sm overflow-auto">
                                    <p className="text-gray-900 font-medium hover:text-gray-600">{x.name}</p>
                                    <p className="text-gray-500">{x.description}</p>
                                    <a href={x.html_url} className="text-blue-500">Repository Link</a>
                                    {x.homepage ? <div><a className="text-blue-500" href={x.homepage}>Deployed Link</a></div> : ""}
                                </div>
                                <div className="flex-shrink-0 pr-2">
                                    <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="sr-only">Open options</span>
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}
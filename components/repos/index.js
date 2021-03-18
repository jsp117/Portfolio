export default async function getRepos() {
    const res = await fetch(`/api/github`);
    const files = await res.json();
    return files;
}
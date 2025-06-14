export default async function Fetch() {
    const response = await fetch('https://bug-free-space-giggle-4j6x7j56qjq6fq7gq-3000.app.github.dev//api/hello');

    const data = await response.json();
    return <h1>{data.message}</h1>;
}
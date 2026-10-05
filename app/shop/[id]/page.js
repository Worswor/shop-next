export default async function Product ({ params })
{
    const { id } = await params
    return <h1>Product ID: {id}</h1>
}
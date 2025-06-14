import ProductsList from "../ProductsList";

export default async function ProductsPage() {
  const response = await fetch('https://bug-free-space-giggle-4j6x7j56qjq6fq7gq-3000.app.github.dev/api/products',);
  const products = await response.json();

  const response2 = await fetch('https://bug-free-space-giggle-4j6x7j56qjq6fq7gq-3000.app.github.dev/api/users/2/cart', {
    cache: 'no-cache'
  });
  const cartProducts = await response2.json();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ProductsList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}
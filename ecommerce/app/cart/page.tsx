import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch('https://bug-free-space-giggle-4j6x7j56qjq6fq7gq-3000.app.github.dev/api/users/2/cart', {
    cache: 'no-cache'
  });
  const cartProducts = await response.json();

  return (
    <ShoppingCartList initialCartProducts={cartProducts} />
  );
}
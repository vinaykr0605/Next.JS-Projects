'use client';

import { useState } from 'react';
import { Product } from '../product-data';
import Link from 'next/link';

export default function ShoppingCartList({ initialCartProducts }: { initialCartProducts: Product[] }) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);
  const apiBaseUrl = "https://bug-free-space-giggle-4j6x7j56qjq6fq7gq-3000.app.github.dev";
  async function removeFromCart(productId: string) {
    const response = await fetch(`${apiBaseUrl}/api/users/2/cart`, {
      method: "DELETE",
      body: JSON.stringify({ productId }),
      headers: { "Content-Type": "application/json" },
    });

    const updatedCartProducts = await response.json();
    setCartProducts(updatedCartProducts);
  }


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4"> {/* List for cart items */}
        {cartProducts.map(product => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex justify-end">
                <button
                  className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(product.id);
                  }}>Remove from Cart</button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
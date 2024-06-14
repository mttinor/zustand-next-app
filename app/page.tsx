"use client";
import ProductList from "./_components/productList";
import Cart from "./_components/cart";
import { useState } from "react";
import { PRODUCTS } from "./_db";
import ProductListStore from "./_components/productListStore";
import CartStore from "./_components/cartStore";

export default function Home() {
  // const [cart, setCart] = useState([]);
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <ProductList products={PRODUCTS} setCart={setCart} />
  //     <Cart cart={cart} setCart={setCart} />
  //   </main>
  // );


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductListStore products={PRODUCTS}  />
      <CartStore  />
    </main>
  );
}

import useCartStore from "../_store/cartStore";

const CartStore = () => {
  // you should use this or
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));
  // you should use this 
  // const cart = useCartStore((state) => state.cart);
  // const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const addToCart = useCartStore((state) => state.addToCart);
  // const clearCart = useCartStore((state) => state.clearCart);

  return (
    <>
      <h2>Cart</h2>
      {cart.map((product: any, index: number) => (
        <div className="flex justify-between" key={index}>
          <div>{product.name}</div>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      )}
    </>
  );
};
export default CartStore;

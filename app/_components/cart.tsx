const Cart = ({ cart, setCart }: any) => {
  return (
    <>
      <h2>Cart</h2>
      {cart.map((product: any, index: number) => (
        <div key={index}>
          <div>{product.name}</div>
          <button
            onClick={() =>
              setCart(
                cart.filter((productItem: any) => product.id !== product.id)
              )
            }
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button onClick={() => setCart([])}>Clear Cart</button>
      )}
    </>
  );
};
export default Cart;

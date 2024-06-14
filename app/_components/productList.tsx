const ProductList = ({ products, setCart }: any) => {
  return (
    <div className="flex flex-col gap-3">
      {products.map((product: any, index: number) => (
        <div className="flex justify-between" key={index}>
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
          </div>

          <button
            className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold  rounded"
            onClick={() => setCart((cart: any) => [...cart, product])}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;

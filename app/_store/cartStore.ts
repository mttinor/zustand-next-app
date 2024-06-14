import { create } from 'zustand';

// Define the type for the product
interface Product {
  id: number;
  name: string;
  description: string;
}

// Define the state and actions
interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

// Create the store
const useCartStore = create<CartState>((set) => ({
  cart: [], // initial value
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== productId)
  })),
  clearCart: () => set({ cart: [] })
}));

export default useCartStore;
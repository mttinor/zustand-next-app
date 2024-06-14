import { create } from "zustand";
import { createSelectors } from "./createSelector";

interface CounterState {
  count: number;
  decrement: () => void;
  increment: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count + 1 })),
}));

export const countSelector = (state: CounterState) => state.count;
export const incrementSelector = (state: CounterState) => state.increment;
export const decrementSelector = (state: CounterState) => state.decrement;


// use  const count = useCounterStore(countSelector)


export const useStoreSelectors = createSelectors(useCounterStore)


// how use useStoreSelectors
// const count = useStoreSelectors.use.count()
// const increment = useStoreSelectors.use.increment()
// const decrement = useStoreSelectors.use.decrement()


export default useCounterStore;

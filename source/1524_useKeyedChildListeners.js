// Module ID: 1524
// Function ID: 1525
// Name: useKeyedChildListeners
// Dependencies: [19]
// Exports: useKeyedChildListeners

// Module 1524 (useKeyedChildListeners)
import noop from "noop";


export const useKeyedChildListeners = function useKeyedChildListeners() {
  current = current.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: current.useCallback((arg0, arg1, arg2) => {
      const table = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      table[arg0][arg1] = arg2;
      return () => {
        if (dependencyMap[dependencyMap][closure_1] === closure_2) {
          dependencyMap[dependencyMap][tmp] = undefined;
        }
      };
    }, items)
  };
};

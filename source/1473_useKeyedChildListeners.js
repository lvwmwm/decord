// Module ID: 1473
// Function ID: 17121
// Name: useKeyedChildListeners
// Dependencies: []
// Exports: default

// Module 1473 (useKeyedChildListeners)
let closure_0 = importAll(dependencyMap[0]);

export default function useKeyedChildListeners() {
  const current = React.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const React = current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: React.useCallback((arg0, arg1, arg2) => {
      const current = arg0;
      current[arg0][arg1] = arg2;
      return () => {
        arg0[closure_0][arg1] = undefined;
      };
    }, items)
  };
};

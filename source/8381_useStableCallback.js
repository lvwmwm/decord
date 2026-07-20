// Module ID: 8381
// Function ID: 66721
// Name: useStableCallback
// Dependencies: []
// Exports: default

// Module 8381 (useStableCallback)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(arg0);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = arg0;
  });
  return React.useCallback((arg0) => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};

// Module ID: 7874
// Function ID: 62696
// Name: useGetIsMounted
// Dependencies: []
// Exports: default

// Module 7874 (useGetIsMounted)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  const React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};

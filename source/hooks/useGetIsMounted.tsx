// Module ID: 7878
// Function ID: 62708
// Name: useGetIsMounted
// Dependencies: []
// Exports: default

// Module 7878 (useGetIsMounted)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  const React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};

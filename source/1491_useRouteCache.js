// Module ID: 1491
// Function ID: 17196
// Name: useRouteCache
// Dependencies: []
// Exports: default

// Module 1491 (useRouteCache)
importDefault(dependencyMap[0]);
let closure_0 = importAll(dependencyMap[1]);

export default function useRouteCache(arg0) {
  const memo = React.useMemo(() => {
    const obj = { current: new Map() };
    return obj;
  }, []);
  return arg0;
};
export const CHILD_STATE = Symbol("CHILD_STATE");

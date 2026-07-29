// Module ID: 1515
// Function ID: 1516
// Name: useRouteCache
// Dependencies: [109, 19]
// Exports: default

// Module 1515 (useRouteCache)
import "_objectWithoutProperties";
import noop from "noop";


export default function useRouteCache(arg0) {
  const memo = React.useMemo(() => {
    const obj = { current: null };
    obj[0] = new Map();
    return obj;
  }, []);
  return arg0;
};
export const CHILD_STATE = Symbol("CHILD_STATE");

// Module ID: 1491
// Function ID: 17202
// Name: useRouteCache
// Dependencies: [29, 31]
// Exports: default

// Module 1491 (useRouteCache)
import "_objectWithoutProperties";
import result from "result";


export default function useRouteCache(arg0) {
  const memo = React.useMemo(() => {
    const obj = { current: new Map() };
    return obj;
  }, []);
  return arg0;
};
export const CHILD_STATE = Symbol("CHILD_STATE");

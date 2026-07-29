// Module ID: 4065
// Function ID: 4066
// Name: PortalHost
// Dependencies: [19, 21, 4066, 4062]

// Module 4065 (PortalHost)
import noop from "noop";
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const useEffect = noop.useEffect;
({ Fragment: c3, jsx: c4 } = jsxProd);
const memoResult = noop.memo((name) => {
  let c0;
  let c1;
  name = name.name;
  let _require;
  let dependencyMap;
  let obj = _require(4066);
  const portalState = obj.usePortalState(name);
  const portal = _require(4062).usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      callback();
    };
  }, []);
  obj = { children: portalState.map((node) => node.node) };
  return callback(closure_3, obj);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;

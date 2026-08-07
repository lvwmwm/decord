// Module ID: 4177
// Function ID: 4178
// Name: PortalHost
// Dependencies: [19, 21, 4178, 4174]

// Module 4177 (PortalHost)
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
  let obj = _require(4178);
  const portalState = obj.usePortalState(name);
  const portal = _require(4174).usePortal(name);
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

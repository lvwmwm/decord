// Module ID: 4007
// Function ID: 33278
// Name: PortalHost
// Dependencies: [31, 33, 4008, 4004]

// Module 4007 (PortalHost)
import result from "result";
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const useEffect = result.useEffect;
({ Fragment: closure_3, jsx: closure_4 } = jsxProd);
const memoResult = result.memo(function PortalHostComponent(name) {
  let dependencyMap;
  let require;
  name = name.name;
  let obj = require(4008) /* usePortalState */;
  const portalState = obj.usePortalState(name);
  const portal = require(4004) /* usePortal */.usePortal(name);
  ({ registerHost: require, deregisterHost: dependencyMap } = portal);
  useEffect(() => {
    callback();
    return () => {
      outer1_1();
    };
  }, []);
  obj = { children: portalState.map((node) => node.node) };
  return callback(closure_3, obj);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;

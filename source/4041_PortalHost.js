// Module ID: 4041
// Function ID: 33380
// Name: PortalHost
// Dependencies: [31, 33, 4042, 4038]

// Module 4041 (PortalHost)
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
  let obj = require(4042) /* usePortalState */;
  const portalState = obj.usePortalState(name);
  const portal = require(4038) /* usePortal */.usePortal(name);
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

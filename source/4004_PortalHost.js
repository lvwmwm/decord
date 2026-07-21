// Module ID: 4004
// Function ID: 33258
// Name: PortalHost
// Dependencies: [0, 0, 0, 0]

// Module 4004 (PortalHost)
import result from "result";
import "result";
import result from "result";

const useEffect = result.useEffect;
({ Fragment: closure_3, jsx: closure_4 } = result);
const memoResult = result.memo(function PortalHostComponent(name) {
  name = name.name;
  let obj = require(dependencyMap[2]);
  const portalState = obj.usePortalState(name);
  const portal = require(dependencyMap[3]).usePortal(name);
  ({ registerHost: closure_0, deregisterHost: closure_1 } = portal);
  useEffect(() => {
    callback();
    return () => {
      callback();
    };
  }, []);
  obj = { children: portalState.map((node) => node.node) };
  return callback(closure_3, obj);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;

// Module ID: 4004
// Function ID: 33253
// Name: PortalHost
// Dependencies: [0, 0, 0, 0]

// Module 4004 (PortalHost)
import __exportStarResult1 from "__exportStarResult1";
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

const useEffect = __exportStarResult1.useEffect;
({ Fragment: closure_3, jsx: closure_4 } = __exportStarResult1);
const memoResult = __exportStarResult1.memo(function PortalHostComponent(name) {
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

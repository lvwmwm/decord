// Module ID: 4004
// Function ID: 33253
// Name: PortalHost
// Dependencies: []

// Module 4004 (PortalHost)
const _module = require(dependencyMap[0]);
const useEffect = _module.useEffect;
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ Fragment: closure_3, jsx: closure_4 } = _module1);
const memoResult = _module.memo(function PortalHostComponent(name) {
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

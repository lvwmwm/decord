// Module ID: 4666
// Function ID: 4667
// Name: PortalHost
// Dependencies: [19, 21, 4667, 4663]

// Module 4666 (PortalHost)
import _mod4663 from "module_4663" /* 4663 */;
import _mod4667 from "module_4667" /* 4667 */;
import noop_mod from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

let noop = noop_mod;
const useEffect = noop.useEffect;
let noop = noop_mod;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const portalState = _mod4667.usePortalState(name);
  const portal = _mod4663.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  return React4(React3, { children: portalState.map((node) => node.node) });
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;

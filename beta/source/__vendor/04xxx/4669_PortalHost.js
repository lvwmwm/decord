// Module ID: 4669
// Function ID: 4670
// Name: PortalHost
// Dependencies: [19, 21, 4670, 4666]

// Module 4669 (PortalHost)
import _mod4666 from "module_4666" /* 4666 */;
import _mod4670 from "module_4670" /* 4670 */;
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
  const portalState = _mod4670.usePortalState(name);
  const portal = _mod4666.usePortal(name);
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

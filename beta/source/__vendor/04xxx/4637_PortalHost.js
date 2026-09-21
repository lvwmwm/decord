// Module ID: 4637
// Function ID: 4638
// Name: PortalHost
// Dependencies: [19, 21, 4638, 4634]

// Module 4637 (PortalHost)
import _mod4634 from "module_4634" /* 4634 */;
import _mod4638 from "module_4638" /* 4638 */;
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
  const portalState = _mod4638.usePortalState(name);
  const portal = _mod4634.usePortal(name);
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

// Module ID: 5056
// Function ID: 5057
// Name: PortalHost
// Dependencies: [19, 21, 5057, 5053]

// Module 5056 (PortalHost)
import _mod5053 from "module_5053" /* 5053 */;
import react2 from "react" /* 5057 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let name;

let c3;
let closure_4;
let react = react_mod;
const useEffect = react.useEffect;
const memo = react.memo;
react = react_mod;
({ Fragment: c3, jsx: closure_4 } = Fragment);
const memoResult = memo((name) => {
  let c0;
  let c1;
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const obj = react2;
  const portalState = obj.usePortalState(name);
  const obj2 = _mod5053;
  const portal = obj2.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  const obj3 = { children: portalState.map((node) => node.node) };
  return React3(_false, obj3);
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;

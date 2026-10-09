// Module ID: 4958
// Function ID: 4959
// Name: PortalHost
// Dependencies: [19, 21, 4959, 4955]

// Module 4958 (PortalHost)
import _mod4955 from "module_4955" /* 4955 */;
import react2 from "react" /* 4959 */;
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
  const obj2 = _mod4955;
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

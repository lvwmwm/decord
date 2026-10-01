// Module ID: 4715
// Function ID: 4716
// Name: PortalProvider
// Dependencies: [32, 19, 21, 4716, 4712, 4711, 4713]

// Module 4715 (PortalProvider)
import react2 from "react" /* 4711 */;
import ACTIONS from "ACTIONS" /* 4712 */;
import reducer from "reducer" /* 4716 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let tmp;
const PortalHost = tmp(4713);
let react = react_mod;
({ useReducer: c3, memo } = react);
react = react_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = memo((rootHostName) => {
  let Provider2;
  let items;
  let obj2;
  let tmp4;
  let tmp5;
  let tmp7;
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  const children = rootHostName.children;
  [tmp4, tmp5] = _false(reducer.reducer, ACTIONS.INITIAL_STATE);
  const obj = { value: tmp5, children: tmp7(Provider2, obj2) };
  _slicedToArray(_false(reducer.reducer, ACTIONS.INITIAL_STATE), 2);
  const Provider = react2.PortalDispatchContext.Provider;
  obj2 = { value: tmp4, children: items };
  items = [children, ];
  Provider2 = react2.PortalStateContext.Provider;
  tmp7 = hasOwnProperty;
  if (flag) {
    const obj3 = { name: str };
    flag = tmp6(PortalHost.PortalHost, obj3);
  }
  items[1] = flag;
  return React3(Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;

// Module ID: 5173
// Function ID: 5174
// Name: PortalProvider
// Dependencies: [32, 19, 21, 5174, 5170, 5169, 5171]

// Module 5173 (PortalProvider)
import react2 from "react" /* 5169 */;
import ACTIONS from "ACTIONS" /* 5170 */;
import reducer from "reducer" /* 5174 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let tmp;
const PortalHost = tmp(5171);
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

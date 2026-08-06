// Module ID: 4162
// Function ID: 4163
// Name: memo
// Dependencies: [32, 19, 21, 4163, 4159, 4158, 4160]

// Module 4162 (memo)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
let c5;
let memo;
const require = arg1;
({ useReducer: c3, memo } = noop);
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = memo((rootHostName) => {
  let tmp4;
  let tmp5;
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  [tmp4, tmp5] = callback(callback2(require(4163) /* registerHost */.reducer, require(4159).INITIAL_STATE), 2);
  let obj = { value: tmp5, children: null };
  obj = { value: tmp4, children: null };
  const items = [rootHostName.children, ];
  if (flag) {
    obj = { name: null };
    obj[0] = str;
    flag = tmp6(require(4160) /* PortalHost */.PortalHost, obj);
  }
  items[1] = flag;
  obj[1] = items;
  obj[1] = closure_5(require(4158) /* createContext */.PortalStateContext.Provider, obj);
  return closure_4(require(4158) /* createContext */.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;

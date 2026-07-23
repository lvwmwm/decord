// Module ID: 4008
// Function ID: 33272
// Name: memo
// Dependencies: [57, 31, 33, 4009, 4005, 4004, 4006]

// Module 4008 (memo)
import _slicedToArray from "_slicedToArray";
import result from "result";
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let memo;
const require = arg1;
({ useReducer: closure_3, memo } = result);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = memo(function PortalProviderComponent(rootHostName) {
  let tmp3;
  let tmp4;
  rootHostName = rootHostName.rootHostName;
  let str = "root";
  if (undefined !== rootHostName) {
    str = rootHostName;
  }
  const shouldAddRootHost = rootHostName.shouldAddRootHost;
  let tmp = undefined === shouldAddRootHost || shouldAddRootHost;
  [tmp3, tmp4] = callback(callback2(require(4009) /* registerHost */.reducer, require(4005).INITIAL_STATE), 2);
  let obj = { value: tmp4 };
  obj = { value: tmp3 };
  const items = [rootHostName.children, ];
  if (tmp) {
    obj = { name: str };
    tmp = callback3(require(4006) /* PortalHost */.PortalHost, obj);
  }
  items[1] = tmp;
  obj.children = items;
  obj.children = closure_5(require(4004) /* createContext */.PortalStateContext.Provider, obj);
  return callback3(require(4004) /* createContext */.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;

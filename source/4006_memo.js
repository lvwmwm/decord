// Module ID: 4006
// Function ID: 33265
// Name: memo
// Dependencies: []

// Module 4006 (memo)
let memo;
let closure_2 = importDefault(dependencyMap[0]);
({ useReducer: closure_3, memo } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
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
  [tmp3, tmp4] = callback(callback2(arg1(dependencyMap[3]).reducer, arg1(dependencyMap[4]).INITIAL_STATE), 2);
  let obj = { value: tmp4 };
  obj = { value: tmp3 };
  const items = [rootHostName.children, ];
  if (tmp) {
    obj = { name: str };
    tmp = callback3(arg1(dependencyMap[6]).PortalHost, obj);
  }
  items[1] = tmp;
  obj.children = items;
  obj.children = closure_5(arg1(dependencyMap[5]).PortalStateContext.Provider, obj);
  return callback3(arg1(dependencyMap[5]).PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;

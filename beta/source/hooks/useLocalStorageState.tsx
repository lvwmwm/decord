// Module ID: 9388
// Function ID: 9389
// Name: useLocalStorageState
// Dependencies: [32, 19, 510, 5298, 2]
// Exports: useLocalStorageState

// Module 9388 (useLocalStorageState)
import Storage3 from "Storage" /* 510 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

let result = size.fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(arg0, arg1) {
  let closure_1;
  let closure_2;
  let first;
  let closure_0 = arg0;
  importDefault = arg1;
  [first, dependencyMap] = react.useState(() => {
    const Storage = Storage3.Storage;
    let value = Storage.get(closure_0);
    if (null == value) {
      value = closure_1;
    }
    return value;
  });
  let tmp3 = useMountEffectDefault(() => {
    const Storage = Storage3.Storage;
    const tmp3 = closure_0;
    if (null == Storage.get(closure_0)) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(tmp3, closure_1);
    }
  });
  const items = [first, ];
  const items1 = [arg0];
  items[1] = react.useCallback((arg0) => {
    closure_2(arg0);
    const Storage = Storage3.Storage;
    const result = Storage.set(closure_0, arg0);
  }, items1);
  return items;
};

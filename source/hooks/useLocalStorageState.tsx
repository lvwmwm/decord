// Module ID: 10673
// Function ID: 83225
// Name: useLocalStorageState
// Dependencies: [57, 31, 587, 4559, 2]
// Exports: useLocalStorageState

// Module 10673 (useLocalStorageState)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let result = require("Storage").fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(() => {
    const Storage = callback(587).Storage;
    let value = Storage.get(callback);
    if (null == value) {
      value = closure_1;
    }
    return value;
  }), 2);
  const dependencyMap = tmp[1];
  importDefault(4559)(() => {
    const Storage = callback(587).Storage;
    if (null == Storage.get(callback)) {
      const Storage2 = callback(587).Storage;
      const result = Storage2.set(callback, closure_1);
    }
  });
  const items = [tmp[0], ];
  const items1 = [arg0];
  items[1] = React.useCallback((arg0) => {
    dependencyMap(arg0);
    const Storage = callback(587).Storage;
    const result = Storage.set(callback, arg0);
  }, items1);
  return items;
};

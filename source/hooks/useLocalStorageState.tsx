// Module ID: 10663
// Function ID: 83175
// Name: useLocalStorageState
// Dependencies: []
// Exports: useLocalStorageState

// Module 10663 (useLocalStorageState)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(() => {
    const Storage = arg0(closure_2[2]).Storage;
    let value = Storage.get(arg0);
    if (null == value) {
      value = arg1;
    }
    return value;
  }), 2);
  let closure_2 = tmp[1];
  importDefault(closure_2[3])(() => {
    const Storage = arg0(closure_2[2]).Storage;
    if (null == Storage.get(arg0)) {
      const Storage2 = arg0(closure_2[2]).Storage;
      const result = Storage2.set(arg0, arg1);
    }
  });
  const items = [tmp[0], ];
  const items1 = [arg0];
  items[1] = React.useCallback((arg0) => {
    callback(arg0);
    const Storage = arg0(callback[2]).Storage;
    const result = Storage.set(arg0, arg0);
  }, items1);
  return items;
};

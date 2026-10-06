// Module ID: 1520
// Function ID: 1521
// Dependencies: [19, 1521, 1508]
// Exports: useOptionsGetters

// Module 1520
import react2 from "react" /* 1508 */;
import react3 from "react" /* 1521 */;
import react from "react" /* 19 */;

let navigation;


export const useOptionsGetters = function useOptionsGetters(key) {
  let items5;
  key = key.key;
  const options = key.options;
  navigation = key.navigation;
  let closure_3 = react.useRef(options);
  let closure_4 = react.useRef({});
  const onOptionsChange = react.useContext(react3.NavigationBuilderContext).onOptionsChange;
  const addOptionsGetter = react.useContext(react2.NavigationStateContext).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  const callback = react.useCallback(() => {
    let flag;
    const obj = navigation;
    if (navigation != null) {
      flag = obj.isFocused();
    }
    if (flag == null) {
      flag = true;
    }
    if (flag) {
      flag = !Object.keys(closure_4.current).length;
    }
    if (flag) {
      let current = ref.current;
      const tmp = onOptionsChange;
      if (current == null) {
        current = {};
      }
      tmp(current);
    }
  }, items);
  const items1 = [options];
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = options;
  }, items1);
  const items2 = [navigation, options, callback];
  const effect = react.useEffect(() => {
    callback();
    let addListenerResult;
    const obj = navigation;
    const tmp = callback;
    if (navigation != null) {
      addListenerResult = obj.addListener("focus", tmp);
    }
    return addListenerResult;
  }, items2);
  const callback1 = react.useCallback(() => {
    for (const key10004 in closure_4.current) {
      if (!(key10004 in closure_4.current)) {
        continue;
      } else {
        let current = tmp4.current;
        let tmp = current[key10004];
        let tmpResult;
        if (tmp != null) {
          tmpResult = tmp();
        }
        if (null === tmpResult) {
          continue;
        } else {
          return tmpResult;
        }
      }
      continue;
    }
    return null;
  }, []);
  const items3 = [navigation, callback1];
  const callback2 = react.useCallback(() => {
    let isFocusedResult;
    const obj = navigation;
    if (navigation != null) {
      isFocusedResult = obj.isFocused();
    }
    if (isFocusedResult != null) {
      if (!isFocusedResult) {
        return null;
      }
    }
    let current = callback1();
    if (null === current) {
      current = ref.current;
    }
    return current;
  }, items3);
  const items4 = [callback2, addOptionsGetter, key];
  const effect1 = react.useEffect(() => {
    let tmpResult;
    if (addOptionsGetter != null) {
      tmpResult = tmp(key, callback2);
    }
    return tmpResult;
  }, items4);
  let obj = {
    addOptionsGetter: react.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      closure_4.current[arg0] = arg1;
      callback();
      return () => {
        delete closure_4.current[closure_0];
        callback();
      };
    }, items5),
    getCurrentOptions: callback2
  };
  items5 = [callback];
  return obj;
};

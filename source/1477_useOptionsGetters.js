// Module ID: 1477
// Function ID: 17156
// Name: useOptionsGetters
// Dependencies: []
// Exports: default

// Module 1477 (useOptionsGetters)
let closure_2 = importAll(dependencyMap[0]);

export default function useOptionsGetters(key) {
  const importDefault = key;
  const options = key.options;
  const dependencyMap = options;
  const navigation = key.navigation;
  const React = navigation;
  let closure_3 = React.useRef(options);
  let closure_4 = React.useRef({});
  const onOptionsChange = React.useContext(importDefault(dependencyMap[1])).onOptionsChange;
  const addOptionsGetter = React.useContext(importDefault(dependencyMap[2])).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  const callback = React.useCallback(() => {
    let isFocusedResult;
    if (null != navigation) {
      isFocusedResult = navigation.isFocused();
    }
    let tmp3 = null == isFocusedResult || isFocusedResult;
    if (tmp3) {
      tmp3 = !Object.keys(ref2.current).length;
    }
    if (tmp3) {
      let current = ref.current;
      if (null == current) {
        current = {};
      }
      onOptionsChange(current);
      const tmp4 = onOptionsChange;
    }
  }, items);
  const items1 = [navigation, options, callback];
  const effect = React.useEffect(() => {
    closure_3.current = options;
    let addListenerResult;
    callback();
    if (null != navigation) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items1);
  const callback1 = React.useCallback(() => {
    for (const key10007 in closure_4.current) {
      let tmp6 = key10007;
      let tmp7 = closure_4;
      let current2 = closure_4.current;
      if (!current2.hasOwnProperty(key10007)) {
        continue;
      } else {
        let tmp = closure_4;
        let current = closure_4.current;
        let obj = current[key10007];
        let callResult;
        if (null != obj) {
          callResult = obj.call(current);
        }
        let tmp3 = obj;
        let tmp4 = current;
        let tmp5 = callResult;
        if (null === callResult) {
          continue;
        } else {
          return callResult;
        }
      }
      continue;
    }
    return null;
  }, []);
  const items2 = [navigation, callback1];
  const callback2 = React.useCallback(() => {
    let isFocusedResult;
    if (null != navigation) {
      isFocusedResult = navigation.isFocused();
    }
    if (null != isFocusedResult) {
      if (!isFocusedResult) {
        return null;
      }
    }
    let current = callback1();
    if (null === current) {
      current = ref.current;
    }
    return current;
  }, items2);
  const items3 = [callback2, addOptionsGetter, key.key];
  const effect1 = React.useEffect(() => {
    let tmp;
    if (null != addOptionsGetter) {
      tmp = addOptionsGetter(key, callback2);
    }
    return tmp;
  }, items3);
  const items4 = [callback];
  return {
    addOptionsGetter: React.useCallback((arg0, arg1) => {
      ref2.current[arg0] = arg1;
      callback();
      return () => {
        delete r2[r1];
        callback();
      };
    }, items4),
    getCurrentOptions: callback2
  };
};

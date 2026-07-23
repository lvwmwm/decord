// Module ID: 1477
// Function ID: 17162
// Name: useOptionsGetters
// Dependencies: [31, 1478, 1470]
// Exports: default

// Module 1477 (useOptionsGetters)
import result from "result";


export default function useOptionsGetters(key) {
  key = key.key;
  const options = key.options;
  const navigation = key.navigation;
  let closure_3 = navigation.useRef(options);
  let closure_4 = navigation.useRef({});
  const onOptionsChange = navigation.useContext(key(options[1])).onOptionsChange;
  const addOptionsGetter = navigation.useContext(key(options[2])).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  const callback = navigation.useCallback(() => {
    let isFocusedResult;
    if (null != navigation) {
      isFocusedResult = navigation.isFocused();
    }
    let tmp3 = null == isFocusedResult || isFocusedResult;
    if (tmp3) {
      tmp3 = !Object.keys(closure_4.current).length;
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
  const effect = navigation.useEffect(() => {
    closure_3.current = options;
    let addListenerResult;
    callback();
    if (null != navigation) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items1);
  const callback1 = navigation.useCallback(() => {
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
  const callback2 = navigation.useCallback(() => {
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
  const items3 = [callback2, addOptionsGetter, key];
  const effect1 = navigation.useEffect(() => {
    let tmp;
    if (null != addOptionsGetter) {
      tmp = addOptionsGetter(key, callback2);
    }
    return tmp;
  }, items3);
  const items4 = [callback];
  return {
    addOptionsGetter: navigation.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      closure_4.current[arg0] = arg1;
      callback();
      return () => {
        delete tmp2[tmp];
        outer1_7();
      };
    }, items4),
    getCurrentOptions: callback2
  };
};

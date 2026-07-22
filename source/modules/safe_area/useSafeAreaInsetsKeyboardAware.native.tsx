// Module ID: 5157
// Function ID: 44931
// Name: useSafeAreaInsetsKeyboardAware
// Dependencies: []
// Exports: default

// Module 5157 (useSafeAreaInsetsKeyboardAware)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware(disabled) {
  let obj = disabled;
  if (disabled === undefined) {
    obj = {};
  }
  let flag = obj.isKeyboardAwareOnIOS;
  if (flag === undefined) {
    flag = true;
  }
  const arg1 = flag;
  let flag2 = obj.isKeyboardAwareOnAndroid;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const importDefault = flag2;
  let flag3 = obj.includeCustomKeyboardHeight;
  if (flag3 === undefined) {
    flag3 = true;
  }
  const dependencyMap = flag3;
  let flag4 = obj.includeKeyboardHeight;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let callback;
  let React;
  let closure_5;
  let closure_6;
  const tmp = importDefault(dependencyMap[5])();
  let obj1 = arg1(dependencyMap[6]);
  const appEntryKey = obj1.useAppEntryKey();
  callback = appEntryKey;
  const items = [appEntryKey, flag3, flag, flag2];
  callback = React.useCallback(() => {
    let obj = flag(flag3[7]);
    if (obj.isIOS()) {
      if (!flag) {
        return 0;
      }
    }
    if (obj2.isAndroid()) {
      if (!flag2) {
        return 0;
      }
    }
    const obj2 = flag(flag3[7]);
    obj = { appEntryKey };
    let systemKeyboardHeight = flag(flag3[8]).getSystemKeyboardHeight(obj);
    if (0 === systemKeyboardHeight) {
      const keyboardType = flag(flag3[9]).getKeyboardType(appEntryKey);
      let num5 = 0;
      if (keyboardType !== flag(flag3[10]).KeyboardTypes.SYSTEM) {
        num5 = 0;
        if (flag3) {
          num5 = flag(flag3[11]).getCustomKeyboardHeight(appEntryKey);
          const obj6 = flag(flag3[11]);
        }
      }
      systemKeyboardHeight = num5;
      const obj5 = flag(flag3[9]);
    }
    return systemKeyboardHeight;
  }, items);
  React = callback;
  const ref = React.useRef(callback());
  closure_5 = ref;
  const tmp5 = callback(React.useState(ref.current), 2);
  const first = tmp5[0];
  closure_6 = tmp5[1];
  const items1 = [callback, flag, flag2];
  const effect = React.useEffect(() => ref(() => {
    const tmp = callback();
    if (ref.current !== tmp) {
      ref.current = tmp;
      callback2(tmp);
    }
  }), items1);
  obj = { keyboardHeight: first };
  let isAndroidResult = !flag || !flag4;
  if (!isAndroidResult) {
    isAndroidResult = arg1(dependencyMap[7]).isAndroid();
    const obj4 = arg1(dependencyMap[7]);
  }
  obj.disabled = isAndroidResult;
  function useAnimateChanges(disabled) {
    disabled = disabled.disabled;
    let closure_1 = callback.useRef(false);
    const items = [disabled.keyboardHeight, disabled];
    const effect = callback.useEffect(() => {
      const keyboardDuration = disabled(closure_2[3]).getKeyboardDuration();
      if (ref.current) {
        if (0 !== keyboardDuration) {
          if (!disabled) {
            const result = disabled(closure_2[4]).DeprecatedLayoutAnimationKeyboard(keyboardDuration);
            const obj2 = disabled(closure_2[4]);
          }
        }
      }
      ref.current = true;
    }, items);
  }(obj);
  let num2 = 0;
  if (flag4) {
    num2 = first;
  }
  obj = {};
  let tmp12 = tmp;
  if (first > 0) {
    obj1 = {};
    const merged = Object.assign(tmp);
    obj1["bottom"] = num2;
    tmp12 = obj1;
  }
  obj.insets = tmp12;
  return obj;
};

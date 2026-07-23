// Module ID: 5160
// Function ID: 44950
// Name: useSafeAreaInsetsKeyboardAware
// Dependencies: [57, 31, 1452, 5161, 5162, 1557, 1453, 477, 1823, 3996, 1555, 5163, 2]
// Exports: default

// Module 5160 (useSafeAreaInsetsKeyboardAware)
import _slicedToArray from "_slicedToArray";
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";

const require = arg1;
let result = require("subscribeToKeyboardUIStore").fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware(disabled) {
  let obj = disabled;
  if (disabled === undefined) {
    obj = {};
  }
  let flag = obj.isKeyboardAwareOnIOS;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.isKeyboardAwareOnAndroid;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = obj.includeCustomKeyboardHeight;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = obj.includeKeyboardHeight;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let appEntryKey;
  let callback;
  let ref;
  let closure_6;
  let tmp = flag2(flag3[5])();
  let obj1 = flag(flag3[6]);
  appEntryKey = obj1.useAppEntryKey();
  let items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
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
    obj2 = flag(flag3[7]);
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
  ref = callback.useRef(callback());
  const tmp5 = appEntryKey(callback.useState(ref.current), 2);
  const first = tmp5[0];
  closure_6 = tmp5[1];
  const items1 = [callback, flag, flag2];
  let effect = callback.useEffect(() => ref(() => {
    const tmp = outer1_4();
    if (outer1_5.current !== tmp) {
      outer1_5.current = tmp;
      outer1_6(tmp);
    }
  }), items1);
  obj = { keyboardHeight: first };
  let isAndroidResult = !flag || !flag4;
  if (!isAndroidResult) {
    isAndroidResult = flag(flag3[7]).isAndroid();
    const obj4 = flag(flag3[7]);
  }
  obj.disabled = isAndroidResult;
  (function useAnimateChanges(disabled) {
    disabled = disabled.disabled;
    let closure_1 = callback.useRef(false);
    const items = [disabled.keyboardHeight, disabled];
    const effect = callback.useEffect(() => {
      const keyboardDuration = flag(flag3[3]).getKeyboardDuration();
      if (ref.current) {
        if (0 !== keyboardDuration) {
          if (!disabled) {
            const result = flag(flag3[4]).DeprecatedLayoutAnimationKeyboard(keyboardDuration);
            const obj2 = flag(flag3[4]);
          }
        }
      }
      ref.current = true;
    }, items);
  })(obj);
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

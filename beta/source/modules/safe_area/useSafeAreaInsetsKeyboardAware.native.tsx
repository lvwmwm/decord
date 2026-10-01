// Module ID: 6402
// Function ID: 6403
// Name: useSafeAreaInsetsKeyboardAware
// Dependencies: [32, 19, 1481, 5892, 5893, 1613, 1482, 1364, 1879, 4703, 1611, 5891, 2]
// Exports: default

// Module 6402 (useSafeAreaInsetsKeyboardAware)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1879 */;
import useKeyboardType from "useKeyboardType" /* 4703 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware() {
  let c6;
  let tmp8;
  let obj = arg0;
  if (arg0 === undefined) {
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
  let callback;
  c6 = undefined;
  let tmp = flag3;
  let tmp2 = flag2(flag3[5])();
  let tmp3 = flag;
  let obj2 = flag(flag3[6]);
  const appEntryKey = obj2.useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  callback = callback.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      const tmp3 = flag;
      if (!tmp3) {
        return 0;
      }
    }
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const tmp4 = flag2;
      if (!tmp4) {
        return 0;
      }
    }
    const obj2 = { appEntryKey };
    const tmpResult4 = useSystemKeyboardHeight;
    let systemKeyboardHeight = tmpResult4.getSystemKeyboardHeight(obj2);
    if (0 === systemKeyboardHeight) {
      const tmpResult5 = useKeyboardType;
      const keyboardType = tmpResult5.getKeyboardType(tmp5);
      let num3 = 0;
      if (keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM) {
        num3 = 0;
        if (flag3) {
          const tmpResult6 = useCustomKeyboardHeight;
          num3 = tmpResult6.getCustomKeyboardHeight(tmp5);
        }
      }
      systemKeyboardHeight = num3;
    }
    return systemKeyboardHeight;
  }, items);
  const ref = callback.useRef(callback());
  [tmp8, c6] = appEntryKey(callback.useState(ref.current), 2);
  const items1 = [callback, flag, flag2];
  appEntryKey(callback.useState(ref.current), 2);
  const effect = callback.useEffect(() => subscribeToKeyboardUIStore(() => {
    const tmp = callback();
    if (ref.current !== tmp) {
      ref.current = tmp;
      closure_1_6(tmp);
    }
  }), items1);
  let isAndroidResult = !flag;
  if (flag) {
    isAndroidResult = !flag4;
  }
  if (!isAndroidResult) {
    const tmp3Result = tmp3(tmp[7]);
    isAndroidResult = tmp3Result.isAndroid();
  }
  let closure_1 = obj3.useRef(false);
  const items2 = [tmp8, isAndroidResult];
  const effect1 = obj3.useEffect(() => {
    const obj = flag(flag3[3]);
    const keyboardDuration = obj.getKeyboardDuration();
    const tmp = flag;
    const tmp2 = flag3;
    const tmp4 = ref;
    if (ref.current) {
      if (0 !== keyboardDuration) {
        const tmp5 = isAndroidResult;
        if (!tmp5) {
          const tmpResult = tmp(tmp2[4]);
          const result = tmpResult.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
        }
      }
    }
    tmp4.current = true;
  }, items2);
  let num = 0;
  if (flag4) {
    num = tmp8;
  }
  let insets = tmp2;
  if (tmp8 > 0) {
    const obj4 = { bottom: num };
    const merged = Object.assign(tmp2);
    insets = obj4;
  }
  return { insets };
};

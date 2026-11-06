// Module ID: 5765
// Function ID: 5766
// Name: useSafeAreaInsetsKeyboardAware
// Dependencies: [32, 19, 1495, 1627, 1496, 1377, 2020, 5355, 1625, 5766, 2]
// Exports: default

// Module 5765 (useSafeAreaInsetsKeyboardAware)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 2020 */;
import useKeyboardType from "useKeyboardType" /* 5355 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5766 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx");

export default function useSafeAreaInsetsKeyboardAware() {
  let closure_4;
  let items3;
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
  let tmp = flag2(flag3[3])();
  react = tmp;
  let obj2 = flag(flag3[4]);
  const appEntryKey = obj2.useAppEntryKey();
  const items = [appEntryKey, flag3, flag, flag2];
  const callback = react.useCallback(() => {
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
  const items1 = [callback, flag4];
  const callback1 = react.useCallback(() => {
    const tmp = callback();
    let tmp2 = null;
    if (tmp > 0) {
      let num = 0;
      if (flag4) {
        num = tmp;
      }
      tmp2 = num;
    }
    return tmp2;
  }, items1);
  const ref = react.useRef(callback1());
  const tmp6 = flag4(react.useState(ref.current), 2);
  const first = tmp6[0];
  let closure_10 = tmp6[1];
  const items2 = [callback1];
  const layoutEffect = react.useLayoutEffect(() => {
    let tmp = callback1();
    if (ref.current !== tmp) {
      ref.current = tmp;
      closure_10(tmp);
    }
    return subscribeToKeyboardUIStore(function maybeUpdateKeyboardInset() {
      const tmp = callback1();
      if (ref.current !== tmp) {
        ref.current = tmp;
        closure_1_10(tmp);
      }
    });
  }, items2);
  const obj3 = {
    insets: react.useMemo(() => {
      let tmp2;
      if (null != first) {
        const obj = { bottom: tmp };
        const merged = Object.assign(closure_4);
        tmp2 = obj;
      } else {
        tmp2 = closure_4;
      }
      return tmp2;
    }, items3)
  };
  items3 = [tmp, first];
  return obj3;
};

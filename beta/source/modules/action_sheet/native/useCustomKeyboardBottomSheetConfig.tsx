// Module ID: 11562
// Function ID: 11563
// Name: useCustomKeyboardBottomSheetConfig
// Dependencies: [19, 4825, 1364, 1879, 4703, 1611, 1479, 10898, 5910, 10897, 2]
// Exports: default

// Module 11562 (useCustomKeyboardBottomSheetConfig)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1879 */;
import useKeyboardType from "useKeyboardType" /* 4703 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const result = size.fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default function useCustomKeyboardBottomSheetConfig(forceMaxHeight) {
  let animateOnMount;
  let initialPosition;
  let memo;
  let obj2;
  let str;
  let styles;
  const f93932 = () => {
    const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    const obj2 = PlatformUtils;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!AccessibilityStore.useReducedMotion) {
        let obj3 = obj;
        const tmpResult = useSystemKeyboardHeight;
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          const tmpResult2 = useKeyboardType;
          const keyboardTypePrevious = tmpResult2.getKeyboardTypePrevious();
          obj3 = obj;
          if (keyboardTypePrevious === KeyboardTypes.KeyboardTypes.SYSTEM) {
            obj3 = { animateOnMount: true };
          }
        }
        tmp3 = obj3;
      }
    }
    return tmp3;
  };
  let flag = forceMaxHeight.forceMaxHeight;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = forceMaxHeight.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  importDefault = undefined;
  let minimum;
  let tmp = minimum;
  const tmp2 = require("useWindowDimensions")({ ignoreKeyboard: true });
  importDefault = tmp2;
  let tmp3 = require("useKeyboardActionSheetHeight")();
  minimum = tmp3.minimum;
  const maximum = tmp3.maximum;
  let items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = require("react")(f93932));
  const tmp4 = require("react")(f93932);
  let obj = { animateOnMount, enablePanDownToClose: flag2, accessible: obj2.isAndroid() && undefined, contentHeight: maximum, containerHeight: tmp2.height, enableDynamicSizing: false, initialPosition, keyboardBehavior: "extend", android_keyboardInputMode: str, snapPoints: memo };
  memo = maximum.useMemo(() => {
    let items1;
    const tmp = flag;
    if (tmp) {
      const items = [maximum, maximum];
      items1 = items;
    } else {
      items1 = [minimum, maximum];
    }
    return items1;
  }, items);
  obj2 = flag(minimum[2]);
  str = undefined;
  obj2.isAndroid() && undefined;
  const tmp6 = flag;
  if (tmp6(tmp[9]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
    str = "adjustResize";
  }
  return obj;
};

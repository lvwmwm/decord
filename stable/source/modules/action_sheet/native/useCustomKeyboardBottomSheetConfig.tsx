// Module ID: 12213
// Function ID: 12214
// Name: useCustomKeyboardBottomSheetConfig
// Dependencies: [19, 4628, 1363, 1877, 4504, 1609, 1477, 11493, 5679, 11492, 2]
// Exports: default

// Module 12213 (useCustomKeyboardBottomSheetConfig)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default function useCustomKeyboardBottomSheetConfig(forceMaxHeight) {
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
  const tmp2 = require("useWindowDimensions")({ ignoreKeyboard: true });
  importDefault = tmp2;
  let tmp3 = require("useKeyboardActionSheetHeight")();
  minimum = tmp3.minimum;
  const maximum = tmp3.maximum;
  let items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = require("useInitialValue")(() => {
    const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!AccessibilityStore.useReducedMotion) {
        let obj3 = obj;
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          const keyboardTypePrevious = tmp(4504).getKeyboardTypePrevious();
          obj3 = obj;
          if (keyboardTypePrevious === tmp(1609).KeyboardTypes.SYSTEM) {
            obj3 = { animateOnMount: true };
          }
          const tmpResult2 = tmp(4504);
        }
        tmp3 = obj3;
        tmpResult = tmp(1877);
      }
    }
    return tmp3;
  }));
  let obj = { animateOnMount, enablePanDownToClose: flag2, accessible: null, contentHeight: null, containerHeight: null, enableDynamicSizing: false, initialPosition: null, keyboardBehavior: "extend", android_keyboardInputMode: null, snapPoints: null };
  const memo = maximum.useMemo(() => {
    if (flag) {
      const items = [maximum, maximum];
      let items1 = items;
    } else {
      items1 = [minimum, maximum];
    }
    return items1;
  }, items);
  const tmp = minimum;
  const tmp4 = require("useInitialValue")(() => {
    const obj = { initialPosition: styles.height - minimum, animateOnMount: false };
    let tmp3 = obj;
    if (!obj2.isAndroid()) {
      tmp3 = obj;
      if (!AccessibilityStore.useReducedMotion) {
        let obj3 = obj;
        if (0 === tmpResult.getSystemKeyboardHeight()) {
          const keyboardTypePrevious = tmp(4504).getKeyboardTypePrevious();
          obj3 = obj;
          if (keyboardTypePrevious === tmp(1609).KeyboardTypes.SYSTEM) {
            obj3 = { animateOnMount: true };
          }
          const tmpResult2 = tmp(4504);
        }
        tmp3 = obj3;
        tmpResult = tmp(1877);
      }
    }
    return tmp3;
  });
  const tmp6 = flag;
  const obj2 = flag(minimum[2]);
  obj.accessible = flag(minimum[2]).isAndroid() && undefined;
  obj.contentHeight = maximum;
  obj.containerHeight = tmp2.height;
  obj.initialPosition = initialPosition;
  let str;
  if (tmp6(tmp[9]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
    str = "adjustResize";
  }
  obj.android_keyboardInputMode = str;
  obj.snapPoints = memo;
  return obj;
};

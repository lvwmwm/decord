// Module ID: 11230
// Function ID: 87438
// Name: useCustomKeyboardBottomSheetConfig
// Dependencies: [31, 4122, 477, 1823, 3996, 1555, 1450, 11186, 5450, 10425, 2]
// Exports: default

// Module 11230 (useCustomKeyboardBottomSheetConfig)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default function useCustomKeyboardBottomSheetConfig(forceMaxHeight) {
  let animateOnMount;
  let initialPosition;
  let flag = forceMaxHeight.forceMaxHeight;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = forceMaxHeight.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importDefault;
  let minimum;
  let maximum;
  let tmp = importDefault(minimum[6])({ ignoreKeyboard: true });
  importDefault = tmp;
  const tmp2 = importDefault(minimum[7])();
  minimum = tmp2.minimum;
  maximum = tmp2.maximum;
  let items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = importDefault(minimum[8])(() => {
    let obj = { initialPosition: _undefined.height - minimum, animateOnMount: false };
    let tmp = obj;
    if (!obj2.isAndroid()) {
      tmp = obj;
      if (!outer1_4.useReducedMotion) {
        let tmp5 = obj;
        if (0 === obj3.getSystemKeyboardHeight()) {
          const keyboardTypePrevious = flag(minimum[4]).getKeyboardTypePrevious();
          tmp5 = obj;
          if (keyboardTypePrevious === flag(minimum[5]).KeyboardTypes.SYSTEM) {
            obj = { animateOnMount: true };
            tmp5 = obj;
          }
          const obj4 = flag(minimum[4]);
        }
        tmp = tmp5;
        obj3 = flag(minimum[3]);
      }
    }
    return tmp;
  }));
  let obj = { animateOnMount, enablePanDownToClose: flag2 };
  const memo = maximum.useMemo(() => {
    if (flag) {
      const items = [maximum, maximum];
      let items1 = items;
    } else {
      items1 = [minimum, maximum];
    }
    return items1;
  }, items);
  const tmp3 = importDefault(minimum[8])(() => {
    let obj = { initialPosition: _undefined.height - minimum, animateOnMount: false };
    let tmp = obj;
    if (!obj2.isAndroid()) {
      tmp = obj;
      if (!outer1_4.useReducedMotion) {
        let tmp5 = obj;
        if (0 === obj3.getSystemKeyboardHeight()) {
          const keyboardTypePrevious = flag(minimum[4]).getKeyboardTypePrevious();
          tmp5 = obj;
          if (keyboardTypePrevious === flag(minimum[5]).KeyboardTypes.SYSTEM) {
            obj = { animateOnMount: true };
            tmp5 = obj;
          }
          const obj4 = flag(minimum[4]);
        }
        tmp = tmp5;
        obj3 = flag(minimum[3]);
      }
    }
    return tmp;
  });
  let tmp5 = !flag(minimum[2]).isAndroid();
  obj.accessible = !tmp5;
  obj.contentHeight = maximum;
  obj.containerHeight = tmp.height;
  obj.enableDynamicSizing = false;
  obj.initialPosition = initialPosition;
  obj.keyboardBehavior = "extend";
  let str;
  if (flag(minimum[9]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
    str = "adjustResize";
  }
  obj.android_keyboardInputMode = str;
  obj.snapPoints = memo;
  return obj;
};

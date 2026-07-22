// Module ID: 11190
// Function ID: 87119
// Name: useCustomKeyboardBottomSheetConfig
// Dependencies: []
// Exports: default

// Module 11190 (useCustomKeyboardBottomSheetConfig)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx");

export default function useCustomKeyboardBottomSheetConfig(forceMaxHeight) {
  let animateOnMount;
  let initialPosition;
  let flag = forceMaxHeight.forceMaxHeight;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let flag2 = forceMaxHeight.enablePanDownToClose;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importDefault;
  let dependencyMap;
  let React;
  const tmp = importDefault(dependencyMap[6])({ ignoreKeyboard: true });
  importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[7])();
  const minimum = tmp2.minimum;
  dependencyMap = minimum;
  const maximum = tmp2.maximum;
  React = maximum;
  const items = [flag, maximum, minimum];
  ({ initialPosition, animateOnMount } = importDefault(dependencyMap[8])(() => {
    let obj = { initialPosition: tmp.height - minimum, animateOnMount: false };
    let tmp = obj;
    if (!obj2.isAndroid()) {
      tmp = obj;
      if (!useReducedMotion.useReducedMotion) {
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
        const obj3 = flag(minimum[3]);
      }
    }
    return tmp;
  }));
  const obj = { animateOnMount, enablePanDownToClose: flag2 };
  const memo = React.useMemo(() => {
    if (flag) {
      const items = [maximum, maximum];
      let items1 = items;
    } else {
      items1 = [minimum, maximum];
    }
    return items1;
  }, items);
  const tmp3 = importDefault(dependencyMap[8])(() => {
    let obj = { initialPosition: tmp.height - minimum, animateOnMount: false };
    let tmp = obj;
    if (!obj2.isAndroid()) {
      tmp = obj;
      if (!useReducedMotion.useReducedMotion) {
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
        const obj3 = flag(minimum[3]);
      }
    }
    return tmp;
  });
  const tmp5 = !arg1(dependencyMap[2]).isAndroid();
  obj.accessible = !tmp5;
  obj.contentHeight = maximum;
  obj.containerHeight = tmp.height;
  obj.enableDynamicSizing = false;
  obj.initialPosition = initialPosition;
  obj.keyboardBehavior = "extend";
  let str;
  if (arg1(dependencyMap[9]).IS_SYSTEM_KEYBOARD_EXTERNAL) {
    str = "adjustResize";
  }
  obj.android_keyboardInputMode = str;
  obj.snapPoints = memo;
  return obj;
};

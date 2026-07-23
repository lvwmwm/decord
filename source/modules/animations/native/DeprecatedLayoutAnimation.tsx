// Module ID: 5162
// Function ID: 44959
// Name: DeprecatedLayoutAnimation
// Dependencies: [27, 4122, 477, 2]
// Exports: DeprecatedLayoutAnimationKeyboard

// Module 5162 (DeprecatedLayoutAnimation)
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import obj from "module_150";
import obj from "module_150";

let LayoutAnimation;
let closure_2;
class DeprecatedLayoutAnimation {
  constructor(arg0) {
    useReducedMotion = _isNativeReflectConstruct.useReducedMotion;
    if (!useReducedMotion) {
      tmp = closure_0;
      tmp2 = closure_1;
      num = 2;
      obj = require("set");
      useReducedMotion = obj.isAndroid();
    }
    if (!useReducedMotion) {
      tmp3 = null;
      if (null != global) {
        tmp6 = LayoutAnimation;
        configureNextResult = LayoutAnimation.configureNext(global);
      } else {
        tmp4 = LayoutAnimation;
        easeInEaseOutResult = LayoutAnimation.easeInEaseOut();
      }
    }
    return;
  }
}
({ Keyboard: closure_2, LayoutAnimation } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export { DeprecatedLayoutAnimation };
export const DeprecatedLayoutAnimationKeyboard = function DeprecatedLayoutAnimationKeyboard(keyboardDuration) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    let obj = require(477) /* set */;
    if (!obj.isAndroid()) {
      obj = { duration: keyboardDuration };
      return closure_2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: obj1 };
  DeprecatedLayoutAnimation(obj);
};

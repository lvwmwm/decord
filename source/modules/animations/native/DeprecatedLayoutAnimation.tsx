// Module ID: 5159
// Function ID: 44940
// Name: DeprecatedLayoutAnimation
// Dependencies: [0, 0, 0, 0]
// Exports: DeprecatedLayoutAnimationKeyboard

// Module 5159 (DeprecatedLayoutAnimation)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import obj from "module_150";
import obj from "module_150";
import __exportStarResult1 from "__exportStarResult1";

let LayoutAnimation;
class DeprecatedLayoutAnimation {
  constructor(arg0) {
    useReducedMotion = importDefault.useReducedMotion;
    if (!useReducedMotion) {
      tmp = require;
      tmp2 = dependencyMap;
      num = 2;
      obj = require("__exportStarResult1");
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
({ Keyboard: closure_2, LayoutAnimation } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export { DeprecatedLayoutAnimation };
export const DeprecatedLayoutAnimationKeyboard = function DeprecatedLayoutAnimationKeyboard(keyboardDuration) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    let obj = require(dependencyMap[2]);
    if (!obj.isAndroid()) {
      obj = { duration: keyboardDuration };
      return closure_2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: obj1 };
  DeprecatedLayoutAnimation(obj);
};

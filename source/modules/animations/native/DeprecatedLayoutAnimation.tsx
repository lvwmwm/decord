// Module ID: 5227
// Function ID: 44204
// Name: DeprecatedLayoutAnimation
// Dependencies: []
// Exports: DeprecatedLayoutAnimationKeyboard

// Module 5227 (DeprecatedLayoutAnimation)
import obj from "module_150";
import obj from "module_150";

let LayoutAnimation;
class DeprecatedLayoutAnimation {
  constructor(arg0) {
    useReducedMotion = importDefault.useReducedMotion;
    if (!useReducedMotion) {
      tmp = require;
      tmp2 = dependencyMap;
      num = 2;
      obj = require(dependencyMap[2]);
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
const _module = require(dependencyMap[0]);
({ Keyboard: closure_2, LayoutAnimation } = _module);
let closure_4 = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

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

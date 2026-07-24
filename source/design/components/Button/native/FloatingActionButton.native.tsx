// Module ID: 8423
// Function ID: 66978
// Name: styles
// Dependencies: [31, 33, 4130, 689, 4547, 1324, 3991, 4542, 7534, 2]
// Exports: FloatingActionButton

// Module 8423 (styles)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const styles = _createForOfIteratorHelperLoose.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  obj.button = obj;
  obj = { minWidth: require(4547) /* getButtonPadding */.FAB_BUTTON_SIZE, minHeight: require(4547) /* getButtonPadding */.FAB_BUTTON_SIZE, padding: 0 };
  if (flag) {
    const obj1 = { borderRadius: importDefault(689).radii.lg };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  obj.iconButtonPill = obj;
  return obj;
});
let closure_6 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_7 = { code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = function FloatingActionButton(positionRight) {
  let icon;
  let positionBottom;
  ({ icon, positionBottom } = positionRight);
  positionRight = positionRight.positionRight;
  let obj = { icon: 0, positionBottom: 0, positionRight: 0, accessibilityLabel: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(positionRight, obj);
  const tmp3 = styles(positionRight(1324)("FloatingActionButton"));
  let obj1 = positionBottom(3991);
  class F {
    constructor() {
      obj = { position: "absolute" };
      obj2 = positionBottom(outer1_2[7]);
      num = 16;
      num2 = 16;
      if (null != positionBottom) {
        num2 = positionBottom;
      }
      obj.bottom = obj2.withSpring(num2, outer1_6);
      obj3 = positionBottom(outer1_2[7]);
      if (null != positionRight) {
        num = positionRight;
      }
      obj.right = obj3.withSpring(num, outer1_6);
      return obj;
    }
  }
  obj = { withSpring: positionBottom(4542).withSpring, positionBottom, DEFAULT_POSITION_OFFSET: 16, SPRING_CONFIG: closure_6, positionRight };
  F.__closure = obj;
  F.__workletHash = 10762818944671;
  F.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(F);
  obj = { style: animatedStyle };
  obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["accessibilityLabel"] = positionRight.accessibilityLabel;
  obj1["size"] = "lg";
  obj1["variant"] = "primary";
  let cloneElementResult = icon;
  if (result.isValidElement(icon)) {
    let obj2 = { color: positionRight(689).colors.WHITE };
    cloneElementResult = result.cloneElement(icon, obj2);
  }
  obj1["icon"] = cloneElementResult;
  obj1["style"] = tmp3.button;
  obj1["pillStyle"] = tmp3.iconButtonPill;
  obj.children = jsx(positionBottom(7534).BaseIconButton, {});
  return jsx(positionRight(3991).View, { style: animatedStyle });
};

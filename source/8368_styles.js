// Module ID: 8368
// Function ID: 66678
// Name: styles
// Dependencies: []
// Exports: FloatingActionButton

// Module 8368 (styles)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const styles = arg1(dependencyMap[2]).createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[3]).shadows.SHADOW_HIGH);
  obj.button = obj;
  obj = { minWidth: arg1(dependencyMap[4]).FAB_BUTTON_SIZE, minHeight: arg1(dependencyMap[4]).FAB_BUTTON_SIZE, padding: 0 };
  if (flag) {
    const obj1 = { borderRadius: importDefault(dependencyMap[3]).radii.lg };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  obj.iconButtonPill = obj;
  return obj;
});
let closure_6 = {};
let closure_7 = { code: "function FloatingActionButtonNativeTsx1(){const{withSpring,positionBottom,DEFAULT_POSITION_OFFSET,SPRING_CONFIG,positionRight}=this.__closure;var _positionBottom,_positionRight;return{position:'absolute',bottom:withSpring((_positionBottom=positionBottom)!==null&&_positionBottom!==void 0?_positionBottom:DEFAULT_POSITION_OFFSET,SPRING_CONFIG),right:withSpring((_positionRight=positionRight)!==null&&_positionRight!==void 0?_positionRight:DEFAULT_POSITION_OFFSET,SPRING_CONFIG)};}" };
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Button/native/FloatingActionButton.native.tsx");

export const DEFAULT_POSITION_OFFSET = 16;
export const useStyles = styles;
export const FloatingActionButton = function FloatingActionButton(positionRight) {
  let icon;
  let positionBottom;
  ({ icon, positionBottom } = positionRight);
  const arg1 = positionBottom;
  positionRight = positionRight.positionRight;
  const importDefault = positionRight;
  let obj = { ignoreNotificationSetting: "r", flexGrow: "onRequireModeratorMFAClick", useInGameQuestConnectState: "Array", leaveFrame: "isSpamMessageRequest" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(positionRight, obj);
  const tmp3 = styles(importDefault(dependencyMap[5])("FloatingActionButton"));
  let obj1 = arg1(dependencyMap[6]);
  class F {
    constructor() {
      obj = { position: "absolute" };
      obj2 = positionBottom(closure_2[7]);
      num = 16;
      num2 = 16;
      if (null != positionBottom) {
        num2 = positionBottom;
      }
      obj.bottom = obj2.withSpring(num2, closure_6);
      obj3 = positionBottom(closure_2[7]);
      if (null != positionRight) {
        num = positionRight;
      }
      obj.right = obj3.withSpring(num, closure_6);
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, positionBottom, DEFAULT_POSITION_OFFSET: 16, SPRING_CONFIG: closure_6, positionRight };
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
  if (closure_3.isValidElement(icon)) {
    const obj2 = { color: importDefault(dependencyMap[3]).colors.WHITE };
    cloneElementResult = closure_3.cloneElement(icon, obj2);
  }
  obj1["icon"] = cloneElementResult;
  obj1["style"] = tmp3.button;
  obj1["pillStyle"] = tmp3.iconButtonPill;
  obj.children = jsx(arg1(dependencyMap[8]).BaseIconButton, obj1);
  return jsx(importDefault(dependencyMap[6]).View, obj);
};

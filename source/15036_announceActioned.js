// Module ID: 15036
// Function ID: 113221
// Name: announceActioned
// Dependencies: []
// Exports: ActionStatusSubLabel

// Module 15036 (announceActioned)
function announceActioned(intl) {
  const AccessibilityAnnouncer = arg1(dependencyMap[3]).AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
const obj = arg1(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).Text);
let closure_7 = { code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
let closure_8 = { code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
let closure_9 = { code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
let closure_10 = { code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}" };
let closure_11 = { code: "function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
const importDefaultResult = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ActionStatusSubLabel = function ActionStatusSubLabel(lineHeight) {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let animate;
  let label;
  let maxFontSizeMultiplier;
  let secondaryLabel;
  let num = lineHeight.lineHeight;
  if (num === undefined) {
    num = 16;
  }
  const arg1 = num;
  let str = lineHeight.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const actioned = lineHeight.actioned;
  const importDefault = actioned;
  ({ secondaryLabel, actionStatusAccessibilityLabel } = lineHeight);
  const dependencyMap = actionStatusAccessibilityLabel;
  ({ maxFontSizeMultiplier, animate } = lineHeight);
  let tmp;
  let callback;
  tmp = null != secondaryLabel;
  ({ label, actionStatus } = lineHeight);
  let obj = arg1(dependencyMap[6]);
  const fontScale = obj.useFontScale();
  callback = fontScale;
  const tmp3 = callback();
  let obj1 = arg1(dependencyMap[4]);
  class L {
    constructor() {
      tmp = closure_4;
      if (closure_4) {
        tmp2 = actioned;
        tmp = !actioned.get();
      }
      result = closure_0 * closure_5;
      result1 = result;
      if (tmp) {
        num = 2;
        result1 = 2 * result;
      }
      obj = {};
      withTimingResult = result1;
      if (animate) {
        tmp6 = actioned;
        withTimingResult = result1;
        if (actioned.get()) {
          tmp7 = closure_0;
          tmp8 = closure_2;
          num2 = 7;
          obj2 = closure_0(closure_2[7]);
          num3 = 4;
          obj3 = closure_0(closure_2[4]);
          tmp9 = actioned;
          num4 = 0;
          if (actioned.get()) {
            num4 = 1;
          }
          result2 = result;
          if (tmp) {
            num5 = 2;
            result2 = 2 * result;
          }
          items = [, ];
          items[0] = result2;
          items[1] = result;
          withTimingResult = obj2.withTiming(obj3.interpolate(num4, [null, null], items));
        }
      }
      obj.height = withTimingResult;
      return obj;
    }
  }
  obj = { hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: arg1(dependencyMap[7]).withTiming, interpolate: arg1(dependencyMap[4]).interpolate };
  L.__closure = obj;
  L.__workletHash = 14210085997091;
  L.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(L);
  let obj3 = arg1(dependencyMap[4]);
  const fn = function y() {
    let num = 0;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let obj = {};
    obj = {};
    let withTimingResult = num;
    if (animate) {
      const obj3 = num(actionStatusAccessibilityLabel[7]);
      let num4 = 0;
      if (actioned.get()) {
        num4 = 1;
      }
      const items = [0.229, num];
      withTimingResult = obj3.withTiming(num(actionStatusAccessibilityLabel[4]).interpolate(num4, [null, null], items));
      const obj4 = num(actionStatusAccessibilityLabel[4]);
    }
    obj.translateY = withTimingResult;
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { actioned, lineHeight: num, fontScale, animate, withTiming: arg1(dependencyMap[7]).withTiming, interpolate: arg1(dependencyMap[4]).interpolate };
  fn.__closure = obj;
  fn.__workletHash = 1040596522101;
  fn.__initData = closure_8;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = arg1(dependencyMap[4]);
  class V {
    constructor() {
      num = 0;
      if (!actioned.get()) {
        tmp = closure_0;
        tmp2 = closure_5;
        num = -closure_0 * closure_5;
      }
      obj = {};
      obj = {};
      withTimingResult = num;
      if (animate) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        num2 = 7;
        obj3 = closure_0(closure_2[7]);
        num3 = 4;
        obj4 = closure_0(closure_2[4]);
        tmp6 = actioned;
        num4 = 0;
        if (actioned.get()) {
          num4 = 1;
        }
        items = [, ];
        items[0] = num;
        items[1] = 0;
        withTimingResult = obj3.withTiming(obj4.interpolate(num4, [null, null], items));
      }
      obj.translateY = withTimingResult;
      items1 = [];
      items1[0] = obj;
      obj.transform = items1;
      if (animate) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        num6 = 7;
        obj5 = closure_0(closure_2[7]);
        tmp10 = actioned;
        num7 = 0;
        if (actioned.get()) {
          num7 = 1;
        }
        num5 = obj5.withTiming(num7);
      } else {
        tmp7 = actioned;
        num5 = 0;
        if (actioned.get()) {
          num5 = 1;
        }
      }
      obj.opacity = num5;
      return obj;
    }
  }
  obj1 = { actioned, lineHeight: num, fontScale, animate, withTiming: arg1(dependencyMap[7]).withTiming, interpolate: arg1(dependencyMap[4]).interpolate };
  V.__closure = obj1;
  V.__workletHash = 2183035188794;
  V.__initData = closure_9;
  const animatedStyle2 = obj5.useAnimatedStyle(V);
  class Y {
    constructor() {
      return actioned.get();
    }
  }
  Y.__closure = { actioned };
  Y.__workletHash = 9609826744629;
  Y.__initData = closure_10;
  const fn2 = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = false === arg1;
    }
    if (tmp) {
      tmp = null != actionStatusAccessibilityLabel;
    }
    if (tmp) {
      4(actionStatusAccessibilityLabel[4]).runOnJS(closure_12)(actionStatusAccessibilityLabel);
      const obj = 4(actionStatusAccessibilityLabel[4]);
    }
  };
  const obj8 = arg1(dependencyMap[4]);
  fn2.__closure = { actionStatusAccessibilityLabel, runOnJS: arg1(dependencyMap[4]).runOnJS, announceActioned };
  fn2.__workletHash = 14141240445417;
  fn2.__initData = closure_11;
  const animatedReaction = obj8.useAnimatedReaction(Y, fn2);
  obj3 = { style: items };
  const items = [tmp3.container, animatedStyle];
  const obj4 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label };
  const items1 = [animate(closure_6, obj4), , ];
  if (tmp) {
    obj5 = { variant: str, maxFontSizeMultiplier, style: animatedStyle1, color: "text-default", lineClamp: 1, children: secondaryLabel };
    tmp = animate(closure_6, obj5);
  }
  items1[1] = tmp;
  const obj6 = { variant: str, maxFontSizeMultiplier, color: "text-default" };
  const items2 = [tmp3.actionStatus, animatedStyle2];
  obj6.style = items2;
  obj6.lineClamp = 1;
  obj6.children = actionStatus;
  items1[2] = animate(closure_6, obj6);
  obj3.children = items1;
  return tmp(importDefault(dependencyMap[4]).View, obj3);
};

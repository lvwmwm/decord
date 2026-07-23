// Module ID: 15169
// Function ID: 115491
// Name: announceActioned
// Dependencies: [31, 33, 4130, 3843, 3991, 4126, 4549, 4131, 2]
// Exports: ActionStatusSubLabel

// Module 15169 (announceActioned)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_3;
let closure_4;
const require = arg1;
function announceActioned(intl) {
  const AccessibilityAnnouncer = require(3843) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_6 = require("module_3991").createAnimatedComponent(require("Text").Text);
let closure_7 = { code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
let closure_8 = { code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
let closure_9 = { code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
let closure_10 = { code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}" };
let closure_11 = { code: "function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

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
  let str = lineHeight.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const actioned = lineHeight.actioned;
  ({ secondaryLabel, actionStatusAccessibilityLabel } = lineHeight);
  ({ maxFontSizeMultiplier, animate } = lineHeight);
  let c4;
  let fontScale;
  let tmp = null != secondaryLabel;
  c4 = tmp;
  ({ label, actionStatus } = lineHeight);
  let obj = num(actionStatusAccessibilityLabel[6]);
  fontScale = obj.useFontScale();
  const tmp3 = fontScale();
  let obj1 = num(actionStatusAccessibilityLabel[4]);
  class L {
    constructor() {
      tmp = c4;
      if (c4) {
        tmp2 = actioned;
        tmp = !actioned.get();
      }
      result = c0 * c5;
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
          tmp7 = c0;
          tmp8 = outer1_2;
          num2 = 7;
          obj2 = c0(outer1_2[7]);
          num3 = 4;
          obj3 = c0(outer1_2[4]);
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
          withTimingResult = obj2.withTiming(obj3.interpolate(num4, [0, 1], items));
        }
      }
      obj.height = withTimingResult;
      return obj;
    }
  }
  obj = { hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  L.__closure = obj;
  L.__workletHash = 14210085997091;
  L.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(L);
  let obj3 = num(actionStatusAccessibilityLabel[4]);
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
      const items = [0, num];
      withTimingResult = obj3.withTiming(num(actionStatusAccessibilityLabel[4]).interpolate(num4, [0, 1], items));
      const obj4 = num(actionStatusAccessibilityLabel[4]);
    }
    obj.translateY = withTimingResult;
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn.__closure = obj;
  fn.__workletHash = 1040596522101;
  fn.__initData = closure_8;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = num(actionStatusAccessibilityLabel[4]);
  class V {
    constructor() {
      num = 0;
      if (!actioned.get()) {
        tmp = c0;
        tmp2 = c5;
        num = -c0 * c5;
      }
      obj = {};
      obj = {};
      withTimingResult = num;
      if (animate) {
        tmp4 = c0;
        tmp5 = outer1_2;
        num2 = 7;
        obj3 = c0(outer1_2[7]);
        num3 = 4;
        obj4 = c0(outer1_2[4]);
        tmp6 = actioned;
        num4 = 0;
        if (actioned.get()) {
          num4 = 1;
        }
        items = [, ];
        items[0] = num;
        items[1] = 0;
        withTimingResult = obj3.withTiming(obj4.interpolate(num4, [0, 1], items));
      }
      obj.translateY = withTimingResult;
      items1 = [];
      items1[0] = obj;
      obj.transform = items1;
      if (animate) {
        tmp8 = c0;
        tmp9 = outer1_2;
        num6 = 7;
        obj5 = c0(outer1_2[7]);
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
  obj1 = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
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
      4(actionStatusAccessibilityLabel[4]).runOnJS(outer1_12)(actionStatusAccessibilityLabel);
      const obj = 4(actionStatusAccessibilityLabel[4]);
    }
  };
  const obj8 = num(actionStatusAccessibilityLabel[4]);
  fn2.__closure = { actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned };
  fn2.__workletHash = 14141240445417;
  fn2.__initData = closure_11;
  const animatedReaction = obj8.useAnimatedReaction(Y, fn2);
  obj3 = { style: items };
  items = [tmp3.container, animatedStyle];
  let obj4 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label };
  let items1 = [animate(closure_6, obj4), , ];
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
  return c4(actioned(actionStatusAccessibilityLabel[4]).View, obj3);
};

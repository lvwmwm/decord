// Module ID: 16079
// Function ID: 16080
// Name: ActionStatusSubLabel
// Dependencies: [19, 21, 4836, 4541, 4566, 4832, 5288, 4837, 2]
// Exports: ActionStatusSubLabel

// Module 16079 (ActionStatusSubLabel)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let c3;
let closure_4;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_7 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
const __initData = { code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
const __initData2 = { code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
const __initData3 = { code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
const __initData4 = { code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}" };
const __initData5 = { code: "function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ACTION_STATUS_SUB_LABEL_LINE_HEIGHT = 16;
export const ActionStatusSubLabel = function ActionStatusSubLabel(lineHeight) {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let animate;
  let items;
  let items1;
  let items2;
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
  let tmp = null != secondaryLabel;
  let closure_4 = tmp;
  ({ label, actionStatus } = lineHeight);
  let obj = num(actionStatusAccessibilityLabel[6]);
  const fontScale = obj.useFontScale();
  const tmp3 = fontScale();
  let obj2 = num(actionStatusAccessibilityLabel[4]);
  const fn = function x() {
    const tmp = closure_4 && !actioned.get();
    const result = num * fontScale;
    let result1 = result;
    if (tmp) {
      result1 = 2 * result;
    }
    let height = result1;
    if (animate) {
      height = result1;
      const obj = actioned;
      if (actioned.get()) {
        const withTiming = timing.withTiming;
        timing;
        const interpolate = ReanimatedRexport2.interpolate;
        let num2 = 0;
        ReanimatedRexport2;
        if (obj.get()) {
          num2 = 1;
        }
        let result2 = result;
        if (tmp) {
          result2 = 2 * result;
        }
        const items = [result2, result];
        height = withTiming(interpolate(num2, [0, 1], items));
      }
    }
    return { height };
  };
  fn.__closure = { hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn.__workletHash = 14210085997091;
  fn.__initData = __initData;
  ({ hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function y() {
    let items1;
    num = 0;
    const obj = actioned;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const withTiming = timing.withTiming;
      timing;
      const interpolate = ReanimatedRexport2.interpolate;
      let num2 = 0;
      ReanimatedRexport2;
      if (obj.get()) {
        num2 = 1;
      }
      const items = [0, num];
      withTimingResult = withTiming(interpolate(num2, [0, 1], items));
    }
    const obj2 = { transform: items1 };
    items1 = [{ translateY: withTimingResult }];
    return obj2;
  };
  const obj4 = num(actionStatusAccessibilityLabel[4]);
  fn2.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn2.__workletHash = 1040596522101;
  fn2.__initData = __initData2;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const obj6 = num(actionStatusAccessibilityLabel[4]);
  class V {
    constructor() {
      let items1;
      let num3;
      num = 0;
      if (!actioned.get()) {
        num = -num * fontScale;
      }
      let withTimingResult = num;
      if (animate) {
        const withTiming = timing.withTiming;
        timing;
        const interpolate = ReanimatedRexport2.interpolate;
        let num2 = 0;
        ReanimatedRexport2;
        if (actioned.get()) {
          num2 = 1;
        }
        const items = [num, 0];
        withTimingResult = withTiming(interpolate(num2, [0, 1], items));
      }
      const obj2 = { transform: items1, opacity: num3 };
      items1 = [{ translateY: withTimingResult }];
      if (animate) {
        const withTiming2 = timing.withTiming;
        let num4 = 0;
        timing;
        if (actioned.get()) {
          num4 = 1;
        }
        num3 = withTiming2(num4);
      } else {
        num3 = 0;
        if (actioned.get()) {
          num3 = 1;
        }
      }
      return obj2;
    }
  }
  V.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  V.__workletHash = 2183035188794;
  V.__initData = __initData3;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle2 = obj6.useAnimatedStyle(V);
  const obj8 = num(actionStatusAccessibilityLabel[4]);
  class Y {
    constructor() {
      return actioned.get();
    }
  }
  Y.__closure = { actioned };
  Y.__workletHash = 9609826744629;
  Y.__initData = __initData4;
  const fn3 = function v(arg0, arg1) {
    const tmp = arg0 && false === arg1 && null != actionStatusAccessibilityLabel;
    if (tmp) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(announceActioned)(actionStatusAccessibilityLabel);
    }
  };
  fn3.__closure = { actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned };
  fn3.__workletHash = 14141240445417;
  fn3.__initData = __initData5;
  ({ actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned });
  const animatedReaction = obj8.useAnimatedReaction(Y, fn3);
  const tmp8 = closure_4;
  const obj10 = { style: items, children: items1 };
  items = [tmp3.container, animatedStyle];
  const tmp9 = animate;
  const tmp10 = closure_7;
  const View = actioned(actionStatusAccessibilityLabel[4]).View;
  items1 = [animate(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label }), , ];
  if (tmp) {
    const obj11 = { variant: str, maxFontSizeMultiplier, style: animatedStyle1, color: "text-default", lineClamp: 1, children: secondaryLabel };
    tmp = tmp9(tmp10, obj11);
  }
  items1[1] = tmp;
  const obj12 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: items2, lineClamp: 1, children: actionStatus };
  items2 = [tmp3.actionStatus, animatedStyle2];
  items1[2] = tmp9(tmp10, obj12);
  return tmp8(View, obj10);
};

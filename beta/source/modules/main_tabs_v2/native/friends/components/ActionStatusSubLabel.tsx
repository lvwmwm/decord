// Module ID: 18902
// Function ID: 18903
// Name: ActionStatusSubLabel
// Dependencies: [19, 21, 5170, 5179, 1652, 5783, 5798, 5402, 1705, 2]
// Exports: ActionStatusSubLabel

// Module 18902 (ActionStatusSubLabel)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5179 */;
import timing_timing from "timing/timing" /* 5402 */;
import Text_Text from "Text/Text" /* 5783 */;
import useFontScale from "useFontScale" /* 5798 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const module_1652 = _mod1652;
let flag, num2, num3, num4, obj1, result1, result2, tmp2, tmp3, tmp4, tmp4Result, tmp5Result, tmp6Result;

let c3;
let closure_4;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_7 = module_1652.createAnimatedComponent(Text_Text.Text);
let closure_8 = { code: "(function ActionStatusSubLabelTsx1(){let[hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};})" };
let closure_9 = { code: "(function ActionStatusSubLabelTsx2(){let[actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};})" };
let closure_10 = { code: "(function ActionStatusSubLabelTsx3(){let[actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};})" };
let closure_11 = { code: "(function ActionStatusSubLabelTsx4(){let[actioned]=this.__closure;return actioned.get();})" };
let closure_12 = { code: "(function ActionStatusSubLabelTsx5(actioned,actionedPrev){let[actionStatusAccessibilityLabel,scheduleOnRN,announceActioned]=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}scheduleOnRN(announceActioned,actionStatusAccessibilityLabel);})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ACTION_STATUS_SUB_LABEL_LINE_HEIGHT = 16;
export function ActionStatusSubLabel(lineHeight) {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let actioned;
  let animate;
  let items10;
  let items11;
  let items12;
  let label;
  let maxFontSizeMultiplier;
  let secondaryLabel;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp7;
  let tmp8;
  let tmp9;
  let num = lineHeight.lineHeight;
  if (num === undefined) {
    num = 16;
  }
  let str = lineHeight.textVariant;
  if (str === undefined) {
    str = "body-xs/medium";
  }
  ({ actioned, secondaryLabel, maxFontSizeMultiplier, animate } = lineHeight);
  let tmp = null != secondaryLabel;
  ({ label, actionStatus, actionStatusAccessibilityLabel } = lineHeight);
  let obj = useFontScale;
  const fontScale = obj.useFontScale();
  let tmp5 = closure_5();
  let tmp6 = _mod1652;
  let items = [closure_8, tmp, actioned, num, fontScale, animate, , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items[6] = timing_timing.withTiming;
  items[7] = _mod1652.interpolate;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class ActionStatusSubLabelTsx1 {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        tmp2 = closure_1;
        tmp = !closure_1.get();
      }
      result = closure_2 * closure_3;
      result1 = result;
      if (tmp) {
        num = 2;
        result1 = 2 * result;
      }
      tmp6Result = result1;
      if (closure_4) {
        obj = closure_1;
        tmp6Result = result1;
        if (closure_1.get()) {
          tmp6 = closure_5;
          tmp7 = closure_6;
          num2 = 0;
          if (obj.get()) {
            num2 = 1;
          }
          result2 = result;
          if (tmp) {
            num3 = 2;
            result2 = 2 * result;
          }
          items = [, ];
          items[0] = result2;
          items[1] = result;
          tmp6Result = tmp6(tmp7(num2, [0, 1], items));
        }
      }
      return { height: tmp6Result };
    }
  }
  let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ActionStatusSubLabelTsx1.__closure = items1;
  ActionStatusSubLabelTsx1.__workletHash = 12298524109370;
  ActionStatusSubLabelTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(ActionStatusSubLabelTsx1);
  const items2 = [closure_9, actioned, num, fontScale, animate, , ];
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items2[5] = timing_timing.withTiming;
  items2[6] = _mod1652.interpolate;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  class ActionStatusSubLabelTsx2 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num = closure_1 * closure_2;
      }
      tmp4Result = num;
      if (closure_3) {
        tmp4 = closure_4;
        tmp5 = closure_5;
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [0];
        items[1] = num;
        tmp4Result = tmp4(tmp5(num2, [0, 1], items));
      }
      obj1 = { transform: null };
      items1 = [];
      items1[0] = { translateY: tmp4Result };
      obj1.transform = items1;
      return obj1;
    }
  }
  const items3 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  ActionStatusSubLabelTsx2.__closure = items3;
  ActionStatusSubLabelTsx2.__workletHash = 15614830393132;
  ActionStatusSubLabelTsx2.__initData = tmp17;
  const animatedStyle2 = useAnimatedStyle2(ActionStatusSubLabelTsx2);
  const items4 = [closure_10, actioned, num, fontScale, animate, , ];
  const useAnimatedStyle3 = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items4[5] = timing_timing.withTiming;
  items4[6] = _mod1652.interpolate;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items4;
  class ActionStatusSubLabelTsx3 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (!closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num = -closure_1 * closure_2;
      }
      tmp5Result = num;
      tmp3 = closure_3;
      if (tmp3) {
        tmp5 = closure_4;
        tmp6 = closure_5;
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [, ];
        items[0] = num;
        items[1] = 0;
        tmp5Result = tmp5(tmp6(num2, [0, 1], items));
      }
      obj1 = { transform: null, opacity: null };
      items1 = [];
      items1[0] = { translateY: tmp5Result };
      obj1.transform = items1;
      if (tmp3) {
        tmp7 = closure_4;
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        num3 = tmp7(num4);
      } else {
        num3 = 0;
        if (obj.get()) {
          num3 = 1;
        }
      }
      obj1.opacity = num3;
      return obj1;
    }
  }
  const items5 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  ActionStatusSubLabelTsx3.__closure = items5;
  ActionStatusSubLabelTsx3.__workletHash = 16077800905475;
  ActionStatusSubLabelTsx3.__initData = tmp26;
  const animatedStyle3 = useAnimatedStyle3(ActionStatusSubLabelTsx3);
  const items6 = [closure_11, actioned];
  c0 = undefined;
  [tmp35, tmp36] = items6;
  const tmp2Result4 = _mod1652;
  class ActionStatusSubLabelTsx4 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp36];
  ActionStatusSubLabelTsx4.__closure = items7;
  ActionStatusSubLabelTsx4.__workletHash = 4722175005996;
  ActionStatusSubLabelTsx4.__initData = tmp35;
  const items8 = [closure_12, actionStatusAccessibilityLabel, , ];
  const useAnimatedReaction = tmp2Result4.useAnimatedReaction;
  items8[2] = _mod1705.scheduleOnRN;
  items8[3] = announceActioned;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp37, tmp38, tmp39, tmp40] = items8;
  class ActionStatusSubLabelTsx5 {
    constructor(arg0, arg1) {
      tmp = lineHeight;
      if (tmp) {
        tmp2 = arg1;
        flag = false;
        tmp = false === arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = null;
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        tmp7 = closure_0;
        tmp8 = closure_1(closure_2, closure_0);
      }
      return;
    }
  }
  const items9 = [tmp38, tmp39, tmp40];
  ActionStatusSubLabelTsx5.__closure = items9;
  ActionStatusSubLabelTsx5.__workletHash = 9075232784509;
  ActionStatusSubLabelTsx5.__initData = tmp37;
  const animatedReaction = useAnimatedReaction(ActionStatusSubLabelTsx4, ActionStatusSubLabelTsx5);
  let obj2 = { style: items10, children: items11 };
  items10 = [tmp5.container, animatedStyle];
  const View = module_1652.View;
  items11 = [_false(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle2, lineClamp: 1, children: label }), , ];
  const tmp42 = React3;
  if (tmp) {
    const obj3 = { variant: str, maxFontSizeMultiplier, style: animatedStyle2, color: "text-default", lineClamp: 1, children: secondaryLabel };
    tmp = tmp43(tmp44, obj3);
  }
  items11[1] = tmp;
  const obj4 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: items12, lineClamp: 1, children: actionStatus };
  items12 = [tmp5.actionStatus, animatedStyle3];
  items11[2] = _false(closure_7, obj4);
  return tmp42(View, obj2);
}

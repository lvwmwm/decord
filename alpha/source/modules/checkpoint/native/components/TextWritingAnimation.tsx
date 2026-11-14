// Module ID: 14497
// Function ID: 14498
// Name: TextWritingAnimation
// Dependencies: [32, 19, 17, 5307, 21, 5306, 14266, 504, 14271, 2]
// Exports: default

// Module 14497 (TextWritingAnimation)
import react_native from "react-native" /* 17 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_1;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useContext: closure_4, useEffect: hasOwnProperty, useState: metroRequire } = react);
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ hiddenText: { opacity: 0 }, animatedText: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, unrevealedText: { color: "transparent" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/TextWritingAnimation.tsx");

export default function TextWritingAnimation(isStepHeading) {
  let accessibilityLabel;
  let adjustsFontSizeToFit;
  let c3;
  let delay;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let lineClamp;
  let obj3;
  let str;
  let str2;
  let style;
  let text;
  let textStyle;
  let tmp12;
  let tmp18;
  let tmp7;
  let tmp9Result;
  let useReducedMotion;
  let variant;
  ({ style, textStyle, text } = isStepHeading);
  require = text;
  ({ accessibilityLabel, variant, adjustsFontSizeToFit, lineClamp, delay } = isStepHeading);
  if (delay === undefined) {
    delay = 0;
  }
  let flag = isStepHeading.isStepHeading;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  _slicedToArray = undefined;
  let tmp = closure_11();
  const tmp2 = delay;
  const tmp3 = stateFromStores;
  const items = [AccessibilityStore];
  const tmp4 = closure_4(delay(stateFromStores[6]));
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp7, c3] = closure_6(0);
  const items1 = [delay, stateFromStores, text];
  _slicedToArray(closure_6(0), 2);
  closure_5(() => {
    let handleAnimationFrame;
    const tmp = handleAnimationFrame;
    if (!tmp) {
      const _Date = Date;
      let closure_0 = Date.now() + closure_1;
      let _requestAnimationFrame = requestAnimationFrame;
      handleAnimationFrame = function handleAnimationFrame() {
        const bound = Math.max(Math.min((Date.now() - closure_0) / 400, 1), 0);
        c3(Math.floor(bound * require.length));
        if (bound < 1) {
          const _requestAnimationFrame = requestAnimationFrame;
          closure_1 = requestAnimationFrame(handleAnimationFrame);
        }
      };
      closure_1 = requestAnimationFrame(handleAnimationFrame);
      return () => cancelAnimationFrame(closure_1);
    }
  }, items1);
  if (stateFromStores) {
    const obj2 = { style, children: closure_9(tmp2(tmp3[8]), obj3) };
    obj3 = { isStepHeading: flag, accessibilityLabel, style: textStyle, variant, adjustsFontSizeToFit, lineClamp, children: text };
    tmp9Result = closure_9(View, obj2);
  } else {
    let tmp11;
    const tmp10 = View;
    if (flag) {
      tmp11 = tmp4;
    }
    const obj4 = { ref: tmp11, accessible: flag, accessibilityRole: str, accessibilityLabel: tmp12, style, children: items3 };
    str = undefined;
    if (flag) {
      str = "header";
    }
    tmp12 = undefined;
    if (flag) {
      let tmp14 = accessibilityLabel;
      if (accessibilityLabel == null) {
        tmp14 = text;
      }
      tmp12 = tmp14;
    }
    const tmp17 = !flag;
    const obj5 = { accessible: tmp17, accessibilityLabel: tmp18, accessibilityElementsHidden: flag, importantForAccessibility: str2, style: items2, variant, adjustsFontSizeToFit, lineClamp, children: text };
    tmp18 = undefined;
    const tmp2Result = tmp2(tmp3[8]);
    if (!flag) {
      tmp18 = accessibilityLabel;
    }
    str2 = undefined;
    if (flag) {
      str2 = "no-hide-descendants";
    }
    items2 = [tmp.hiddenText, textStyle];
    items3 = [closure_9(tmp2Result, obj5), ];
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: items4, variant, adjustsFontSizeToFit, lineClamp, children: items5 };
    items4 = [tmp.animatedText, textStyle];
    items5 = [, ];
    const tmp2Result3 = tmp2(tmp3[8]);
    items5[0] = text.substring(0, tmp7);
    const obj7 = { variant, style: items6, children: text.substring(tmp7) };
    items6 = [textStyle, tmp.unrevealedText];
    const tmp2Result4 = tmp2(tmp3[8]);
    items5[1] = closure_9(tmp2Result4, obj7);
    items3[1] = closure_10(tmp2Result3, obj6);
    tmp9Result = tmp9(tmp10, obj4);
  }
  return tmp9Result;
};
export const DURATION = 400;

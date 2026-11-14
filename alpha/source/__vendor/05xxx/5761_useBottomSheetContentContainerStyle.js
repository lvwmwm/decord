// Module ID: 5761
// Function ID: 5762
// Name: useBottomSheetContentContainerStyle
// Dependencies: [32, 19, 17, 5578, 1655]
// Exports: useBottomSheetContentContainerStyle

// Module 5761 (useBottomSheetContentContainerStyle)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require, closure_3, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useMemo: c3, useState: closure_4 } = react);
({ Platform: hasOwnProperty, StyleSheet: metroRequire } = react_native);
let closure_7 = { code: "(function pnpm_useBottomSheetContentContainerStyleTs1(){let[animatedFooterHeight]=this.__closure;return animatedFooterHeight.get();})" };
let closure_8 = { code: "(function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){let[enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight]=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}})" };

export function useBottomSheetContentContainerStyle(flag, contentContainerStyle) {
  let animatedContentHeight;
  let animatedFooterHeight;
  let first;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  _require = flag;
  dependencyMap = contentContainerStyle;
  let tmp = first(closure_4(0), 2);
  first = tmp[0];
  const tmp3 = tmp[1];
  let obj = require("react");
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ animatedFooterHeight, animatedContentHeight } = bottomSheetInternal);
  let items = [contentContainerStyle];
  let tmp7 = closure_3(() => {
    let obj;
    if (contentContainerStyle) {
      const _Array = Array;
      let applyResult = tmp2;
      if (Array.isArray(contentContainerStyle)) {
        metroRequire = metroRequire.compose;
        const items = [];
        HermesBuiltin.arraySpread(items, contentContainerStyle, 0);
        applyResult = HermesBuiltin.apply(metroRequire, items, metroRequire);
      }
      obj = applyResult;
    } else {
      obj = {};
    }
    return obj;
  }, items);
  closure_3 = tmp7;
  const items1 = [first, flag, tmp7];
  const tmp8 = closure_3(() => {
    let padding;
    let paddingBottom;
    let paddingVertical;
    if (flag) {
      let num = 0;
      if (closure_3) {
        num = 0;
        if (typeof closure_3 === "object") {
          ({ paddingBottom, padding, paddingVertical } = closure_3);
          if (undefined === paddingBottom) {
            if (undefined === paddingVertical) {
              num = 0;
              const tmp2 = undefined !== padding && typeof padding === "number";
              if (tmp2) {
                num = padding;
              }
            } else {
              num = paddingVertical;
            }
          } else {
            num = paddingBottom;
          }
        }
      }
      const items = [closure_3, ];
      const obj = { paddingBottom: num + first, overflow: "visible" };
      items[1] = obj;
      return items;
    } else {
      return closure_3;
    }
  }, items1);
  const items2 = [closure_7, animatedFooterHeight];
  [tmp10, tmp11] = items2;
  function pnpm_useBottomSheetContentContainerStyleTs1() {
    return _undefined.get();
  }
  const items3 = [tmp11];
  pnpm_useBottomSheetContentContainerStyleTs1.__closure = items3;
  pnpm_useBottomSheetContentContainerStyleTs1.__workletHash = 10228127122879;
  pnpm_useBottomSheetContentContainerStyleTs1.__initData = tmp10;
  const items4 = [closure_8, flag, , , , ];
  const useAnimatedReaction = require("module_1655").useAnimatedReaction;
  const tmp9 = require("module_1655");
  items4[2] = require("module_1655").runOnJS;
  items4[3] = tmp3;
  items4[4] = closure_5;
  items4[5] = animatedContentHeight;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items4;
  function pnpm_useBottomSheetContentContainerStyleTs2(arg0, arg1) {
    const tmp = c0;
    if (tmp) {
      _undefined(c2)(arg0);
      if ("web" === _undefined2.OS) {
        if (arg0) {
          const tmp7 = arg1;
          if (!tmp7) {
            const result = _undefined3.set(_undefined3.get() + arg0);
          }
        }
      }
    }
  }
  const items5 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  pnpm_useBottomSheetContentContainerStyleTs2.__closure = items5;
  pnpm_useBottomSheetContentContainerStyleTs2.__workletHash = 17308657054539;
  pnpm_useBottomSheetContentContainerStyleTs2.__initData = tmp12;
  const items6 = [animatedFooterHeight, animatedContentHeight, flag];
  const animatedReaction = useAnimatedReaction(pnpm_useBottomSheetContentContainerStyleTs1, pnpm_useBottomSheetContentContainerStyleTs2, items6);
  return tmp8;
}

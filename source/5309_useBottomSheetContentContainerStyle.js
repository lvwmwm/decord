// Module ID: 5309
// Function ID: 45822
// Name: useBottomSheetContentContainerStyle
// Dependencies: [65, 57, 31, 27, 5197, 1582]
// Exports: useBottomSheetContentContainerStyle

// Module 5309 (useBottomSheetContentContainerStyle)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ useMemo: closure_4, useState: closure_5 } = result);
({ Platform: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
let closure_8 = { code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}" };
let closure_9 = { code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}" };

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(enableFooterMarginAdjustment, contentContainerStyle) {
  const _require = enableFooterMarginAdjustment;
  const dependencyMap = contentContainerStyle;
  const tmp = callback(callback2(0), 2);
  const first = tmp[0];
  callback = tmp3;
  let obj = _require(5197);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  let items = [contentContainerStyle];
  const tmp5 = animatedFooterHeight(() => {
    if (closure_1) {
      const _Array = Array;
      if (Array.isArray(closure_1)) {
        const compose = outer1_7.compose;
        let applyResult = compose.apply(outer1_7, first(closure_1));
      } else {
        applyResult = closure_1;
      }
    } else {
      return {};
    }
  }, items);
  callback2 = tmp5;
  const items1 = [first, enableFooterMarginAdjustment, tmp5];
  const tmp6 = animatedFooterHeight(() => {
    let padding;
    let paddingBottom;
    let paddingVertical;
    if (closure_0) {
      let num = 0;
      if (tmp) {
        num = 0;
        if ("object" === typeof closure_5) {
          ({ paddingBottom, padding, paddingVertical } = closure_5);
          if (undefined === paddingBottom) {
            if (undefined === paddingVertical) {
              let tmp4 = undefined !== padding;
              if (tmp4) {
                tmp4 = "number" === typeof padding;
              }
              num = 0;
              if (tmp4) {
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
      const items = [closure_5, ];
      const obj = { paddingBottom: num + first, overflow: "visible" };
      items[1] = obj;
      return items;
    } else {
      return tmp;
    }
  }, items1);
  /* worklet (recovered source) */ function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}
  pnpm_useBottomSheetContentContainerStyleTs1.__closure = { animatedFooterHeight };
  pnpm_useBottomSheetContentContainerStyleTs1.__workletHash = 10172145694310;
  pnpm_useBottomSheetContentContainerStyleTs1.__initData = closure_8;
  /* worklet (recovered source) */ function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}
  obj = { enableFooterMarginAdjustment, runOnJS: _require(1582).runOnJS, setFooterHeight: tmp3, Platform: closure_6, animatedContentHeight };
  pnpm_useBottomSheetContentContainerStyleTs2.__closure = obj;
  pnpm_useBottomSheetContentContainerStyleTs2.__workletHash = 1149497927090;
  pnpm_useBottomSheetContentContainerStyleTs2.__initData = closure_9;
  const items2 = [animatedFooterHeight, animatedContentHeight, enableFooterMarginAdjustment];
  const animatedReaction = _require(1582).useAnimatedReaction(pnpm_useBottomSheetContentContainerStyleTs1, pnpm_useBottomSheetContentContainerStyleTs2, items2);
  return tmp6;
};

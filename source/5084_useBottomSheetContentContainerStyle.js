// Module ID: 5084
// Function ID: 43380
// Name: useBottomSheetContentContainerStyle
// Dependencies: []
// Exports: useBottomSheetContentContainerStyle

// Module 5084 (useBottomSheetContentContainerStyle)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useMemo: closure_4, useState: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ Platform: closure_6, StyleSheet: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = { code: "function pnpm_useBottomSheetContentContainerStyleTs1(){const{animatedFooterHeight}=this.__closure;return animatedFooterHeight.get();}" };
let closure_9 = { code: "function pnpm_useBottomSheetContentContainerStyleTs2(result,previousFooterHeight){const{enableFooterMarginAdjustment,runOnJS,setFooterHeight,Platform,animatedContentHeight}=this.__closure;if(!enableFooterMarginAdjustment){return;}runOnJS(setFooterHeight)(result);if(Platform.OS==='web'){if(result&&!previousFooterHeight){const contentHeight=animatedContentHeight.get();animatedContentHeight.set(contentHeight+result);}}}" };

export const useBottomSheetContentContainerStyle = function useBottomSheetContentContainerStyle(enableFooterMarginAdjustment, contentContainerStyle) {
  contentContainerStyle = enableFooterMarginAdjustment;
  const dependencyMap = contentContainerStyle;
  const tmp = callback(tmp5(0), 2);
  const first = tmp[0];
  let closure_2 = first;
  const callback = tmp3;
  let obj = contentContainerStyle(dependencyMap[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedFooterHeight = bottomSheetInternal.animatedFooterHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const items = [contentContainerStyle];
  const tmp5 = animatedFooterHeight(() => {
    if (arg1) {
      const _Array = Array;
      if (Array.isArray(arg1)) {
        const compose = compose.compose;
        let applyResult = compose.apply(compose, first(arg1));
      } else {
        applyResult = arg1;
      }
    } else {
      return {};
    }
  }, items);
  const items1 = [first, enableFooterMarginAdjustment, tmp5];
  const tmp6 = animatedFooterHeight(() => {
    let padding;
    let paddingBottom;
    let paddingVertical;
    if (arg0) {
      let num = 0;
      if (tmp) {
        num = 0;
        if ("object" === typeof tmp5) {
          ({ paddingBottom, padding, paddingVertical } = tmp5);
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
      const items = [tmp5, ];
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
  obj = { enableFooterMarginAdjustment, runOnJS: contentContainerStyle(dependencyMap[5]).runOnJS, setFooterHeight: tmp3, Platform: closure_6, animatedContentHeight };
  pnpm_useBottomSheetContentContainerStyleTs2.__closure = obj;
  pnpm_useBottomSheetContentContainerStyleTs2.__workletHash = 1149497927090;
  pnpm_useBottomSheetContentContainerStyleTs2.__initData = closure_9;
  const items2 = [animatedFooterHeight, animatedContentHeight, enableFooterMarginAdjustment];
  const animatedReaction = contentContainerStyle(dependencyMap[5]).useAnimatedReaction(pnpm_useBottomSheetContentContainerStyleTs1, pnpm_useBottomSheetContentContainerStyleTs2, items2);
  return tmp6;
};

// Module ID: 5627
// Function ID: 5628
// Name: BottomSheetContent
// Dependencies: [19, 21, 5429, 1652, 5428, 5425, 5441, 5628]

// Module 5627 (BottomSheetContent)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5425 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 5428 */;
import _mod5429 from "module_5429" /* 5429 */;
import react_mod from "react" /* 19 */;

let c3;
let memo;
let tmp;
const _mod5441 = tmp(5441);
let react = react_mod;
({ useMemo: c3, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_5 = { code: "(function pnpm_BottomSheetContentTsx1(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition]=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);})" };
let closure_6 = { code: "(function pnpm_BottomSheetContentTsx2(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer]=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;})" };
let closure_7 = { code: "(function pnpm_BottomSheetContentTsx3(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax]=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};})" };
const memoResult = memo(function BottomSheetContentComponent(detached) {
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessible;
  let animatedContainerHeight;
  let animatedContentHeight;
  let animatedHandleHeight;
  let animatedHighestSnapPoint;
  let animatedKeyboardHeightInContainer;
  let animatedKeyboardState;
  let animatedPosition;
  let animatedSheetHeight;
  let animationConfigs;
  let children;
  let enableContentPanningGesture;
  let enableDynamicSizing;
  let isInTemporaryPosition;
  let keyboardBehavior;
  let overDragResistanceFactor;
  let overrideReduceMotion;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  detached = detached.detached;
  ({ animationConfigs, overrideReduceMotion, keyboardBehavior } = detached);
  const tmp = require;
  ({ accessible, accessibilityLabel, accessibilityHint, accessibilityRole, children } = detached);
  let obj = _mod5429;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ enableDynamicSizing, overDragResistanceFactor, animatedPosition, animatedHandleHeight, animatedHighestSnapPoint, animatedContainerHeight, animatedContentHeight, animatedSheetHeight, animatedKeyboardState, animatedKeyboardHeightInContainer, isInTemporaryPosition, enableContentPanningGesture } = bottomSheetInternal);
  let items = [closure_5, animatedContainerHeight, , , , , , , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  items[2] = DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT;
  items[3] = animatedKeyboardState;
  items[4] = animatedKeyboardHeightInContainer;
  items[5] = animatedHandleHeight;
  items[6] = animatedSheetHeight;
  items[7] = keyboardBehavior;
  items[8] = GESTURE_SOURCE.KEYBOARD_BEHAVIOR;
  items[9] = GESTURE_SOURCE.KEYBOARD_STATE;
  items[10] = isInTemporaryPosition;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function pnpm_BottomSheetContentTsx1() {
    const obj = _undefined;
    if (_undefined.get() === c1) {
      return 0;
    } else {
      let diff1;
      const value = _undefined2.get();
      const value3 = _undefined3.get();
      const _Math2 = Math;
      const bound = Math.max(0, _undefined4.get());
      const value4 = obj.get();
      const diff = _undefined5.get() - bound;
      const obj2 = _undefined5;
      if (_undefined6.extend === c6) {
        diff1 = diff;
        if (value === _undefined7.SHOWN) {
          diff1 = diff - value3;
        }
      } else if (_undefined6.fillParent === c6) {
        diff1 = diff;
        if (_undefined8.get()) {
          let diff2;
          if (value === _undefined7.SHOWN) {
            diff2 = value4 - bound - value3;
          } else {
            diff2 = value4 - bound;
          }
          diff1 = diff2;
        }
      } else {
        diff1 = diff;
        if (_undefined6.interactive === c6) {
          diff1 = diff;
          if (_undefined8.get()) {
            let sum = diff + value3;
            if (value === _undefined7.SHOWN) {
              diff1 = diff;
              if (value3 + obj2.get() > value4) {
                diff1 = value4 - value3 - bound;
              }
            } else {
              if (sum + bound > value4) {
                sum = value4 - bound;
              }
              diff1 = sum;
            }
          }
        }
      }
      const _Math = Math;
      return Math.max(diff1, 0);
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  pnpm_BottomSheetContentTsx1.__closure = items1;
  pnpm_BottomSheetContentTsx1.__workletHash = 470844133663;
  pnpm_BottomSheetContentTsx1.__initData = tmp5;
  const items2 = [animatedContainerHeight, animatedHandleHeight, animatedKeyboardHeightInContainer, animatedKeyboardState, animatedSheetHeight, isInTemporaryPosition, keyboardBehavior];
  const derivedValue = useDerivedValue(pnpm_BottomSheetContentTsx1, items2);
  const items3 = [closure_6, animatedContainerHeight, , , , , , , ];
  const useDerivedValue2 = _mod1652.useDerivedValue;
  _mod1652;
  items3[2] = DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT;
  items3[3] = animatedHighestSnapPoint;
  items3[4] = animatedPosition;
  items3[5] = overDragResistanceFactor;
  items3[6] = animatedKeyboardState;
  items3[7] = GESTURE_SOURCE.KEYBOARD_STATE;
  items3[8] = animatedKeyboardHeightInContainer;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items3;
  function pnpm_BottomSheetContentTsx2() {
    const value = _undefined.get();
    if (value === c1) {
      return 0;
    } else {
      const _Math = Math;
      const value2 = _undefined2.get();
      const _Math2 = Math;
      const result = Math.sqrt(max(value2, _undefined3.get()) - -1 * value) * c4;
      let sum = result;
      if (_undefined4.get() === _undefined5.SHOWN) {
        sum = result + _undefined6.get();
      }
      return sum;
    }
  }
  const items4 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  pnpm_BottomSheetContentTsx2.__closure = items4;
  pnpm_BottomSheetContentTsx2.__workletHash = 16800465693302;
  pnpm_BottomSheetContentTsx2.__initData = tmp18;
  const items5 = [overDragResistanceFactor, animatedPosition, animatedContainerHeight, animatedHighestSnapPoint, animatedKeyboardState, animatedKeyboardHeightInContainer];
  const derivedValue2 = useDerivedValue2(pnpm_BottomSheetContentTsx2, items5);
  const items6 = [closure_7, animatedContainerHeight, , , , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items6[2] = DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT;
  items6[3] = enableDynamicSizing;
  items6[4] = animatedContentHeight;
  items6[5] = detached;
  items6[6] = derivedValue2;
  items6[7] = _mod5441.animate;
  items6[8] = animationConfigs;
  items6[9] = overrideReduceMotion;
  items6[10] = derivedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items6;
  function pnpm_BottomSheetContentTsx3() {
    let obj2;
    let obj3;
    if (_undefined.get() === c1) {
      return {};
    } else {
      const tmp9 = c2;
      if (tmp9) {
        if (_undefined2.get() === tmp) {
          return {};
        }
      }
      let num = 0;
      if (!c4) {
        num = _undefined3.get();
      }
      const obj = { paddingBottom: _undefined4(obj2), height: _undefined4(obj3) };
      obj2 = { point: num, configs, overrideReduceMotion };
      obj3 = { point: _undefined5.get() + num, configs, overrideReduceMotion };
      return obj;
    }
  }
  const items7 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  pnpm_BottomSheetContentTsx3.__closure = items7;
  pnpm_BottomSheetContentTsx3.__workletHash = 16992191123379;
  pnpm_BottomSheetContentTsx3.__initData = tmp29;
  const items8 = [overDragResistanceFactor, enableDynamicSizing, detached, animationConfigs, overrideReduceMotion, animatedContentHeight, derivedValue, animatedContainerHeight];
  const animatedStyle = useAnimatedStyle(pnpm_BottomSheetContentTsx3, items8);
  const items9 = [animatedStyle, detached];
  const style = _false(() => {
    const items = [detached ? { overflow: "visible" } : { overflow: "hidden" }, animatedStyle];
    return items;
  }, items9);
  if (enableContentPanningGesture) {
    let View = tmp42(5628);
  } else {
    View = tmp42(1652).View;
  }
  return <View accessible={accessible} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} accessibilityRole={accessibilityRole} style={style}>{children}</View>;
});
memoResult.displayName = "BottomSheetContent";

export const BottomSheetContent = memoResult;

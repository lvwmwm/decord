// Module ID: 5321
// Function ID: 45851
// Name: memo
// Dependencies: [31, 33, 5194, 1582, 5193, 5190, 5206, 5322]

// Module 5321 (memo)
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_3;
let memo;
({ useMemo: closure_3, memo } = result);
let closure_5 = { code: "function pnpm_BottomSheetContentTsx1(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);}" };
let closure_6 = { code: "function pnpm_BottomSheetContentTsx2(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer}=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;}" };
let closure_7 = { code: "function pnpm_BottomSheetContentTsx3(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};}" };
const memoResult = memo(function BottomSheetContentComponent(detached) {
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessible;
  let children;
  detached = detached.detached;
  const animationConfigs = detached.animationConfigs;
  const overrideReduceMotion = detached.overrideReduceMotion;
  const keyboardBehavior = detached.keyboardBehavior;
  ({ accessible, accessibilityLabel, accessibilityHint, accessibilityRole, children } = detached);
  let obj = detached(overrideReduceMotion[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const overDragResistanceFactor = bottomSheetInternal.overDragResistanceFactor;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const animatedHighestSnapPoint = bottomSheetInternal.animatedHighestSnapPoint;
  const animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const animatedSheetHeight = bottomSheetInternal.animatedSheetHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  const isInTemporaryPosition = bottomSheetInternal.isInTemporaryPosition;
  let obj1 = detached(overrideReduceMotion[3]);
  /* worklet (recovered source) */ function pnpm_BottomSheetContentTsx1(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);}
  obj = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, animatedKeyboardState, animatedKeyboardHeightInContainer, animatedHandleHeight, animatedSheetHeight, keyboardBehavior, KEYBOARD_BEHAVIOR: detached(overrideReduceMotion[5]).KEYBOARD_BEHAVIOR, KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE, isInTemporaryPosition };
  pnpm_BottomSheetContentTsx1.__closure = obj;
  pnpm_BottomSheetContentTsx1.__workletHash = 2170474579366;
  pnpm_BottomSheetContentTsx1.__initData = overDragResistanceFactor;
  let items = [animatedContainerHeight, animatedHandleHeight, animatedKeyboardHeightInContainer, animatedKeyboardState, animatedSheetHeight, isInTemporaryPosition, keyboardBehavior];
  const derivedValue = obj1.useDerivedValue(pnpm_BottomSheetContentTsx1, items);
  /* worklet (recovered source) */ function pnpm_BottomSheetContentTsx2(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer}=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;}
  obj = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, animatedHighestSnapPoint, animatedPosition, overDragResistanceFactor, animatedKeyboardState, KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE, animatedKeyboardHeightInContainer };
  pnpm_BottomSheetContentTsx2.__closure = obj;
  pnpm_BottomSheetContentTsx2.__workletHash = 3484699588399;
  pnpm_BottomSheetContentTsx2.__initData = animatedPosition;
  const items1 = [overDragResistanceFactor, animatedPosition, animatedContainerHeight, animatedHighestSnapPoint, animatedKeyboardState, animatedKeyboardHeightInContainer];
  const derivedValue1 = detached(overrideReduceMotion[3]).useDerivedValue(pnpm_BottomSheetContentTsx2, items1);
  const obj4 = detached(overrideReduceMotion[3]);
  /* worklet (recovered source) */ function pnpm_BottomSheetContentTsx3(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};}
  obj1 = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, enableDynamicSizing, animatedContentHeight, detached, animatedPaddingBottom: derivedValue1, animate: detached(overrideReduceMotion[6]).animate, animationConfigs, overrideReduceMotion, animatedContentHeightMax: derivedValue };
  pnpm_BottomSheetContentTsx3.__closure = obj1;
  pnpm_BottomSheetContentTsx3.__workletHash = 8203943631786;
  pnpm_BottomSheetContentTsx3.__initData = animatedHandleHeight;
  const items2 = [overDragResistanceFactor, enableDynamicSizing, detached, animationConfigs, overrideReduceMotion, animatedContentHeight, derivedValue, animatedContainerHeight];
  const animatedStyle = detached(overrideReduceMotion[3]).useAnimatedStyle(pnpm_BottomSheetContentTsx3, items2);
  const items3 = [animatedStyle, detached];
  const style = keyboardBehavior(() => {
    const obj = {};
    if (detached) {
      obj.overflow = "visible";
      let tmp = obj;
    } else {
      obj.overflow = "hidden";
      tmp = obj;
    }
    const items = [tmp, animatedStyle];
    return items;
  }, items3);
  if (bottomSheetInternal.enableContentPanningGesture) {
    let View = tmp6(tmp7[7]);
  } else {
    View = tmp6(tmp7[3]).View;
  }
  return enableDynamicSizing(View, { accessible, accessibilityLabel, accessibilityHint, accessibilityRole, style, children });
});
memoResult.displayName = "BottomSheetContent";

export const BottomSheetContent = memoResult;

// Module ID: 5299
// Function ID: 45764
// Name: pnpm_useGestureEventsHandlersDefaultTsx1
// Dependencies: [27, 5190, 5197, 1582, 5300, 5301]
// Exports: useGestureEventsHandlersDefault

// Module 5299 (pnpm_useGestureEventsHandlersDefaultTsx1)
import get_ActivityIndicator from "get ActivityIndicator";

const Platform = get_ActivityIndicator.Platform;
let obj = { initialPosition: 0, initialKeyboardState: require("GESTURE_SOURCE").KEYBOARD_STATE.UNDETERMINED, isScrollablePositionLocked: false };
const dismiss = get_ActivityIndicator.Keyboard.dismiss;
/* worklet (recovered source) */ function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}
pnpm_useGestureEventsHandlersDefaultTsx1.__closure = {};
pnpm_useGestureEventsHandlersDefaultTsx1.__workletHash = 16627033127293;
pnpm_useGestureEventsHandlersDefaultTsx1.__initData = { code: "function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}" };
let closure_6 = { code: "function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){const{stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY}=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}}" };
let closure_7 = { code: "function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){const{animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor}=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;}" };
let closure_8 = { code: "function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){const{animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY}=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);}" };
let closure_9 = { code: "function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){const{resetContext,context}=this.__closure;resetContext(context);}" };

export const useGestureEventsHandlersDefault = function useGestureEventsHandlersDefault() {
  let obj = animatedPosition(animatedSnapPoints[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedPosition = bottomSheetInternal.animatedPosition;
  animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeight = bottomSheetInternal.animatedKeyboardHeight;
  const animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedHighestSnapPoint = bottomSheetInternal.animatedHighestSnapPoint;
  const animatedClosedPosition = bottomSheetInternal.animatedClosedPosition;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const enableOverDrag = bottomSheetInternal.enableOverDrag;
  const enablePanDownToClose = bottomSheetInternal.enablePanDownToClose;
  const overDragResistanceFactor = bottomSheetInternal.overDragResistanceFactor;
  const isInTemporaryPosition = bottomSheetInternal.isInTemporaryPosition;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const enableBlurKeyboardOnGesture = bottomSheetInternal.enableBlurKeyboardOnGesture;
  const animateToPosition = bottomSheetInternal.animateToPosition;
  const stopAnimation = bottomSheetInternal.stopAnimation;
  const sharedValue = animatedPosition(animatedSnapPoints[3]).useSharedValue(Object.assign({}, animatedKeyboardHeight));
  obj = {};
  const obj2 = animatedPosition(animatedSnapPoints[3]);
  const items = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  obj.handleOnStart = animatedPosition(animatedSnapPoints[3]).useWorkletCallback((() => {
    function handleOnStart(arg0, arg1) {
      outer1_16();
      let tmp3 = outer1_14;
      if (outer1_14) {
        tmp3 = tmp2 === animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.SHOWN;
      }
      if (tmp3) {
        const HIDDEN = animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.HIDDEN;
        let obj = animatedPosition(animatedSnapPoints[3]);
        obj.runOnJS(animatedContainerHeight)();
      }
      obj = { initialPosition: outer1_0.value, initialKeyboardState: outer1_2.value };
      outer1_17.value = Object.assign({}, outer1_17.value, obj);
      if (outer1_8.value > 0) {
        const _Object = Object;
        obj = { isScrollablePositionLocked: true };
        outer1_17.value = Object.assign({}, outer1_17.value, obj);
      }
    }
    handleOnStart.__closure = { stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedContainerHeight, context: sharedValue, animatedPosition, animatedScrollableContentOffsetY };
    handleOnStart.__workletHash = 9400766587341;
    handleOnStart.__initData = animatedHighestSnapPoint;
    return handleOnStart;
  })(), items);
  const obj4 = animatedPosition(animatedSnapPoints[3]);
  const items1 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  obj.handleOnChange = animatedPosition(animatedSnapPoints[3]).useWorkletCallback((() => {
    function handleOnChange(arg0, translationY) {
      let initialPosition = outer1_6.value;
      let value = outer1_12.value;
      if (value) {
        value = outer1_17.value.initialKeyboardState === animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.SHOWN;
      }
      if (value) {
        initialPosition = outer1_17.value.initialPosition;
      }
      value = outer1_12.value;
      if (value) {
        value = outer1_17.value.initialPosition < initialPosition;
      }
      if (value) {
        initialPosition = outer1_17.value.initialPosition;
      }
      if (outer1_10) {
        value = outer1_4.value;
      } else {
        value = outer1_1.value[0];
      }
      if (outer1_17.value.initialPosition !== initialPosition) {
        let num3 = 0;
        const sum = outer1_17.value.initialPosition + translationY.translationY;
        const sum1 = sum + num3;
        let obj = animatedPosition(animatedSnapPoints[4]);
        let isScrollablePositionLocked = outer1_17.value.isScrollablePositionLocked;
        if (isScrollablePositionLocked) {
          isScrollablePositionLocked = arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.CONTENT;
        }
        if (isScrollablePositionLocked) {
          isScrollablePositionLocked = outer1_0.value === initialPosition;
        }
        if (isScrollablePositionLocked) {
          const _Object = Object;
          obj = { isScrollablePositionLocked: false };
          outer1_17.value = Object.assign({}, outer1_17.value, obj);
        }
        if (outer1_9) {
          if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.HANDLE) {
            if (sum < initialPosition) {
              const _Math3 = Math;
              outer1_0.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * outer1_11;
            }
          }
          if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.HANDLE) {
            if (sum > value) {
              const _Math2 = Math;
              outer1_0.value = value + Math.sqrt(sum - value + 1) * outer1_11;
            }
          }
          if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.CONTENT) {
            if (sum + num3 > value) {
              const _Math = Math;
              outer1_0.value = value + Math.sqrt(sum + num3 - value + 1) * outer1_11;
            }
          }
        }
        outer1_0.value = obj.clamp(sum1, initialPosition, value);
        const clampResult = obj.clamp(sum1, initialPosition, value);
      }
      num3 = -1 * outer1_8.value;
    }
    handleOnChange.__closure = { animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor };
    handleOnChange.__workletHash = 6221237616078;
    handleOnChange.__initData = animatedClosedPosition;
    return handleOnChange;
  })(), items1);
  const obj5 = animatedPosition(animatedSnapPoints[3]);
  const items2 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  obj.handleOnEnd = animatedPosition(animatedSnapPoints[3]).useWorkletCallback((() => {
    function handleOnEnd(arg0, translationY) {
      let absoluteY;
      let velocityY;
      ({ absoluteY, velocityY } = translationY);
      if (outer1_12.value) {
        if (outer1_17.value.initialPosition >= outer1_0.value) {
          if (outer1_17.value.initialPosition > outer1_0.value) {
            outer1_15(outer1_17.value.initialPosition, animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
          }
        }
      }
      if (outer1_5.value !== animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE.UNDETERMINED) {
        let value = outer1_5.value;
        const VIEW = animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE.VIEW;
      }
      let tmp8 = outer1_17.value.initialKeyboardState === animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.SHOWN;
      if (tmp8) {
        tmp8 = outer1_0.value > outer1_17.value.initialPosition;
      }
      if (tmp8) {
        animatedPosition(animatedSnapPoints[3]).runOnJS(animatedContainerHeight)();
        const obj = animatedPosition(animatedSnapPoints[3]);
      }
      if (outer1_12.value) {
        outer1_12.value = false;
      }
      value = outer1_1.value;
      const substr = value.slice();
      if (outer1_10) {
        substr.unshift(outer1_7.value);
      }
      const snapPointResult = animatedPosition(animatedSnapPoints[5]).snapPoint(translationY.translationY + outer1_17.value.initialPosition, velocityY, substr);
      if (snapPointResult !== outer1_0.value) {
        let tmp20 = arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.CONTENT;
        if (tmp20) {
          tmp20 = outer1_8.value > 0;
        }
        if (tmp20) {
          tmp20 = tmp;
        }
        if (!tmp20) {
          outer1_15(snapPointResult, animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
        }
      }
    }
    handleOnEnd.__closure = { animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedContainerHeight, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY };
    handleOnEnd.__workletHash = 8667894097210;
    handleOnEnd.__initData = animatedScrollableContentOffsetY;
    return handleOnEnd;
  })(), items2);
  const obj6 = animatedPosition(animatedSnapPoints[3]);
  const items3 = [sharedValue];
  obj.handleOnFinalize = animatedPosition(animatedSnapPoints[3]).useWorkletCallback((() => {
    function handleOnFinalize() {
      animatedScrollableType(outer1_17);
    }
    handleOnFinalize.__closure = { resetContext: animatedScrollableType, context: sharedValue };
    handleOnFinalize.__workletHash = 8824211868683;
    handleOnFinalize.__initData = enableOverDrag;
    return handleOnFinalize;
  })(), items3);
  return obj;
};

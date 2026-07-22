// Module ID: 5296
// Function ID: 45745
// Name: pnpm_useGestureEventsHandlersDefaultTsx1
// Dependencies: []
// Exports: useGestureEventsHandlersDefault

// Module 5296 (pnpm_useGestureEventsHandlersDefaultTsx1)
const _module = require(dependencyMap[0]);
const Platform = _module.Platform;
const obj = { <string:1901133828>: "decimal-pad", <string:1174552852>: "number-pad", <string:2186477572>: "phone-pad", initialKeyboardState: require(dependencyMap[1]).KEYBOARD_STATE.UNDETERMINED };
const dismiss = _module.Keyboard.dismiss;
/* worklet (recovered source) */ function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}
pnpm_useGestureEventsHandlersDefaultTsx1.__closure = {};
pnpm_useGestureEventsHandlersDefaultTsx1.__workletHash = 16627033127293;
pnpm_useGestureEventsHandlersDefaultTsx1.__initData = { code: "function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}" };
let closure_6 = { code: "function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){const{stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY}=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}}" };
let closure_7 = { code: "function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){const{animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor}=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;}" };
let closure_8 = { code: "function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){const{animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY}=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);}" };
let closure_9 = { code: "function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){const{resetContext,context}=this.__closure;resetContext(context);}" };

export const useGestureEventsHandlersDefault = function useGestureEventsHandlersDefault() {
  let obj = require(dependencyMap[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const require = animatedPosition;
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const dependencyMap = animatedSnapPoints;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const Platform = animatedKeyboardState;
  const animatedKeyboardHeight = bottomSheetInternal.animatedKeyboardHeight;
  obj = animatedKeyboardHeight;
  const animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  const dismiss = animatedContainerHeight;
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedHighestSnapPoint = bottomSheetInternal.animatedHighestSnapPoint;
  let closure_6 = animatedHighestSnapPoint;
  const animatedClosedPosition = bottomSheetInternal.animatedClosedPosition;
  let closure_7 = animatedClosedPosition;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  let closure_8 = animatedScrollableContentOffsetY;
  const enableOverDrag = bottomSheetInternal.enableOverDrag;
  let closure_9 = enableOverDrag;
  const enablePanDownToClose = bottomSheetInternal.enablePanDownToClose;
  const overDragResistanceFactor = bottomSheetInternal.overDragResistanceFactor;
  const isInTemporaryPosition = bottomSheetInternal.isInTemporaryPosition;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const enableBlurKeyboardOnGesture = bottomSheetInternal.enableBlurKeyboardOnGesture;
  const animateToPosition = bottomSheetInternal.animateToPosition;
  const stopAnimation = bottomSheetInternal.stopAnimation;
  const sharedValue = require(dependencyMap[3]).useSharedValue(Object.assign({}, obj));
  obj = {};
  const obj2 = require(dependencyMap[3]);
  const items = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  obj.handleOnStart = require(dependencyMap[3]).useWorkletCallback(() => {
    function handleOnStart(arg0, arg1) {
      callback();
      let tmp3 = closure_14;
      if (closure_14) {
        tmp3 = tmp2 === lib(closure_1[1]).KEYBOARD_STATE.SHOWN;
      }
      if (tmp3) {
        const HIDDEN = lib(closure_1[1]).KEYBOARD_STATE.HIDDEN;
        let obj = lib(closure_1[3]);
        obj.runOnJS(closure_4)();
      }
      obj = { initialPosition: lib.value, initialKeyboardState: value.value };
      closure_17.value = Object.assign({}, closure_17.value, obj);
      if (value2.value > 0) {
        const _Object = Object;
        obj = { isScrollablePositionLocked: true };
        closure_17.value = Object.assign({}, closure_17.value, obj);
      }
    }
    handleOnStart.__closure = { stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedContainerHeight, context: sharedValue, animatedPosition, animatedScrollableContentOffsetY };
    handleOnStart.__workletHash = 9400766587341;
    handleOnStart.__initData = animatedHighestSnapPoint;
    return handleOnStart;
  }(), items);
  const obj4 = require(dependencyMap[3]);
  const items1 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  obj.handleOnChange = require(dependencyMap[3]).useWorkletCallback(() => {
    function handleOnChange(arg0, translationY) {
      let initialPosition = value4.value;
      let value = closure_12.value;
      if (value) {
        value = closure_17.value.initialKeyboardState === lib(value[1]).KEYBOARD_STATE.SHOWN;
      }
      if (value) {
        initialPosition = closure_17.value.initialPosition;
      }
      value = closure_12.value;
      if (value) {
        value = closure_17.value.initialPosition < initialPosition;
      }
      if (value) {
        initialPosition = closure_17.value.initialPosition;
      }
      if (closure_10) {
        value = value2.value;
      } else {
        value = value.value[0];
      }
      if (closure_17.value.initialPosition !== initialPosition) {
        let num3 = 0;
        const sum = closure_17.value.initialPosition + translationY.translationY;
        const sum1 = sum + num3;
        let obj = lib(value[4]);
        let isScrollablePositionLocked = closure_17.value.isScrollablePositionLocked;
        if (isScrollablePositionLocked) {
          isScrollablePositionLocked = arg0 === lib(value[1]).GESTURE_SOURCE.CONTENT;
        }
        if (isScrollablePositionLocked) {
          isScrollablePositionLocked = lib.value === initialPosition;
        }
        if (isScrollablePositionLocked) {
          const _Object = Object;
          obj = { isScrollablePositionLocked: false };
          closure_17.value = Object.assign({}, closure_17.value, obj);
        }
        if (closure_9) {
          if (arg0 === lib(value[1]).GESTURE_SOURCE.HANDLE) {
            if (sum < initialPosition) {
              const _Math3 = Math;
              lib.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * closure_11;
            }
          }
          if (arg0 === lib(value[1]).GESTURE_SOURCE.HANDLE) {
            if (sum > value) {
              const _Math2 = Math;
              lib.value = value + Math.sqrt(sum - value + 1) * closure_11;
            }
          }
          if (arg0 === lib(value[1]).GESTURE_SOURCE.CONTENT) {
            if (sum + num3 > value) {
              const _Math = Math;
              lib.value = value + Math.sqrt(sum + num3 - value + 1) * closure_11;
            }
          }
        }
        lib.value = obj.clamp(sum1, initialPosition, value);
        const clampResult = obj.clamp(sum1, initialPosition, value);
      }
      num3 = -1 * value5.value;
    }
    handleOnChange.__closure = { animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor };
    handleOnChange.__workletHash = 6221237616078;
    handleOnChange.__initData = animatedClosedPosition;
    return handleOnChange;
  }(), items1);
  const obj5 = require(dependencyMap[3]);
  const items2 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  obj.handleOnEnd = require(dependencyMap[3]).useWorkletCallback(() => {
    function handleOnEnd(arg0, translationY) {
      let absoluteY;
      let velocityY;
      ({ absoluteY, velocityY } = translationY);
      if (closure_12.value) {
        if (closure_17.value.initialPosition >= lib.value) {
          if (closure_17.value.initialPosition > lib.value) {
            callback(closure_17.value.initialPosition, lib(value[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
          }
        }
      }
      if (closure_5.value !== lib(value[1]).SCROLLABLE_TYPE.UNDETERMINED) {
        let value = closure_5.value;
        const VIEW = lib(value[1]).SCROLLABLE_TYPE.VIEW;
      }
      let tmp8 = closure_17.value.initialKeyboardState === lib(value[1]).KEYBOARD_STATE.SHOWN;
      if (tmp8) {
        tmp8 = lib.value > closure_17.value.initialPosition;
      }
      if (tmp8) {
        lib(value[3]).runOnJS(closure_4)();
        const obj = lib(value[3]);
      }
      if (closure_12.value) {
        closure_12.value = false;
      }
      value = value.value;
      const substr = value.slice();
      if (closure_10) {
        substr.unshift(value3.value);
      }
      const snapPointResult = lib(value[5]).snapPoint(translationY.translationY + closure_17.value.initialPosition, velocityY, substr);
      if (snapPointResult !== lib.value) {
        let tmp20 = arg0 === lib(value[1]).GESTURE_SOURCE.CONTENT;
        if (tmp20) {
          tmp20 = value4.value > 0;
        }
        if (tmp20) {
          tmp20 = tmp;
        }
        if (!tmp20) {
          callback(snapPointResult, lib(value[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
        }
      }
    }
    handleOnEnd.__closure = { animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedContainerHeight, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY };
    handleOnEnd.__workletHash = 8667894097210;
    handleOnEnd.__initData = animatedScrollableContentOffsetY;
    return handleOnEnd;
  }(), items2);
  const obj6 = require(dependencyMap[3]);
  const items3 = [sharedValue];
  obj.handleOnFinalize = require(dependencyMap[3]).useWorkletCallback(() => {
    function handleOnFinalize() {
      callback(closure_17);
    }
    handleOnFinalize.__closure = { resetContext: animatedScrollableType, context: sharedValue };
    handleOnFinalize.__workletHash = 8824211868683;
    handleOnFinalize.__initData = enableOverDrag;
    return handleOnFinalize;
  }(), items3);
  return obj;
};

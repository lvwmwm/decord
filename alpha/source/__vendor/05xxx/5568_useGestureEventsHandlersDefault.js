// Module ID: 5568
// Function ID: 5569
// Name: useGestureEventsHandlersDefault
// Dependencies: [19, 17, 5399, 5406, 1652, 5569, 5570]
// Exports: useGestureEventsHandlersDefault

// Module 5568 (useGestureEventsHandlersDefault)
import react from "react" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5399 */;
import react2 from "react" /* 5406 */;
import react_native from "react-native" /* 17 */;

let tmp;
let tmp3;
const clamp = tmp(5569);
const snapPoint = tmp(5570);
const useCallback = react.useCallback;
const Platform = react_native.Platform;
let value = { initialPosition: 0, initialKeyboardState: GESTURE_SOURCE.KEYBOARD_STATE.UNDETERMINED, isScrollablePositionLocked: false };
const dismiss = react_native.Keyboard.dismiss;
let items = [{ code: "(function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});})" }];
[tmp3] = items;
function pnpm_useGestureEventsHandlersDefaultTsx1(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    closure_0[item] = undefined;
  });
}
pnpm_useGestureEventsHandlersDefaultTsx1.__workletHash = 5400395038012;
pnpm_useGestureEventsHandlersDefaultTsx1.__initData = tmp3;
let closure_7 = { code: "(function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){let[stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY]=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}})" };
let closure_8 = { code: "(function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){let[animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor]=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;})" };
let closure_9 = { code: "(function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){let[animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY]=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);})" };
let closure_10 = { code: "(function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){let[resetContext,context]=this.__closure;resetContext(context);})" };

export const useGestureEventsHandlersDefault = () => {
  let animateToPosition;
  let animatedClosedPosition;
  let animatedContainerHeight;
  let animatedHighestSnapPoint;
  let animatedKeyboardHeight;
  let animatedKeyboardState;
  let animatedPosition;
  let animatedScrollableContentOffsetY;
  let animatedScrollableType;
  let animatedSnapPoints;
  let enableBlurKeyboardOnGesture;
  let enableOverDrag;
  let enablePanDownToClose;
  let isInTemporaryPosition;
  let isScrollableRefreshable;
  let overDragResistanceFactor;
  let stopAnimation;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp9;
  const tmp = require;
  let tmp2 = dependencyMap;
  const obj = react2;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ animatedPosition, animatedSnapPoints, animatedKeyboardState, animatedKeyboardHeight, animatedContainerHeight, animatedScrollableType, animatedHighestSnapPoint, animatedClosedPosition, animatedScrollableContentOffsetY, enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, enableBlurKeyboardOnGesture, animateToPosition, stopAnimation } = bottomSheetInternal);
  const tmp4 = _mod1652;
  let obj2 = {};
  const useSharedValue = tmp4.useSharedValue;
  let merged = Object.assign(obj);
  const sharedValue = useSharedValue(obj2);
  const items = [closure_7, stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, GESTURE_SOURCE.KEYBOARD_STATE, _mod1652.runOnJS, dismiss, sharedValue, animatedPosition, animatedScrollableContentOffsetY];
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  function handleOnStart(arg0, arg1) {
    _undefined();
    let tmp3 = c2;
    const iter = c1;
    if (c2) {
      tmp3 = tmp2 === _undefined2.SHOWN;
    }
    if (tmp3) {
      const HIDDEN = _undefined2.HIDDEN;
      _undefined3(c5)();
    }
    value = { initialPosition: _undefined5.value, initialKeyboardState: iter.value };
    const merged = Object.assign(_undefined4.value);
    _undefined4.value = value;
    if (_undefined6.value > 0) {
      const obj2 = { isScrollablePositionLocked: true };
      const merged1 = Object.assign(iter2.value);
      _undefined4.value = obj2;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  handleOnStart.__closure = items1;
  handleOnStart.__workletHash = 11124672703668;
  handleOnStart.__initData = tmp9;
  const items2 = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  let tmp8 = dismiss;
  const items3 = [closure_8, animatedHighestSnapPoint, isInTemporaryPosition, sharedValue, , , , , , , , , , , , , ];
  const tmp7Result = useCallback(handleOnStart, items2);
  items3[4] = GESTURE_SOURCE.KEYBOARD_STATE;
  items3[5] = enablePanDownToClose;
  items3[6] = animatedContainerHeight;
  items3[7] = animatedSnapPoints;
  items3[8] = GESTURE_SOURCE.GESTURE_SOURCE;
  items3[9] = isScrollableRefreshable;
  items3[10] = animatedPosition;
  items3[11] = animatedScrollableContentOffsetY;
  items3[12] = clamp.clamp;
  items3[13] = enableOverDrag;
  items3[14] = animatedScrollableType;
  items3[15] = GESTURE_SOURCE.SCROLLABLE_TYPE;
  items3[16] = overDragResistanceFactor;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items3;
  function handleOnChange(arg0, translationY) {
    let value3;
    let initialPosition = _undefined.value;
    value = _undefined2.value;
    translationY = translationY.translationY;
    const iter = _undefined2;
    if (value) {
      value = _undefined3.value.initialKeyboardState === _undefined4.SHOWN;
    }
    if (value) {
      initialPosition = _undefined3.value.initialPosition;
    }
    const value2 = iter.value && _undefined3.value.initialPosition < initialPosition;
    if (value2) {
      initialPosition = _undefined3.value.initialPosition;
    }
    const tmp6 = c4;
    if (tmp6) {
      value3 = _undefined5.value;
    } else {
      value3 = _undefined6.value[0];
    }
    if (_undefined3.value.initialPosition !== initialPosition) {
      let num = 0;
      const sum = iter2.value.initialPosition + translationY;
      let isScrollablePositionLocked = iter2.value.isScrollablePositionLocked;
      const tmp14 = _undefined11(sum + num, initialPosition, value3);
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = arg0 === tmp9.CONTENT;
      }
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = _undefined9.value === initialPosition;
      }
      if (isScrollablePositionLocked) {
        value = { isScrollablePositionLocked: false };
        const merged = Object.assign(iter2.value);
        _undefined3.value = value;
      }
      const tmp18 = c12;
      if (tmp18) {
        if (arg0 === _undefined7.HANDLE) {
          if (sum < initialPosition) {
            const _Math3 = Math;
            _undefined9.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * c15;
          }
        }
        if (arg0 === _undefined7.HANDLE) {
          if (sum > value3) {
            const _Math2 = Math;
            _undefined9.value = value3 + Math.sqrt(sum - value3 + 1) * c15;
          }
        }
        if (arg0 === _undefined7.CONTENT) {
          if (sum + num > value3) {
            const _Math = Math;
            _undefined9.value = value3 + Math.sqrt(sum + num - value3 + 1) * c15;
          }
        }
      }
      _undefined9.value = tmp14;
    }
    num = -1 * _undefined10.value;
  }
  const items4 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  handleOnChange.__closure = items4;
  handleOnChange.__workletHash = 1824625743703;
  handleOnChange.__initData = tmp20;
  const items5 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  const items6 = [closure_9, animatedHighestSnapPoint, animatedPosition, , , , , , , , , , , , , , , , , , , ];
  const tmp7Result3 = useCallback(handleOnChange, items5);
  items6[3] = GESTURE_SOURCE.GESTURE_SOURCE;
  items6[4] = isScrollableRefreshable;
  items6[5] = isInTemporaryPosition;
  items6[6] = sharedValue;
  items6[7] = animateToPosition;
  items6[8] = GESTURE_SOURCE.ANIMATION_SOURCE;
  items6[9] = animatedScrollableType;
  items6[10] = GESTURE_SOURCE.SCROLLABLE_TYPE;
  items6[11] = GESTURE_SOURCE.KEYBOARD_STATE;
  items6[12] = Platform;
  items6[13] = GESTURE_SOURCE.WINDOW_HEIGHT;
  items6[14] = animatedKeyboardHeight;
  items6[15] = _mod1652.runOnJS;
  items6[16] = tmp8;
  items6[17] = animatedSnapPoints;
  items6[18] = enablePanDownToClose;
  items6[19] = animatedClosedPosition;
  items6[20] = snapPoint.snapPoint;
  items6[21] = animatedScrollableContentOffsetY;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items6;
  function handleOnEnd(arg0, velocityY) {
    let absoluteY;
    let translationY;
    velocityY = velocityY.velocityY;
    ({ translationY, absoluteY } = velocityY);
    const tmp2 = _undefined3;
    if (_undefined5.value) {
      if (_undefined6.value.initialPosition >= _undefined2.value) {
        if (_undefined6.value.initialPosition > _undefined2.value) {
          _undefined7(_undefined6.value.initialPosition, _undefined8.GESTURE, velocityY / 2);
        }
      }
    }
    const tmp5 = _undefined9.value !== _undefined10.UNDETERMINED && _undefined9.value !== tmp4.VIEW;
    const tmp6 = _undefined6.value.initialKeyboardState === _undefined11.SHOWN && _undefined2.value > _undefined6.value.initialPosition;
    if (tmp6) {
      const tmp8 = "ios" === _undefined12.OS && tmp5 && absoluteY > c12 - _undefined13.value;
      if (!tmp8) {
        _undefined14(c15)();
      }
    }
    if (_undefined5.value) {
      _undefined5.value = false;
    }
    value = _undefined15.value;
    const substr = value.slice();
    const tmp14 = c17;
    if (tmp14) {
      substr.unshift(_undefined16.value);
    }
    const tmp17 = _undefined17(translationY + _undefined6.value.initialPosition, velocityY, substr);
    if (tmp17 !== _undefined2.value) {
      const tmp19 = arg0 === tmp2.CONTENT && _undefined18.value > 0 && tmp;
      if (!tmp19) {
        _undefined7(tmp17, _undefined8.GESTURE, velocityY / 2);
      }
    }
  }
  const items7 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
  handleOnEnd.__closure = items7;
  handleOnEnd.__workletHash = 11436673332739;
  handleOnEnd.__initData = tmp38;
  const items8 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  const items9 = [closure_10, pnpm_useGestureEventsHandlersDefaultTsx1, sharedValue];
  let c0;
  let c1;
  [tmp61, tmp62, tmp63] = items9;
  function handleOnFinalize() {
    _undefined(c1);
  }
  const items10 = [tmp62, tmp63];
  handleOnFinalize.__closure = items10;
  handleOnFinalize.__workletHash = 14844205376690;
  handleOnFinalize.__initData = tmp61;
  const items11 = [sharedValue];
  const tmp7Result4 = useCallback(handleOnEnd, items8);
  const obj3 = { handleOnStart: tmp7Result, handleOnChange: tmp7Result3, handleOnEnd: tmp7Result4, handleOnFinalize: useCallback(handleOnFinalize, items11) };
  return obj3;
};

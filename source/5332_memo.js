// Module ID: 5332
// Function ID: 45875
// Name: memo
// Dependencies: [65, 31, 33, 5193, 5194, 5217, 5329, 1582]

// Module 5332 (memo)
import _toConsumableArray from "_toConsumableArray";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let memo;
const require = arg1;
({ useCallback: closure_4, useMemo: closure_5, useRef: closure_6, memo } = result);
const memoResult = memo(function BottomSheetHandleContainerComponent(simultaneousHandlers) {
  let animatedIndex;
  let animatedPosition;
  let handleIndicatorStyle;
  let handleStyle;
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  let DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers.enableHandlePanningGesture;
  ({ animatedIndex, animatedPosition } = simultaneousHandlers);
  if (undefined === DEFAULT_ENABLE_HANDLE_PANNING_GESTURE) {
    DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers(handleHeight[3]).DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
  }
  handleHeight = simultaneousHandlers.handleHeight;
  let handleComponent = simultaneousHandlers.handleComponent;
  ({ handleStyle, handleIndicatorStyle } = simultaneousHandlers);
  const tmp3 = failOffsetY(null);
  let obj = simultaneousHandlers(handleHeight[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  failOffsetY = bottomSheetInternal.failOffsetY;
  const waitFor = bottomSheetInternal.waitFor;
  const simultaneousHandlers2 = bottomSheetInternal.simultaneousHandlers;
  const handlePanGestureHandler = simultaneousHandlers(handleHeight[4]).useBottomSheetGestureHandlers().handlePanGestureHandler;
  let items = [simultaneousHandlers2, simultaneousHandlers];
  const tmp5 = failOffsetX(() => {
    const items = [];
    if (simultaneousHandlers) {
      items.push(simultaneousHandlers);
    }
    if (simultaneousHandlers2) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(simultaneousHandlers2)) {
        push.apply(items, activeOffsetX(simultaneousHandlers2));
      } else {
        push(simultaneousHandlers2);
      }
    }
    return items;
  }, items);
  let closure_10 = tmp5;
  const items1 = [activeOffsetX, activeOffsetY, DEFAULT_ENABLE_HANDLE_PANNING_GESTURE, failOffsetX, failOffsetY, tmp5, waitFor, , , , ];
  ({ handleOnChange: arr2[7], handleOnEnd: arr2[8], handleOnFinalize: arr2[9], handleOnStart: arr2[10] } = handlePanGestureHandler);
  const items2 = [handleHeight];
  const obj2 = simultaneousHandlers(handleHeight[4]);
  const items3 = [handleHeight];
  const tmp6 = failOffsetX(() => {
    const Gesture = simultaneousHandlers(handleHeight[5]).Gesture;
    const PanResult = Gesture.Pan();
    const result = Gesture.Pan().enabled(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE).shouldCancelWhenOutside(false);
    const enabledResult = Gesture.Pan().enabled(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart);
    const onChangeResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart).onChange(handlePanGestureHandler.handleOnChange);
    const onFinalizeResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart).onChange(handlePanGestureHandler.handleOnChange).onEnd(handlePanGestureHandler.handleOnEnd).onFinalize(handlePanGestureHandler.handleOnFinalize);
    let result1 = onFinalizeResult;
    if (waitFor) {
      result1 = onFinalizeResult.requireExternalGestureToFail(waitFor);
    }
    let result2 = result1;
    if (closure_10) {
      result2 = result1.simultaneousWithExternalGesture(closure_10);
    }
    let activeOffsetXResult = result2;
    if (activeOffsetX) {
      activeOffsetXResult = result2.activeOffsetX(activeOffsetX);
    }
    let activeOffsetYResult = activeOffsetXResult;
    if (activeOffsetY) {
      activeOffsetYResult = activeOffsetXResult.activeOffsetY(activeOffsetY);
    }
    let failOffsetXResult = activeOffsetYResult;
    if (failOffsetX) {
      failOffsetXResult = activeOffsetYResult.failOffsetX(failOffsetX);
    }
    let failOffsetYResult = failOffsetXResult;
    if (failOffsetY) {
      failOffsetYResult = failOffsetXResult.failOffsetY(failOffsetY);
    }
    return failOffsetYResult;
  }, items1);
  const tmp7 = activeOffsetY(function handleContainerLayout(nativeEvent) {
    handleHeight.value = nativeEvent.nativeEvent.layout.height;
  }, items2);
  const tmp8 = activeOffsetY((height) => {
    handleHeight.value = height.height;
  }, items3);
  const boundingClientRect = simultaneousHandlers(handleHeight[4]).useBoundingClientRect(tmp3, tmp8);
  if (null == handleComponent) {
    handleComponent = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(handleHeight[6]);
  }
  obj = { gesture: tmp6 };
  obj = { ref: tmp3, onLayout: tmp7, children: waitFor(handleComponent, { animatedIndex, animatedPosition, style: handleStyle, indicatorStyle: handleIndicatorStyle }) };
  obj.children = waitFor(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(handleHeight[7]).View, obj, "BottomSheetHandleContainer");
  return waitFor(simultaneousHandlers(handleHeight[5]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetHandleContainer";

export default memoResult;

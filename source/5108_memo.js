// Module ID: 5108
// Function ID: 43486
// Name: memo
// Dependencies: []

// Module 5108 (memo)
let memo;
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useMemo: closure_5, useRef: closure_6, memo } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = memo(function BottomSheetHandleContainerComponent(simultaneousHandlers) {
  let animatedIndex;
  let animatedPosition;
  let handleIndicatorStyle;
  let handleStyle;
  const arg1 = simultaneousHandlers;
  let DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers.enableHandlePanningGesture;
  ({ animatedIndex, animatedPosition } = simultaneousHandlers);
  if (undefined === DEFAULT_ENABLE_HANDLE_PANNING_GESTURE) {
    DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = arg1(dependencyMap[3]).DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
  }
  const importDefault = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
  const handleHeight = simultaneousHandlers.handleHeight;
  const dependencyMap = handleHeight;
  let handleComponent = simultaneousHandlers.handleComponent;
  ({ handleStyle, handleIndicatorStyle } = simultaneousHandlers);
  const tmp3 = failOffsetY(null);
  let obj = arg1(dependencyMap[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  let closure_3 = activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  const waitFor = bottomSheetInternal.waitFor;
  const jsx = waitFor;
  const simultaneousHandlers2 = bottomSheetInternal.simultaneousHandlers;
  const handlePanGestureHandler = arg1(dependencyMap[4]).useBottomSheetGestureHandlers().handlePanGestureHandler;
  const items = [simultaneousHandlers2, simultaneousHandlers.simultaneousHandlers];
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
  const items1 = [activeOffsetX, activeOffsetY, DEFAULT_ENABLE_HANDLE_PANNING_GESTURE, failOffsetX, failOffsetY, tmp5, waitFor, , , , ];
  ({ handleOnChange: arr2[7], handleOnEnd: arr2[8], handleOnFinalize: arr2[9], handleOnStart: arr2[10] } = handlePanGestureHandler);
  const items2 = [handleHeight];
  const obj2 = arg1(dependencyMap[4]);
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
    if (tmp5) {
      result2 = result1.simultaneousWithExternalGesture(tmp5);
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
  const boundingClientRect = arg1(dependencyMap[4]).useBoundingClientRect(tmp3, tmp8);
  if (null == handleComponent) {
    handleComponent = importDefault(dependencyMap[6]);
  }
  obj = { gesture: tmp6 };
  obj = { ref: tmp3, onLayout: tmp7, children: <handleComponent animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={handleStyle} indicatorStyle={handleIndicatorStyle} /> };
  obj.children = jsx(importDefault(dependencyMap[7]).View, obj, "BottomSheetHandleContainer");
  return jsx(arg1(dependencyMap[5]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetHandleContainer";

export default memoResult;

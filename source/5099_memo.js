// Module ID: 5099
// Function ID: 43464
// Name: memo
// Dependencies: []

// Module 5099 (memo)
let memo;
let closure_3 = [true, true, true, true];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ useMemo: closure_6, memo } = arg1(dependencyMap[2]));
importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = memo(function BottomSheetDraggableViewComponent(nativeGestureRef) {
  let children;
  let style;
  nativeGestureRef = nativeGestureRef.nativeGestureRef;
  const arg1 = nativeGestureRef;
  const refreshControlGestureRef = nativeGestureRef.refreshControlGestureRef;
  const importDefault = refreshControlGestureRef;
  ({ style, children } = nativeGestureRef);
  let obj = arg1(dependencyMap[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
  const dependencyMap = enableContentPanningGesture;
  let closure_3 = simultaneousHandlers;
  const waitFor = bottomSheetInternal.waitFor;
  let closure_4 = waitFor;
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const callback = activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  const jsx = failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  const tmp = callback(nativeGestureRef, closure_3);
  const contentPanGestureHandler = arg1(dependencyMap[4]).useBottomSheetGestureHandlers().contentPanGestureHandler;
  const items = [bottomSheetInternal.simultaneousHandlers, nativeGestureRef, refreshControlGestureRef];
  const tmp3 = activeOffsetY(() => {
    const items = [];
    if (nativeGestureRef) {
      items.push(nativeGestureRef);
    }
    if (refreshControlGestureRef) {
      items.push(refreshControlGestureRef);
    }
    if (simultaneousHandlers) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(simultaneousHandlers)) {
        push.apply(items, waitFor(simultaneousHandlers));
      } else {
        push(simultaneousHandlers);
      }
    }
    return items;
  }, items);
  const items1 = [activeOffsetX, activeOffsetY, enableContentPanningGesture, failOffsetX, failOffsetY, tmp3, waitFor, , , , ];
  ({ handleOnChange: arr2[7], handleOnEnd: arr2[8], handleOnFinalize: arr2[9], handleOnStart: arr2[10] } = contentPanGestureHandler);
  const tmp4 = activeOffsetY(() => {
    const Gesture = nativeGestureRef(enableContentPanningGesture[5]).Gesture;
    const PanResult = Gesture.Pan();
    const result = Gesture.Pan().enabled(enableContentPanningGesture).shouldCancelWhenOutside(false);
    const enabledResult = Gesture.Pan().enabled(enableContentPanningGesture);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart);
    const onChangeResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart).onChange(contentPanGestureHandler.handleOnChange);
    const onFinalizeResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart).onChange(contentPanGestureHandler.handleOnChange).onEnd(contentPanGestureHandler.handleOnEnd).onFinalize(contentPanGestureHandler.handleOnFinalize);
    let result1 = onFinalizeResult;
    if (waitFor) {
      result1 = onFinalizeResult.requireExternalGestureToFail(waitFor);
    }
    let result2 = result1;
    if (tmp3) {
      result2 = result1.simultaneousWithExternalGesture(tmp3);
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
  obj = { gesture: tmp4 };
  obj = { value: tmp4, children: jsx(importDefault(dependencyMap[7]).View, Object.assign({ style }, tmp, { children })) };
  obj.children = jsx(arg1(dependencyMap[6]).BottomSheetDraggableContext.Provider, obj);
  return jsx(arg1(dependencyMap[5]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetDraggableView";

export default memoResult;

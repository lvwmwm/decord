// Module ID: 5323
// Function ID: 45858
// Name: memo
// Dependencies: [65, 29, 31, 33, 5194, 5217, 5201, 1582]

// Module 5323 (memo)
import _toConsumableArray from "_toConsumableArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_6;
let memo;
const require = arg1;
let closure_3 = ["nativeGestureRef", "refreshControlGestureRef", "style", "children"];
({ useMemo: closure_6, memo } = result);
const memoResult = memo(function BottomSheetDraggableViewComponent(nativeGestureRef) {
  let children;
  let style;
  nativeGestureRef = nativeGestureRef.nativeGestureRef;
  const refreshControlGestureRef = nativeGestureRef.refreshControlGestureRef;
  ({ style, children } = nativeGestureRef);
  let obj = nativeGestureRef(enableContentPanningGesture[4]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
  const simultaneousHandlers = bottomSheetInternal.simultaneousHandlers;
  const waitFor = bottomSheetInternal.waitFor;
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  const tmp = activeOffsetX(nativeGestureRef, simultaneousHandlers);
  const contentPanGestureHandler = nativeGestureRef(enableContentPanningGesture[4]).useBottomSheetGestureHandlers().contentPanGestureHandler;
  let items = [simultaneousHandlers, nativeGestureRef, refreshControlGestureRef];
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
  let closure_10 = tmp3;
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
  obj = { gesture: tmp4 };
  obj = { value: tmp4, children: failOffsetX(refreshControlGestureRef(enableContentPanningGesture[7]).View, Object.assign({ style }, tmp, { children })) };
  obj.children = failOffsetX(nativeGestureRef(enableContentPanningGesture[6]).BottomSheetDraggableContext.Provider, obj);
  return failOffsetX(nativeGestureRef(enableContentPanningGesture[5]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetDraggableView";

export default memoResult;

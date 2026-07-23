// Module ID: 5434
// Function ID: 46535
// Name: memo
// Dependencies: [29, 31, 27, 33, 5194, 5435, 5190]

// Module 5434 (memo)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let memo;
const require = arg1;
let closure_2 = ["focusHook", "enableFooterMarginAdjustment", "onLayout", "style", "children"];
({ useEffect: closure_4, useCallback: closure_5, useMemo: closure_6, memo } = result);
const memoResult = memo(function BottomSheetViewComponent(focusHook) {
  let children;
  let style;
  focusHook = focusHook.focusHook;
  if (undefined === focusHook) {
    focusHook = animatedContentHeight;
  }
  const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
  let onLayout = focusHook.onLayout;
  ({ style, children } = focusHook);
  const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
  const tmp2 = enableDynamicSizing(focusHook, animatedScrollableType);
  const bottomSheetInternal = onLayout(animatedScrollableContentOffsetY[4]).useBottomSheetInternal();
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj = onLayout(animatedScrollableContentOffsetY[4]);
  const bottomSheetContentContainerStyle = onLayout(animatedScrollableContentOffsetY[4]).useBottomSheetContentContainerStyle(tmp, style);
  let items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  style = callback(() => {
    const items = [bottomSheetContentContainerStyle, onLayout(animatedScrollableContentOffsetY[5]).styles.container];
    return items;
  }, items);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const obj2 = onLayout(animatedScrollableContentOffsetY[4]);
  onLayout = bottomSheetContentContainerStyle((nativeEvent) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(nativeEvent.nativeEvent.layout.height);
    }
    if (onLayout) {
      onLayout(nativeEvent);
    }
  }, items2);
  focusHook(bottomSheetContentContainerStyle(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = onLayout(animatedScrollableContentOffsetY[6]).SCROLLABLE_TYPE.VIEW;
  }, items1));
  return <View {...Object.assign({}, tmp2, { onLayout, style, children })} />;
});
memoResult.displayName = "BottomSheetView";

export default memoResult;

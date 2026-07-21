// Module ID: 5210
// Function ID: 44146
// Name: memo
// Dependencies: []

// Module 5210 (memo)
let memo;
let closure_2 = [null, null, null, null, null];
let closure_3 = importDefault(dependencyMap[0]);
({ useEffect: closure_4, useCallback: closure_5, useMemo: closure_6, memo } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = memo(function BottomSheetViewComponent(focusHook) {
  let children;
  let style;
  focusHook = focusHook.focusHook;
  if (undefined === focusHook) {
    focusHook = animatedContentHeight;
  }
  const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
  let onLayout = focusHook.onLayout;
  const arg1 = onLayout;
  ({ style, children } = focusHook);
  const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
  const tmp2 = callback(focusHook, closure_2);
  const bottomSheetInternal = arg1(dependencyMap[4]).useBottomSheetInternal();
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const dependencyMap = animatedScrollableContentOffsetY;
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  closure_2 = animatedScrollableType;
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const callback = enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj = arg1(dependencyMap[4]);
  const bottomSheetContentContainerStyle = arg1(dependencyMap[4]).useBottomSheetContentContainerStyle(tmp, style);
  const items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  style = callback2(() => {
    const items = [bottomSheetContentContainerStyle, onLayout(animatedScrollableContentOffsetY[5]).styles.container];
    return items;
  }, items);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const obj2 = arg1(dependencyMap[4]);
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

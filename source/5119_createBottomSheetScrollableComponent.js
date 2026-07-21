// Module ID: 5119
// Function ID: 43533
// Name: createBottomSheetScrollableComponent
// Dependencies: []
// Exports: createBottomSheetScrollableComponent

// Module 5119 (createBottomSheetScrollableComponent)
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
({ forwardRef: closure_4, useContext: closure_5, useImperativeHandle: closure_6, useMemo: closure_7 } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_9 = { code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}" };

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  animatedComponent = SCROLLVIEW;
  const dependencyMap = animatedComponent;
  return callback((overScrollMode) => {
    let contentContainerStyle;
    let enableFooterMarginAdjustment;
    let focusHook;
    let lockableScrollableContentOffsetY;
    let onRefresh;
    let onScroll;
    let onScrollBeginDrag;
    let onScrollEndDrag;
    let preserveScrollMomentum;
    let progressViewOffset;
    let refreshControl;
    let refreshing;
    let scrollEventsHandlersHook;
    let scrollHandler;
    let scrollableContentOffsetY;
    ({ focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment } = overScrollMode);
    overScrollMode = overScrollMode.overScrollMode;
    let str = "never";
    if (undefined !== overScrollMode) {
      str = overScrollMode;
    }
    const keyboardDismissMode = overScrollMode.keyboardDismissMode;
    let str2 = "interactive";
    if (undefined !== keyboardDismissMode) {
      str2 = keyboardDismissMode;
    }
    const showsVerticalScrollIndicator = overScrollMode.showsVerticalScrollIndicator;
    overScrollMode = tmp2;
    ({ onRefresh, preserveScrollMomentum } = overScrollMode);
    const arg1 = preserveScrollMomentum;
    ({ onScroll, onContentSizeChange: closure_2 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    const tmp4 = animatedScrollableState(overScrollMode(arg1[3]).BottomSheetDraggableContext);
    let obj = overScrollMode(arg1[4]);
    scrollHandler = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler);
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = tmp4(overScrollMode, closure_2);
    const bottomSheetInternal = overScrollMode(arg1[4]).useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const obj2 = overScrollMode(arg1[4]);
    const setContentSize = overScrollMode(arg1[5]).useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp4) {
      if (bottomSheetInternal.enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    const obj3 = overScrollMode(arg1[5]);
    /* worklet (recovered source) */ function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}
    obj = { preserveScrollMomentum, SCROLLABLE_DECELERATION_RATE_MAPPER: overScrollMode(arg1[7]).SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, showsVerticalScrollIndicator: tmp2, SCROLLABLE_STATE: overScrollMode(arg1[7]).SCROLLABLE_STATE };
    pnpm_createBottomSheetScrollableComponentTsx1.__closure = obj;
    pnpm_createBottomSheetScrollableComponentTsx1.__workletHash = 1780437272380;
    pnpm_createBottomSheetScrollableComponentTsx1.__initData = closure_9;
    const items = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items1 = [tmp4];
    const animatedProps = overScrollMode(arg1[6]).useAnimatedProps(pnpm_createBottomSheetScrollableComponentTsx1, items);
    const obj4 = overScrollMode(arg1[6]);
    const tmp8 = callback(() => {
      let result1;
      if (tmp4) {
        const Gesture = tmp2(preserveScrollMomentum[8]).Gesture;
        const result = Gesture.Native().simultaneousWithExternalGesture(tmp4);
        result1 = result.shouldCancelWhenOutside(false);
        const NativeResult = Gesture.Native();
      }
      return result1;
    }, items1);
    const obj6 = overScrollMode(arg1[4]);
    const stableCallback = overScrollMode(arg1[4]).useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (callback) {
        callback(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = overScrollMode(arg1[4]).useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    setContentSize(arg1, () => scrollableRef.current);
    const obj7 = overScrollMode(arg1[4]);
    const scrollableSetter = overScrollMode(arg1[4]).useScrollableSetter(scrollableRef, overScrollMode, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    obj = { ref: scrollableRef, nativeGesture: tmp8, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent: arg1, refreshControl };
    return callback2(overScrollMode(arg1[9]).ScrollableContainer, Object.assign(obj, tmp3));
  });
};

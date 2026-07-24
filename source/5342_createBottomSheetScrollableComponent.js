// Module ID: 5342
// Function ID: 45934
// Name: createBottomSheetScrollableComponent
// Dependencies: [29, 31, 33, 5201, 5194, 5343, 1582, 5190, 5217, 5344]
// Exports: createBottomSheetScrollableComponent

// Module 5342 (createBottomSheetScrollableComponent)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
({ forwardRef: closure_4, useContext: closure_5, useImperativeHandle: closure_6, useMemo: closure_7 } = result);
let closure_9 = { code: "function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}" };

export const createBottomSheetScrollableComponent = function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  let closure_0 = SCROLLVIEW;
  let closure_1 = animatedComponent;
  return callback((overScrollMode) => {
    let closure_2;
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
    const SCROLLVIEW = tmp2;
    ({ onRefresh, preserveScrollMomentum } = overScrollMode);
    ({ onScroll, onContentSizeChange: closure_2 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    let tmp4 = outer1_5(SCROLLVIEW(animatedComponent[3]).BottomSheetDraggableContext);
    let _objectWithoutProperties = tmp4;
    let obj = SCROLLVIEW(animatedComponent[4]);
    scrollHandler = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler);
    const tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
    const tmp3 = outer1_3(overScrollMode, outer1_2);
    const bottomSheetInternal = SCROLLVIEW(animatedComponent[4]).useBottomSheetInternal();
    const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
    const obj2 = SCROLLVIEW(animatedComponent[4]);
    const setContentSize = SCROLLVIEW(animatedComponent[5]).useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp4) {
      if (bottomSheetInternal.enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    const obj3 = SCROLLVIEW(animatedComponent[5]);
    /* worklet (recovered source) */ function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}
    obj = { preserveScrollMomentum, SCROLLABLE_DECELERATION_RATE_MAPPER: SCROLLVIEW(animatedComponent[7]).SCROLLABLE_DECELERATION_RATE_MAPPER, animatedScrollableState, showsVerticalScrollIndicator: tmp2, SCROLLABLE_STATE: SCROLLVIEW(animatedComponent[7]).SCROLLABLE_STATE };
    pnpm_createBottomSheetScrollableComponentTsx1.__closure = obj;
    pnpm_createBottomSheetScrollableComponentTsx1.__workletHash = 1780437272380;
    pnpm_createBottomSheetScrollableComponentTsx1.__initData = outer1_9;
    const items = [animatedScrollableState, undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator, preserveScrollMomentum];
    const items1 = [tmp4];
    const animatedProps = SCROLLVIEW(animatedComponent[6]).useAnimatedProps(pnpm_createBottomSheetScrollableComponentTsx1, items);
    const obj4 = SCROLLVIEW(animatedComponent[6]);
    const tmp8 = outer1_7(() => {
      let result1;
      if (_objectWithoutProperties) {
        const Gesture = tmp2(preserveScrollMomentum[8]).Gesture;
        const result = Gesture.Native().simultaneousWithExternalGesture(_objectWithoutProperties);
        result1 = result.shouldCancelWhenOutside(false);
        const NativeResult = Gesture.Native();
      }
      return result1;
    }, items1);
    const obj6 = SCROLLVIEW(animatedComponent[4]);
    const stableCallback = SCROLLVIEW(animatedComponent[4]).useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (callback) {
        callback(arg0, arg1);
      }
    });
    const bottomSheetContentContainerStyle = SCROLLVIEW(animatedComponent[4]).useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    outer1_6(arg1, () => scrollableRef.current);
    const obj7 = SCROLLVIEW(animatedComponent[4]);
    const scrollableSetter = SCROLLVIEW(animatedComponent[4]).useScrollableSetter(scrollableRef, SCROLLVIEW, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    obj = { ref: scrollableRef, nativeGesture: tmp8, animatedProps, overScrollMode: str, keyboardDismissMode: str2, refreshing, scrollEventThrottle: 16, progressViewOffset, contentContainerStyle: bottomSheetContentContainerStyle, onRefresh, onScroll: scrollHandler, onContentSizeChange: stableCallback, setContentSize, ScrollableComponent: preserveScrollMomentum, refreshControl };
    return outer1_8(SCROLLVIEW(animatedComponent[9]).ScrollableContainer, Object.assign(obj, tmp3));
  });
};

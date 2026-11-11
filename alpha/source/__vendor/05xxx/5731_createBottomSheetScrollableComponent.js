// Module ID: 5731
// Function ID: 5732
// Name: createBottomSheetScrollableComponent
// Dependencies: [109, 19, 21, 5519, 5512, 5732, 1652, 5508, 5535, 5733]
// Exports: createBottomSheetScrollableComponent

// Module 5731 (createBottomSheetScrollableComponent)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5508 */;
import _mod5512 from "module_5512" /* 5512 */;
import react2 from "react" /* 5519 */;
import react3 from "react" /* 5732 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;

let overScrollMode;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment", "overScrollMode", "keyboardDismissMode", "showsVerticalScrollIndicator", "contentContainerStyle", "refreshing", "onRefresh", "progressViewOffset", "refreshControl", "preserveScrollMomentum", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "lockableScrollableContentOffsetY", "onContentSizeChange"];
let react = react_mod;
({ forwardRef: closure_4, useContext: hasOwnProperty, useImperativeHandle: metroRequire, useMemo: metroImportDefault } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_9 = { code: "(function pnpm_createBottomSheetScrollableComponentTsx1(){let[preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE]=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};})" };

export function createBottomSheetScrollableComponent(SCROLLVIEW, animatedComponent) {
  let closure_0 = SCROLLVIEW;
  let ScrollableComponent = animatedComponent;
  return closure_4((overScrollMode, arg1) => {
    let animatedScrollableState;
    let closure_129_0;
    let contentContainerStyle;
    let enableContentPanningGesture;
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
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    ({ focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment } = overScrollMode);
    let tmp = undefined !== enableFooterMarginAdjustment && enableFooterMarginAdjustment;
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
    const tmp2 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
    ({ onRefresh, preserveScrollMomentum, onScroll, onContentSizeChange: closure_129_0 } = overScrollMode);
    ({ contentContainerStyle, refreshing, progressViewOffset, refreshControl, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY } = overScrollMode);
    const tmp5 = dependencyMap;
    const tmp3 = _objectWithoutProperties(overScrollMode, closure_2);
    const tmp6 = hasOwnProperty(react2.BottomSheetDraggableContext);
    ScrollableComponent = tmp6;
    let obj = _mod5512;
    const scrollHandler1 = obj.useScrollHandler(scrollEventsHandlersHook, onScroll, onScrollBeginDrag, onScrollEndDrag, lockableScrollableContentOffsetY);
    const scrollableRef = scrollHandler1.scrollableRef;
    ({ scrollableContentOffsetY, scrollHandler } = scrollHandler1);
    let obj2 = _mod5512;
    const bottomSheetInternal = obj2.useBottomSheetInternal();
    ({ animatedScrollableState, enableContentPanningGesture } = bottomSheetInternal);
    const obj3 = react3;
    const setContentSize = obj3.useBottomSheetContentSizeSetter().setContentSize;
    if (!tmp6) {
      if (enableContentPanningGesture) {
        throw "'Scrollable' cannot be used out of the BottomSheet!";
      }
    }
    const items = [closure_9, preserveScrollMomentum, , , , ];
    const useAnimatedProps = tmp4(1652).useAnimatedProps;
    _mod1652;
    items[2] = GESTURE_SOURCE.SCROLLABLE_DECELERATION_RATE_MAPPER;
    items[3] = animatedScrollableState;
    items[4] = tmp2;
    items[5] = GESTURE_SOURCE.SCROLLABLE_STATE;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
    function pnpm_createBottomSheetScrollableComponentTsx1() {
      let obj;
      const tmp = c0;
      if (tmp) {
        obj = {};
      } else {
        obj = { decelerationRate: _undefined[_undefined2.value] };
      }
      const obj2 = { showsVerticalScrollIndicator: tmp5 };
      const merged = Object.assign(obj);
      return obj2;
    }
    const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15];
    pnpm_createBottomSheetScrollableComponentTsx1.__closure = items1;
    pnpm_createBottomSheetScrollableComponentTsx1.__workletHash = 6870930480613;
    pnpm_createBottomSheetScrollableComponentTsx1.__initData = tmp10;
    const items2 = [animatedScrollableState, tmp2, preserveScrollMomentum];
    const items3 = [tmp6];
    const animatedProps = useAnimatedProps(pnpm_createBottomSheetScrollableComponentTsx1, items2);
    const tmp17 = metroImportDefault(() => {
      let result1;
      if (closure_1) {
        const Gesture = SCROLLVIEW(ScrollableComponent[8]).Gesture;
        const NativeResult = Gesture.Native();
        const result = NativeResult.simultaneousWithExternalGesture(tmp);
        result1 = result.shouldCancelWhenOutside(false);
      }
      return result1;
    }, items3);
    const tmp4Result4 = _mod5512;
    const stableCallback = tmp4Result4.useStableCallback((arg0, arg1) => {
      setContentSize(arg1);
      if (closure_1_0) {
        tmp2(arg0, arg1);
      }
    });
    const tmp4Result5 = _mod5512;
    const bottomSheetContentContainerStyle = tmp4Result5.useBottomSheetContentContainerStyle(tmp, contentContainerStyle);
    metroRequire(arg1, () => scrollableRef.current);
    const tmp4Result6 = _mod5512;
    const scrollableSetter = tmp4Result6.useScrollableSetter(scrollableRef, SCROLLVIEW, scrollableContentOffsetY, undefined !== onRefresh, focusHook);
    const ScrollableContainer = tmp4(5733).ScrollableContainer;
    let merged = Object.assign(tmp3);
    return <ScrollableContainer ref={scrollableRef} nativeGesture={tmp17} animatedProps={animatedProps} overScrollMode={str} keyboardDismissMode={str2} refreshing={refreshing} scrollEventThrottle={16} progressViewOffset={progressViewOffset} contentContainerStyle={bottomSheetContentContainerStyle} onRefresh={onRefresh} onScroll={scrollHandler} onContentSizeChange={stableCallback} setContentSize={setContentSize} ScrollableComponent={ScrollableComponent} refreshControl={refreshControl} />;
  });
}

// Module ID: 8404
// Function ID: 66820
// Name: useSegmentedControlState
// Dependencies: [31, 689, 3849, 3991, 4099, 4528, 2]
// Exports: useSegmentedControlState

// Module 8404 (useSegmentedControlState)
import result from "result";

const require = arg1;
let closure_4 = { code: "function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
let result = require("context").fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export const useSegmentedControlState = function useSegmentedControlState(items) {
  items = items.items;
  const pageWidth = items.pageWidth;
  let num = items.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = items.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = pageWidth(PX_24[1]).space.PX_24;
  }
  const onPageChange = items.onPageChange;
  const onPageChangeStart = items.onPageChangeStart;
  const onSetActiveIndex = items.onSetActiveIndex;
  let enabled;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let animatedRef;
  let sharedValue6;
  let closure_15;
  let callback;
  let length;
  let callback1;
  enabled = onPageChange.useContext(items(PX_24[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  sharedValue = items(PX_24[3]).useSharedValue([]);
  let obj = items(PX_24[3]);
  sharedValue1 = items(PX_24[3]).useSharedValue(-1);
  let obj2 = items(PX_24[3]);
  sharedValue2 = items(PX_24[3]).useSharedValue(0);
  const obj3 = items(PX_24[3]);
  sharedValue3 = items(PX_24[3]).useSharedValue(0);
  const obj4 = items(PX_24[3]);
  sharedValue4 = items(PX_24[3]).useSharedValue(num);
  const obj5 = items(PX_24[3]);
  const items1 = [num, num];
  sharedValue5 = items(PX_24[3]).useSharedValue(items1);
  const obj6 = items(PX_24[3]);
  animatedRef = items(PX_24[3]).useAnimatedRef();
  const obj7 = items(PX_24[3]);
  sharedValue6 = items(PX_24[3]).useSharedValue(-1);
  closure_15 = onPageChange.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = onPageChange.useLayoutEffect(() => {
    closure_15.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  callback = onPageChange.useCallback((arg0) => {
    let flag = arg1;
    let flag2 = arg2;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      flag = true;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    function updateIndex(arg0) {
      const result = outer1_11.set(arg0);
      const result1 = arg0 * flag2;
      const result2 = outer1_8.set(result1);
      let tmp4 = !flag2;
      if (tmp4) {
        tmp4 = !outer1_6;
      }
      if (tmp4) {
        let obj = items(PX_24[5]);
        tmp4 = !obj.getIsScreenReaderEnabled();
      }
      let tmp8 = null == outer1_13;
      if (!tmp8) {
        const current = outer1_13.current;
        tmp8 = null == current;
        const obj2 = current;
      }
      if (!tmp8) {
        obj = { x: result1, animated: tmp4 };
        obj2.scrollTo(obj);
      }
      if (null != outer1_5) {
        outer1_5(arg0);
      }
    }
    if (flag) {
      flag = sharedValue4.get() !== arg0;
    }
    if (flag) {
      let result = items(PX_24[4]).triggerHapticFeedback(items(PX_24[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
      let obj = items(PX_24[4]);
    }
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        onPageChangeStart(arg0, () => {
          updateIndex(closure_0);
        });
      } else {
        updateIndex(arg0);
      }
    }
  }, items3);
  length = items.length;
  class M {
    constructor(arg0, arg1) {
      c7.get()[items] = arg1;
      items = [...c7.get()];
      result = c7.set(items.slice(0, length));
      return;
    }
  }
  M.__closure = { itemDimensions: sharedValue, itemCount: length };
  M.__workletHash = 9501406272062;
  M.__initData = onPageChangeStart;
  const items4 = [sharedValue, length];
  callback1 = onPageChange.useCallback(M, items4);
  const items5 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, callback, callback1, enabled];
  return onPageChange.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef: closure_15, setActiveIndex: callback, setItemDimensions: callback1, useReducedMotion: enabled }), items5);
};

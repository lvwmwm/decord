// Module ID: 8354
// Function ID: 66555
// Name: useSegmentedControlState
// Dependencies: []
// Exports: useSegmentedControlState

// Module 8354 (useSegmentedControlState)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { code: "function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export const useSegmentedControlState = function useSegmentedControlState(items) {
  items = items.items;
  const arg1 = items;
  const pageWidth = items.pageWidth;
  const importDefault = pageWidth;
  let num = items.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = items.itemSpacing;
  if (PX_24 === undefined) {
    PX_24 = importDefault(dependencyMap[1]).space.PX_24;
  }
  const dependencyMap = PX_24;
  const onPageChange = items.onPageChange;
  const React = onPageChange;
  const onPageChangeStart = items.onPageChangeStart;
  let closure_4 = onPageChangeStart;
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
  enabled = React.useContext(arg1(dependencyMap[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  sharedValue = arg1(dependencyMap[3]).useSharedValue([]);
  const obj = arg1(dependencyMap[3]);
  sharedValue1 = arg1(dependencyMap[3]).useSharedValue(-1);
  const obj2 = arg1(dependencyMap[3]);
  sharedValue2 = arg1(dependencyMap[3]).useSharedValue(0);
  const obj3 = arg1(dependencyMap[3]);
  sharedValue3 = arg1(dependencyMap[3]).useSharedValue(0);
  const obj4 = arg1(dependencyMap[3]);
  sharedValue4 = arg1(dependencyMap[3]).useSharedValue(num);
  const obj5 = arg1(dependencyMap[3]);
  const items1 = [num, num];
  sharedValue5 = arg1(dependencyMap[3]).useSharedValue(items1);
  const obj6 = arg1(dependencyMap[3]);
  animatedRef = arg1(dependencyMap[3]).useAnimatedRef();
  const obj7 = arg1(dependencyMap[3]);
  sharedValue6 = arg1(dependencyMap[3]).useSharedValue(-1);
  closure_15 = React.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = React.useLayoutEffect(() => {
    closure_15.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  callback = React.useCallback((arg0) => {
    let flag = arg1;
    let flag2 = arg2;
    const items = arg0;
    if (arg1 === undefined) {
      flag = true;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    const pageWidth = flag2;
    function updateIndex(arg0) {
      const result = closure_11.set(arg0);
      const result1 = arg0 * flag2;
      const result2 = closure_8.set(result1);
      let tmp4 = !flag2;
      if (tmp4) {
        tmp4 = !closure_6;
      }
      if (tmp4) {
        let obj = arg0(updateIndex[5]);
        tmp4 = !obj.getIsScreenReaderEnabled();
      }
      let tmp8 = null == ref;
      if (!tmp8) {
        const current = ref.current;
        tmp8 = null == current;
        const obj2 = current;
      }
      if (!tmp8) {
        obj = { x: result1, animated: tmp4 };
        obj2.scrollTo(obj);
      }
      if (null != callback) {
        callback(arg0);
      }
    }
    const PX_24 = updateIndex;
    if (flag) {
      flag = sharedValue4.get() !== arg0;
    }
    if (flag) {
      const result = items(PX_24[4]).triggerHapticFeedback(items(PX_24[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = items(PX_24[4]);
    }
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        onPageChangeStart(arg0, () => {
          updateIndex(arg0);
        });
      } else {
        updateIndex(arg0);
      }
    }
  }, items3);
  length = items.length;
  class M {
    constructor(arg0, arg1) {
      closure_7.get()[items] = arg1;
      items = [...closure_7.get()];
      result = closure_7.set(items.slice(0, length));
      return;
    }
  }
  M.__closure = { itemDimensions: sharedValue, itemCount: length };
  M.__workletHash = 9501406272062;
  M.__initData = closure_4;
  const items4 = [sharedValue, length];
  callback1 = React.useCallback(M, items4);
  const items5 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, callback, callback1, enabled];
  return React.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef: closure_15, setActiveIndex: callback, setItemDimensions: callback1, useReducedMotion: enabled }), items5);
};

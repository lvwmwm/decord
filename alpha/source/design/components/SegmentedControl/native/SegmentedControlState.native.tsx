// Module ID: 7917
// Function ID: 7918
// Name: SegmentedControlState
// Dependencies: [19, 575, 5257, 1652, 5491, 5505, 2]
// Exports: useSegmentedControlState

// Module 7917 (SegmentedControlState)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5505 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = { code: "(function SegmentedControlStateNativeTsx1(index,dimensions){let[itemDimensions,itemCount]=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));})" };
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlState.native.tsx");

export function useSegmentedControlState(pageWidth) {
  let tmp13;
  let tmp14;
  let tmp15;
  let items = pageWidth.items;
  pageWidth = pageWidth.pageWidth;
  let num = pageWidth.defaultIndex;
  if (num === undefined) {
    num = 0;
  }
  let PX_24 = pageWidth.itemSpacing;
  if (PX_24 === undefined) {
    let tmp = pageWidth;
    PX_24 = pageWidth(PX_24[1]).space.PX_24;
  }
  const onPageChange = pageWidth.onPageChange;
  const onPageChangeStart = pageWidth.onPageChangeStart;
  const onSetActiveIndex = pageWidth.onSetActiveIndex;
  let callback1;
  let obj = onPageChange;
  const enabled = onPageChange.useContext(items(PX_24[2]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = items(PX_24[3]);
  const sharedValue = obj2.useSharedValue([]);
  let obj3 = items(PX_24[3]);
  const sharedValue1 = obj3.useSharedValue(-1);
  let obj4 = items(PX_24[3]);
  const sharedValue2 = obj4.useSharedValue(0);
  const obj5 = items(PX_24[3]);
  const sharedValue3 = obj5.useSharedValue(0);
  const obj6 = items(PX_24[3]);
  const sharedValue4 = obj6.useSharedValue(num);
  const items1 = [num, num];
  const obj7 = items(PX_24[3]);
  const sharedValue5 = obj7.useSharedValue(items1);
  const obj8 = items(PX_24[3]);
  const animatedRef = obj8.useAnimatedRef();
  const obj9 = items(PX_24[3]);
  const sharedValue6 = obj9.useSharedValue(-1);
  const onPageChangeRef = onPageChange.useRef(onPageChange);
  const items2 = [onPageChange];
  const layoutEffect = onPageChange.useLayoutEffect(() => {
    onPageChangeRef.current = onPageChange;
  }, items2);
  const items3 = [sharedValue4, onPageChangeStart, pageWidth, sharedValue1, animatedRef, enabled, onSetActiveIndex];
  const setActiveIndex = onPageChange.useCallback((arg0) => {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    if (flag) {
      let tmp = sharedValue4;
      flag = sharedValue4.get() !== arg0;
    }
    if (flag) {
      let obj = items(PX_24[4]);
      let tmp5 = PX_24;
      let result = obj.triggerHapticFeedback(items(PX_24[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
    let obj2 = sharedValue4;
    if (arg0 !== sharedValue4.get()) {
      if (null != onPageChangeStart) {
        tmp14(arg0, () => {
          const result = sharedValue4.set(closure_0);
          const result1 = closure_0 * pageWidth;
          const result2 = sharedValue1.set(result1);
          let tmp5 = !flag2;
          const tmp = closure_0;
          if (tmp5) {
            tmp5 = !enabled;
          }
          if (tmp5) {
            const obj = useIsScreenReaderEnabled;
            tmp5 = !obj.getIsScreenReaderEnabled();
          }
          if (animatedRef != null) {
            const current = animatedRef.current;
            if (current != null) {
              const obj2 = { x: result1, animated: tmp5 };
              current.scrollTo(obj2);
            }
          }
          if (onSetActiveIndex != null) {
            tmp10(tmp);
          }
        });
      } else {
        let result1 = obj2.set(arg0);
        let result2 = arg0 * flag2;
        const result3 = sharedValue1.set(result2);
        let tmp8 = !flag2;
        if (tmp8) {
          tmp8 = !enabled;
        }
        if (tmp8) {
          const tmp10 = PX_24;
          const obj3 = items(PX_24[5]);
          tmp8 = !obj3.getIsScreenReaderEnabled();
        }
        if (animatedRef != null) {
          let current = animatedRef.current;
          if (current != null) {
            const obj4 = { x: result2, animated: tmp8 };
            current.scrollTo(obj4);
          }
        }
        if (onSetActiveIndex != null) {
          onSetActiveIndex(arg0);
        }
      }
    }
  }, items3);
  const items4 = [onPageChangeStart, sharedValue, items.length];
  let c0;
  let c1;
  [tmp13, tmp14, tmp15] = items4;
  class SegmentedControlStateNativeTsx1 {
    constructor(arg0, arg1) {
      _undefined.get()[arg0] = arg1;
      items = [...c0.get()];
      const result = _undefined.set(items.slice(0, c1));
    }
  }
  const items5 = [tmp14, tmp15];
  SegmentedControlStateNativeTsx1.__closure = items5;
  SegmentedControlStateNativeTsx1.__workletHash = 572134650279;
  SegmentedControlStateNativeTsx1.__initData = tmp13;
  const items6 = [sharedValue, items.length];
  callback1 = onPageChange.useCallback(SegmentedControlStateNativeTsx1, items6);
  const items7 = [sharedValue4, sharedValue5, animatedRef, sharedValue1, sharedValue2, sharedValue3, items, sharedValue, PX_24, pageWidth, sharedValue6, setActiveIndex, callback1, enabled];
  return obj.useMemo(() => ({ activeIndex: sharedValue4, visiblePageRange: sharedValue5, pagerRef: animatedRef, scrollTarget: sharedValue1, scrollOverflow: sharedValue2, scrollOffset: sharedValue3, items, itemDimensions: sharedValue, itemSpacing: PX_24, pageWidth, pressedIndex: sharedValue6, onPageChangeRef, setActiveIndex, setItemDimensions: callback1, useReducedMotion: enabled }), items7);
}

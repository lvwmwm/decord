// Module ID: 12662
// Function ID: 12663
// Name: useSegmentedPagesHeight
// Dependencies: [32, 19, 4566, 1479, 1613, 2]
// Exports: usePageHeights, usePagerFillHeight, usePagesHeightStyle

// Module 12662 (useSegmentedPagesHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const __initData = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
let result = size.fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = function usePageHeights() {
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue([]);
  let closure_1 = react.useRef([]);
  let items = [sharedValue];
  const obj2 = {
    pageHeights: sharedValue,
    handlePageContentSize: react.useCallback((arg0, arg1, arg2) => {
      const tmp2 = arg2 <= 0 || ref.current[arg0] === arg2;
      if (!tmp2) {
        ref.current[arg0] = arg2;
        const items = [];
        set = sharedValue.set;
        HermesBuiltin.arraySpread(items, ref.current, 0);
        const result = set(items);
      }
    }, items)
  };
  return obj2;
};
export const usePagerFillHeight = function usePagerFillHeight(scrollPosition) {
  let closure_3;
  let first;
  let closure_0 = scrollPosition;
  const height = useWindowDimensionsDefault().height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  [first, closure_3] = react.useState(0);
  const ref = react.useRef(null);
  const items = [height, bottom, scrollPosition];
  let obj = {
    pagerRef: ref,
    fillHeight: first,
    measureFill: react.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1) => {
          let num;
          const obj = closure_1_0;
          if (closure_1_0 != null) {
            num = obj.get();
          }
          if (num == null) {
            num = 0;
          }
          const diff = height - (arg1 + num) - bottom;
          let num2 = 0;
          const tmp2 = closure_1_3;
          if (diff > 0) {
            num2 = diff;
          }
          tmp2(num2);
        });
      }
    }, items)
  };
  return obj;
};
export const usePagesHeightStyle = function usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight) {
  _require = pageHeights;
  let num = fillHeight;
  if (fillHeight === undefined) {
    num = 0;
  }
  const visiblePageRange = segmentedControlState.visiblePageRange;
  let obj = require("ReanimatedRexport");
  const fn = function u() {
    let obj;
    const value = pageHeights.get();
    const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
    num = value[tmp2[0]];
    const _Math = Math;
    const tmp3 = tmp2[1];
    if (num == null) {
      num = 0;
    }
    let num2 = value[tmp3];
    if (num2 == null) {
      num2 = 0;
    }
    const bound = Math.max(max(num, num2), num);
    if (bound > 0) {
      obj = { height: bound };
      const obj2 = { height: bound };
    } else {
      obj = {};
    }
    return obj;
  };
  fn.__closure = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__workletHash = 7484186791578;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
};

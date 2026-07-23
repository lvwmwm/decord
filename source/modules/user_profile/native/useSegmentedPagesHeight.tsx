// Module ID: 12108
// Function ID: 94854
// Name: usePageHeights
// Dependencies: [57, 31, 3991, 1450, 1557, 2]
// Exports: usePageHeights, usePagerFillHeight, usePagesHeightStyle

// Module 12108 (usePageHeights)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_5 = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
let result = require("module_3991").fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = function usePageHeights() {
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue([]);
  let closure_1 = React.useRef([]);
  let items = [sharedValue];
  obj = {
    pageHeights: sharedValue,
    handlePageContentSize: React.useCallback((arg0, arg1, arg2) => {
      let tmp = arg2 <= 0;
      if (!tmp) {
        tmp = ref.current[arg0] === arg2;
      }
      if (!tmp) {
        ref.current[arg0] = arg2;
        const items = [];
        HermesBuiltin.arraySpread(ref.current, 0);
        const result = sharedValue.set(items);
      }
    }, items)
  };
  return obj;
};
export const usePagerFillHeight = function usePagerFillHeight() {
  const height = bottom(1450)().height;
  bottom = bottom(1557)().bottom;
  const tmp = ref(React.useState(0), 2);
  const dependencyMap = tmp[1];
  ref = React.useRef(null);
  const items = [height, bottom];
  return {
    pagerRef: ref,
    fillHeight: tmp[0],
    measureFill: React.useCallback(() => {
      const current = ref.current;
      if (null != current) {
        current.measureInWindow((arg0, arg1) => {
          const diff = outer1_0 - arg1 - outer1_1;
          let num = 0;
          if (diff > 0) {
            num = diff;
          }
          outer1_2(num);
        });
      }
    }, items)
  };
};
export const usePagesHeightStyle = function usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight) {
  let num = fillHeight;
  const _require = pageHeights;
  if (fillHeight === undefined) {
    num = 0;
  }
  let visiblePageRange;
  visiblePageRange = segmentedControlState.visiblePageRange;
  let obj = _require(visiblePageRange[2]);
  const fn = function u() {
    const value = pageHeights.get();
    const tmp2 = outer1_3(visiblePageRange.get(), 2);
    let num = 0;
    if (null != value[tmp2[0]]) {
      num = tmp3;
    }
    let num2 = 0;
    if (null != value[tmp2[1]]) {
      num2 = tmp4;
    }
    const bound = Math.max(Math.max(num, num2), num);
    if (bound > 0) {
      let obj = { height: bound };
    } else {
      obj = {};
    }
    return obj;
  };
  obj = { pageHeights, visiblePageRange, fillHeight: num };
  fn.__closure = obj;
  fn.__workletHash = 7484186791578;
  fn.__initData = closure_5;
  return obj.useAnimatedStyle(fn);
};

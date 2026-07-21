// Module ID: 11988
// Function ID: 92639
// Name: usePageHeights
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: usePageHeights, usePagerFillHeight, usePagesHeightStyle

// Module 11988 (usePageHeights)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";

let closure_5 = { code: "function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}" };
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_profile/native/useSegmentedPagesHeight.tsx");

export const usePageHeights = function usePageHeights() {
  let obj = arg1(dependencyMap[2]);
  const sharedValue = obj.useSharedValue([]);
  const arg1 = sharedValue;
  let closure_1 = React.useRef([]);
  const items = [sharedValue];
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
  const height = importDefault(closure_2[3])().height;
  const arg1 = height;
  const bottom = importDefault(closure_2[4])().bottom;
  const importDefault = bottom;
  const tmp = callback(React.useState(0), 2);
  closure_2 = tmp[1];
  const ref = React.useRef(null);
  const callback = ref;
  const items = [height, bottom];
  return {
    pagerRef: ref,
    fillHeight: tmp[0],
    measureFill: React.useCallback(() => {
      const current = ref.current;
      if (null != current) {
        current.measureInWindow((arg0, arg1) => {
          const diff = closure_0 - arg1 - closure_1;
          let num = 0;
          if (diff > 0) {
            num = diff;
          }
          closure_2(num);
        });
      }
    }, items)
  };
};
export const usePagesHeightStyle = function usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight) {
  let num = fillHeight;
  if (fillHeight === undefined) {
    num = 0;
  }
  const importDefault = num;
  let dependencyMap;
  const visiblePageRange = segmentedControlState.visiblePageRange;
  dependencyMap = visiblePageRange;
  let obj = pageHeights(dependencyMap[2]);
  const fn = function u() {
    const value = arg1.get();
    const tmp2 = callback(visiblePageRange.get(), 2);
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

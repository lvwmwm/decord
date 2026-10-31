// Module ID: 15006
// Function ID: 15007
// Name: UserProfileTabPages
// Dependencies: [32, 19, 17, 21, 5095, 1491, 1625, 5274, 5303, 14177, 2]
// Exports: useMeasuredTabItems

// Module 15006 (UserProfileTabPages)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const __initData = { code: "function UserProfileTabPagesTsx1(){const{isDragging,activeIndex,pageHeights}=this.__closure;if(isDragging.get())return-1;const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;}" };
const __initData2 = { code: "function UserProfileTabPagesTsx2(index){const{destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,runOnJS,scrollUpToFit}=this.__closure;if(index===-1||index===destinationIndex.get())return;const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index);if(isInitialPage||scrollPosition==null||fillHeight<=0)return;const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index],fillHeight);if(heightDelta>0){runOnJS(scrollUpToFit)(heightDelta,scrollPosition.get());}}" };
const __initData3 = { code: "function UserProfileTabPagesTsx3(){const{pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY}=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];}" };
const __initData4 = { code: "function UserProfileTabPagesTsx4([targetHeight,scrollY,releaseY]){const{pagerHeight,scrollPosition,fillHeight,releaseScrollY}=this.__closure;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}}" };
const __initData5 = { code: "function UserProfileTabPagesTsx5(){const{pagerHeight}=this.__closure;const height=pagerHeight.get();return height>0?{height:height}:{};}" };
const __initData6 = { code: "function UserProfileTabPagesTsx6(){const{isDragging}=this.__closure;isDragging.set(true);}" };
const __initData7 = { code: "function UserProfileTabPagesTsx7(){const{isDragging}=this.__closure;isDragging.set(false);}" };
const memoResult = react.memo(function UserProfileTabPages(arg0) {
  let c3;
  let pageHeights;
  let parentPagerGesture;
  let scrollPosition;
  let scrollViewRef;
  let state;
  let tmp2;
  ({ state, pageHeights, scrollPosition, scrollViewRef, parentPagerGesture } = arg0);
  c3 = undefined;
  const height = useWindowDimensionsDefault().height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = _slicedToArray(react.useState(0), 2);
  [tmp2, c3] = tmp;
  const ref = react.useRef(null);
  let items = [height, bottom, scrollPosition];
  let closure_1 = tmp2;
  const activeIndex = state.activeIndex;
  const visiblePageRange = state.visiblePageRange;
  const callback = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1) => {
        let num;
        const obj = scrollPosition;
        if (scrollPosition != null) {
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
  }, items);
  let obj = parentPagerGesture(5095);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = parentPagerGesture(5095);
  const sharedValue1 = obj2.useSharedValue(-1);
  let obj3 = parentPagerGesture(5095);
  const sharedValue2 = obj3.useSharedValue(false);
  const obj4 = parentPagerGesture(5095);
  const sharedValue3 = obj4.useSharedValue(-1);
  const useReducedMotion = state.useReducedMotion;
  const items1 = [scrollViewRef, sharedValue1, useReducedMotion];
  const callback1 = react.useCallback((arg0, arg1) => {
    scrollViewRef = arg0;
    let closure_1 = arg1;
    let current;
    if (scrollViewRef != null) {
      current = scrollViewRef.current;
    }
    let nativeScrollRef;
    if (current != null) {
      nativeScrollRef = current.getNativeScrollRef();
    }
    let innerViewRef;
    if (current != null) {
      innerViewRef = current.getInnerViewRef();
    }
    const tmp4 = null != current && null != nativeScrollRef && null != innerViewRef;
    if (tmp4) {
      nativeScrollRef.measure((arg0, arg1, arg2, arg3) => {
        closure_0 = arg3;
        innerViewRef.measure((arg0, arg1, arg2, arg3) => {
          let tmp5;
          const bound = Math.max(arg3 - closure_0 - closure_0, 0);
          const result = sharedValue1.set(bound);
          if (closure_1 > bound) {
            const obj = { y: bound, animated: tmp5 };
            tmp5 = !useReducedMotion;
            const scrollTo = current.scrollTo;
            if (!useReducedMotion) {
              const obj2 = parentPagerGesture(dependencyMap[7]);
              tmp5 = !obj2.getIsScreenReaderEnabled();
            }
            scrollTo(obj);
          }
        });
      });
    }
  }, items1);
  const fn = function b() {
    if (sharedValue2.get()) {
      return -1;
    } else {
      const _Math = Math;
      const rounded = Math.round(activeIndex.get());
      let num = -1;
      if (null != pageHeights.get()[rounded]) {
        num = rounded;
      }
      return num;
    }
  };
  fn.__closure = { isDragging: sharedValue2, activeIndex, pageHeights };
  fn.__workletHash = 5702222355442;
  fn.__initData = __initData;
  const fn2 = function v(arg0) {
    if (-1 !== arg0) {
      if (arg0 !== sharedValue3.get()) {
        const value = obj2.get();
        const result = obj2.set(arg0);
        if (-1 !== value) {
          const obj3 = scrollPosition;
          if (null != scrollPosition) {
            if (closure_1 > 0) {
              const _Math = Math;
              const value2 = sharedValue.get();
              const diff = value2 - Math.max(pageHeights.get()[arg0], tmp);
              if (diff > 0) {
                const obj = parentPagerGesture(dependencyMap[4]);
                const runOnJSResult = obj.runOnJS(callback1);
                runOnJSResult(diff, obj3.get());
              }
            }
          }
        }
      }
    }
  };
  const obj5 = parentPagerGesture(5095);
  fn2.__closure = { destinationIndex: sharedValue3, scrollPosition, fillHeight: tmp2, pagerHeight: sharedValue, pageHeights, runOnJS: parentPagerGesture(5095).runOnJS, scrollUpToFit: callback1 };
  fn2.__workletHash = 14291429985222;
  fn2.__initData = __initData2;
  ({ destinationIndex: sharedValue3, scrollPosition, fillHeight: tmp2, pagerHeight: sharedValue, pageHeights, runOnJS: parentPagerGesture(5095).runOnJS, scrollUpToFit: callback1 });
  const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
  const obj7 = parentPagerGesture(5095);
  class D {
    constructor() {
      const value = pageHeights.get();
      const tmp2 = _slicedToArray(visiblePageRange.get(), 2);
      let num = value[tmp2[0]];
      const _Math = Math;
      const tmp3 = tmp2[1];
      if (num == null) {
        num = 0;
      }
      let num2 = value[tmp3];
      if (num2 == null) {
        num2 = 0;
      }
      const items = [Math.max(max(num, num2), closure_1), , ];
      let num3;
      const obj = scrollPosition;
      if (scrollPosition != null) {
        num3 = obj.get();
      }
      if (num3 == null) {
        num3 = 0;
      }
      items[1] = num3;
      items[2] = sharedValue1.get();
      return items;
    }
  }
  D.__closure = { pageHeights, visiblePageRange, fillHeight: tmp2, scrollPosition, releaseScrollY: sharedValue1 };
  D.__workletHash = 11095612385739;
  D.__initData = __initData3;
  class S {
    constructor(arg0) {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = arg0;
      const value = sharedValue.get();
      let tmp5 = tmp < value;
      const obj = sharedValue;
      if (tmp5) {
        tmp5 = null != scrollPosition;
      }
      if (tmp5) {
        tmp5 = closure_1 > 0;
      }
      let tmp9 = tmp;
      if (tmp5) {
        if (tmp3 >= 0) {
          let bound;
          if (tmp2 <= tmp3 + 1) {
            const result = sharedValue1.set(-1);
            bound = tmp;
          }
          tmp9 = bound;
        }
        const _Math = Math;
        const _Math2 = Math;
        bound = Math.max(tmp, Math.min(value, tmp2 + closure_1));
      }
      if (tmp9 !== value) {
        const result1 = obj.set(tmp9);
      }
    }
  }
  S.__closure = { pagerHeight: sharedValue, scrollPosition, fillHeight: tmp2, releaseScrollY: sharedValue1 };
  S.__workletHash = 8135984088379;
  S.__initData = __initData4;
  const animatedReaction1 = obj7.useAnimatedReaction(D, S);
  const obj8 = parentPagerGesture(5095);
  class T {
    constructor() {
      let obj;
      const value = sharedValue.get();
      if (value > 0) {
        obj = { height: value };
        const obj2 = { height: value };
      } else {
        obj = {};
      }
      return obj;
    }
  }
  T.__closure = { pagerHeight: sharedValue };
  T.__workletHash = 2768145020675;
  T.__initData = __initData5;
  class M {
    constructor() {
      const result = sharedValue2.set(true);
    }
  }
  M.__closure = { isDragging: sharedValue2 };
  M.__workletHash = 9355002885402;
  M.__initData = __initData6;
  const items2 = [sharedValue2];
  const animatedStyle = obj8.useAnimatedStyle(T);
  class I {
    constructor() {
      const result = sharedValue2.set(false);
    }
  }
  I.__closure = { isDragging: sharedValue2 };
  I.__workletHash = 6291407031184;
  I.__initData = __initData7;
  const items3 = [sharedValue2];
  const callback2 = react.useCallback(M, items2);
  const items4 = [parentPagerGesture];
  const callback3 = react.useCallback(I, items3);
  const memo = react.useMemo(() => {
    let result;
    if (null != parentPagerGesture) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      result = NativeResult.blocksExternalGesture(tmp);
    }
    return result;
  }, items4);
  const View = ReanimatedRexportDefault.View;
  return <View ref={ref} onLayout={callback} style={animatedStyle}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTabPages.tsx");

export default memoResult;
export function useMeasuredTabItems(memo) {
  let items1;
  let ref;
  _require = memo;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue([]);
  dependencyMap = react.useRef([]);
  let items = [sharedValue];
  const callback = react.useCallback((arg0, arg1) => {
    const tmp2 = arg1 <= 0 || ref.current[arg0] === arg1;
    if (!tmp2) {
      ref.current[arg0] = arg1;
      const items = [];
      set = sharedValue.set;
      HermesBuiltin.arraySpread(items, ref.current, 0);
      const result = set(items);
    }
  }, items);
  const obj2 = {
    items: react.useMemo(() => memo.map((children, index) => {
      let closure_0 = index;
      const obj = { page: closure_1_6(closure_1_5, obj2, children.id) };
      const merged = Object.assign(children);
      return obj;
    }), items1),
    pageHeights: sharedValue
  };
  items1 = [memo, callback];
  return obj2;
}

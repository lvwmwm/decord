// Module ID: 15303
// Function ID: 15304
// Name: UserProfileTabPages
// Dependencies: [32, 19, 17, 21, 1652, 1493, 1627, 5392, 1705, 14462, 2]
// Exports: useMeasuredTabItems

// Module 15303 (UserProfileTabPages)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5392 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_7 = { code: "(function UserProfileTabPagesTsx1(){let[isDragging,activeIndex,pageHeights]=this.__closure;if(isDragging.get())return-1;const index=Math.round(activeIndex.get());return pageHeights.get()[index]==null?-1:index;})" };
let closure_8 = { code: "(function UserProfileTabPagesTsx2(index){let[destinationIndex,scrollPosition,fillHeight,pagerHeight,pageHeights,scheduleOnRN,scrollUpToFit]=this.__closure;if(index===-1||index===destinationIndex.get())return;const isInitialPage=destinationIndex.get()===-1;destinationIndex.set(index);if(isInitialPage||scrollPosition==null||fillHeight<=0)return;const heightDelta=pagerHeight.get()-Math.max(pageHeights.get()[index],fillHeight);if(heightDelta>0){scheduleOnRN(scrollUpToFit,heightDelta,scrollPosition.get());}})" };
let closure_9 = { code: "(function UserProfileTabPagesTsx3(){let[pageHeights,visiblePageRange,fillHeight,scrollPosition,releaseScrollY]=this.__closure;var _heights$lo,_heights$hi,_scrollPosition$get,_scrollPosition;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return[Math.max(contentHeight,fillHeight),(_scrollPosition$get=(_scrollPosition=scrollPosition)===null||_scrollPosition===void 0?void 0:_scrollPosition.get())!==null&&_scrollPosition$get!==void 0?_scrollPosition$get:0,releaseScrollY.get()];})" };
let closure_10 = { code: "(function UserProfileTabPagesTsx4([targetHeight,scrollY,releaseY]){let[pagerHeight,scrollPosition,fillHeight,releaseScrollY]=this.__closure;const currentHeight=pagerHeight.get();let nextHeight=targetHeight;if(targetHeight<currentHeight&&scrollPosition!=null&&fillHeight>0){if(releaseY>=0&&scrollY<=releaseY+1){releaseScrollY.set(-1);}else{nextHeight=Math.max(targetHeight,Math.min(currentHeight,scrollY+fillHeight));}}if(nextHeight!==currentHeight){pagerHeight.set(nextHeight);}})" };
let closure_11 = { code: "(function UserProfileTabPagesTsx5(){let[pagerHeight]=this.__closure;const height=pagerHeight.get();return height>0?{height:height}:{};})" };
let closure_12 = { code: "(function UserProfileTabPagesTsx6(){let[isDragging]=this.__closure;isDragging.set(true);})" };
let closure_13 = { code: "(function UserProfileTabPagesTsx7(){let[isDragging]=this.__closure;isDragging.set(false);})" };
const memoResult = react.memo(function UserProfileTabPages(arg0) {
  let activeIndex;
  let c3;
  let pageHeights;
  let scrollPosition;
  let scrollViewRef;
  let sharedValue1;
  let state;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp42;
  let tmp43;
  let tmp45;
  let tmp46;
  let useReducedMotion;
  let visiblePageRange;
  ({ state, pageHeights, scrollPosition, scrollViewRef } = arg0);
  c3 = undefined;
  let tmp2 = useReducedMotion;
  const tmp = sharedValue1;
  const height = sharedValue1(useReducedMotion[5])().height;
  const bottom = sharedValue1(useReducedMotion[6])().bottom;
  let obj = react;
  let tmp3 = _slicedToArray(react.useState(0), 2);
  [tmp4, c3] = tmp3;
  const ref = react.useRef(null);
  let items = [height, bottom, scrollPosition];
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
  ({ activeIndex, visiblePageRange } = state);
  let obj2 = scrollViewRef(useReducedMotion[4]);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = scrollViewRef(useReducedMotion[4]);
  sharedValue1 = obj3.useSharedValue(-1);
  const obj4 = scrollViewRef(useReducedMotion[4]);
  const sharedValue2 = obj4.useSharedValue(false);
  const obj5 = scrollViewRef(useReducedMotion[4]);
  useReducedMotion = state.useReducedMotion;
  const items1 = [scrollViewRef, sharedValue1, useReducedMotion];
  const sharedValue3 = obj5.useSharedValue(-1);
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
              const obj2 = useIsScreenReaderEnabled;
              tmp5 = !obj2.getIsScreenReaderEnabled();
            }
            scrollTo(obj);
          }
        });
      });
    }
  }, items1);
  const items2 = [closure_7, sharedValue2, activeIndex, pageHeights];
  let c0;
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items2;
  const tmp13 = scrollViewRef(useReducedMotion[4]);
  class UserProfileTabPagesTsx1 {
    constructor() {
      if (_undefined.get()) {
        return -1;
      } else {
        const _Math = Math;
        const rounded = Math.round(_undefined2.get());
        let num = -1;
        if (null != _undefined3.get()[rounded]) {
          num = rounded;
        }
        return num;
      }
    }
  }
  const items3 = [tmp15, tmp16, tmp17];
  UserProfileTabPagesTsx1.__closure = items3;
  UserProfileTabPagesTsx1.__workletHash = 12657345027755;
  UserProfileTabPagesTsx1.__initData = tmp14;
  const items4 = [closure_8, sharedValue3, scrollPosition, tmp4, sharedValue, pageHeights, , ];
  const useAnimatedReaction = tmp13.useAnimatedReaction;
  items4[6] = scrollViewRef(tmp2[8]).scheduleOnRN;
  items4[7] = callback1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  let c5;
  let c6;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class UserProfileTabPagesTsx2 {
    constructor(arg0) {
      if (-1 !== arg0) {
        if (arg0 !== _undefined.get()) {
          const value = obj2.get();
          const result = obj2.set(arg0);
          if (-1 !== value) {
            const obj = c1;
            if (null != c1) {
              if (c2 > 0) {
                const _Math = Math;
                const value2 = _undefined2.get();
                const diff = value2 - Math.max(_undefined3.get()[arg0], tmp2);
                if (diff > 0) {
                  _undefined4(c6, diff, obj.get());
                }
              }
            }
          }
        }
      }
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  UserProfileTabPagesTsx2.__closure = items5;
  UserProfileTabPagesTsx2.__workletHash = 17354990160146;
  UserProfileTabPagesTsx2.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(UserProfileTabPagesTsx1, UserProfileTabPagesTsx2);
  const items6 = [closure_9, pageHeights, visiblePageRange, tmp4, scrollPosition, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items6;
  const tmp7Result = scrollViewRef(tmp2[4]);
  class UserProfileTabPagesTsx3 {
    constructor() {
      const value = _undefined.get();
      const tmp2 = _slicedToArray(_undefined2.get(), 2);
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
      const items = [Math.max(max(num, num2), c2), , ];
      let num3;
      const obj = c3;
      if (c3 != null) {
        num3 = obj.get();
      }
      if (num3 == null) {
        num3 = 0;
      }
      items[1] = num3;
      items[2] = _undefined3.get();
      return items;
    }
  }
  const items7 = [tmp28, tmp29, tmp30, tmp31, tmp32];
  UserProfileTabPagesTsx3.__closure = items7;
  UserProfileTabPagesTsx3.__workletHash = 5507427512978;
  UserProfileTabPagesTsx3.__initData = tmp27;
  const items8 = [closure_10, sharedValue, scrollPosition, tmp4, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp33, tmp34, tmp35, tmp36, tmp37] = items8;
  class UserProfileTabPagesTsx4 {
    constructor(arg0) {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = arg0;
      const value = _undefined.get();
      let tmp5 = tmp < value;
      const obj = _undefined;
      if (tmp5) {
        tmp5 = null != c1;
      }
      if (tmp5) {
        tmp5 = c2 > 0;
      }
      let tmp9 = tmp;
      if (tmp5) {
        if (tmp3 >= 0) {
          let bound;
          if (tmp2 <= tmp3 + 1) {
            const result = _undefined2.set(-1);
            bound = tmp;
          }
          tmp9 = bound;
        }
        const _Math = Math;
        const _Math2 = Math;
        bound = Math.max(tmp, Math.min(value, tmp2 + c2));
      }
      if (tmp9 !== value) {
        const result1 = obj.set(tmp9);
      }
    }
  }
  const items9 = [tmp34, tmp35, tmp36, tmp37];
  UserProfileTabPagesTsx4.__closure = items9;
  UserProfileTabPagesTsx4.__workletHash = 12442150107490;
  UserProfileTabPagesTsx4.__initData = tmp33;
  const animatedReaction1 = tmp7Result.useAnimatedReaction(UserProfileTabPagesTsx3, UserProfileTabPagesTsx4);
  const items10 = [closure_11, sharedValue];
  c0 = undefined;
  [tmp39, tmp40] = items10;
  const tmp7Result2 = scrollViewRef(tmp2[4]);
  class UserProfileTabPagesTsx5 {
    constructor() {
      let obj;
      const value = _undefined.get();
      if (value > 0) {
        obj = { height: value };
        const obj2 = { height: value };
      } else {
        obj = {};
      }
      return obj;
    }
  }
  const items11 = [tmp40];
  UserProfileTabPagesTsx5.__closure = items11;
  UserProfileTabPagesTsx5.__workletHash = 14364504137498;
  UserProfileTabPagesTsx5.__initData = tmp39;
  const items12 = [closure_12, sharedValue2];
  c0 = undefined;
  [tmp42, tmp43] = items12;
  class UserProfileTabPagesTsx6 {
    constructor() {
      const result = _undefined.set(true);
    }
  }
  const items13 = [tmp43];
  UserProfileTabPagesTsx6.__closure = items13;
  UserProfileTabPagesTsx6.__workletHash = 5669274193379;
  UserProfileTabPagesTsx6.__initData = tmp42;
  const items14 = [sharedValue2];
  const animatedStyle = tmp7Result2.useAnimatedStyle(UserProfileTabPagesTsx5);
  const items15 = [closure_13, sharedValue2];
  c0 = undefined;
  [tmp45, tmp46] = items15;
  class UserProfileTabPagesTsx7 {
    constructor() {
      const result = _undefined.set(false);
    }
  }
  const items16 = [tmp46];
  UserProfileTabPagesTsx7.__closure = items16;
  UserProfileTabPagesTsx7.__workletHash = 9823673150153;
  UserProfileTabPagesTsx7.__initData = tmp45;
  const items17 = [sharedValue2];
  const callback2 = obj.useCallback(UserProfileTabPagesTsx6, items14);
  const callback3 = obj.useCallback(UserProfileTabPagesTsx7, items17);
  const View = tmp(tmp2[4]).View;
  return <View ref={ref} onLayout={callback} style={animatedStyle}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTabPages.tsx");

export default memoResult;
export function useMeasuredTabItems(memo) {
  let items1;
  let ref;
  _require = memo;
  let obj = require("module_1652");
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

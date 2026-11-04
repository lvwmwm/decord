// Module ID: 5747
// Function ID: 5748
// Name: BottomSheetRotationResync
// Dependencies: [19, 5400, 1652, 5428, 5399, 2]
// Exports: BottomSheetRotationResync

// Module 5747 (BottomSheetRotationResync)
import BottomSheetSnapPoints from "BottomSheetSnapPoints" /* 5399 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function BottomSheetRotationResyncNativeTsx1(){let[animatedIndex,animatedAnimationState,ANIMATION_STATE,isResyncPending]=this.__closure;return{index:animatedIndex.get(),isAnimating:animatedAnimationState.get()===ANIMATION_STATE.RUNNING,isPending:isResyncPending.get()};})" };
let closure_4 = { code: "(function BottomSheetRotationResyncNativeTsx2({index:index,isAnimating:isAnimating,isPending:isPending}){let[settledIndex,wasAtHighestSnapPoint,animatedSnapPoints]=this.__closure;if(isPending||isAnimating){return;}const roundedIndex=Math.round(index);if(roundedIndex<0||Math.abs(index-roundedIndex)>0.01){return;}settledIndex.set(roundedIndex);wasAtHighestSnapPoint.set(roundedIndex===animatedSnapPoints.get().length-1);})" };
let closure_5 = { code: "(function BottomSheetRotationResyncNativeTsx3(){let[animatedContainerHeight]=this.__closure;return animatedContainerHeight.get();})" };
let closure_6 = { code: "(function BottomSheetRotationResyncNativeTsx4(height,previousHeight){let[isResyncPending,runOnJS,scheduleResync]=this.__closure;if(previousHeight==null||previousHeight<=0||height<=0||height===previousHeight){return;}isResyncPending.set(true);runOnJS(scheduleResync)(true);})" };
let closure_7 = { code: "(function BottomSheetRotationResyncNativeTsx5(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.get();})" };
let closure_8 = { code: "(function BottomSheetRotationResyncNativeTsx6(_snapPoints,previousSnapPoints){let[isResyncPending,runOnJS,scheduleResync]=this.__closure;if(previousSnapPoints==null||!isResyncPending.get()){return;}runOnJS(scheduleResync)(false);})" };
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetRotationResync.native.tsx");

export function BottomSheetRotationResync(bottomSheetRef) {
  let animatedAnimationState;
  let animatedContainerHeight;
  let animatedIndex;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const isExitingRef = bottomSheetRef.isExitingRef;
  let tmp = bottomSheetRef;
  let obj = bottomSheetRef(isExitingRef[1]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedContentGestureState = bottomSheetInternal.animatedContentGestureState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  ({ animatedContainerHeight, animatedIndex, animatedAnimationState } = bottomSheetInternal);
  const obj2 = bottomSheetRef(isExitingRef[2]);
  const sharedValue = obj2.useSharedValue(-1);
  const obj3 = bottomSheetRef(isExitingRef[2]);
  const sharedValue1 = obj3.useSharedValue(false);
  const obj4 = bottomSheetRef(isExitingRef[2]);
  const sharedValue2 = obj4.useSharedValue(false);
  const ref = animatedSnapPoints.useRef(null);
  const ref2 = animatedSnapPoints.useRef(null);
  const items = [animatedContentGestureState, animatedHandleGestureState, animatedSnapPoints, bottomSheetRef, isExitingRef, sharedValue2, sharedValue, sharedValue1];
  const callback = animatedSnapPoints.useCallback(() => {
    ref.current = null;
    if (!isExitingRef.current) {
      const value = animatedContentGestureState.get();
      if (value !== LegacyBaseButton.State.ACTIVE) {
        const value2 = animatedHandleGestureState.get();
        if (value2 !== LegacyBaseButton.State.ACTIVE) {
          const obj = { settledIndex: sharedValue.get(), wasAtHighestSnapPoint: sharedValue1.get(), snapPointCount: animatedSnapPoints.get().length };
          const getRotationResyncIndex = BottomSheetSnapPoints.getRotationResyncIndex;
          BottomSheetSnapPoints;
          const rotationResyncIndex = getRotationResyncIndex(obj);
          if (null != rotationResyncIndex) {
            const current = bottomSheetRef.current;
            if (current != null) {
              current.setToIndex(rotationResyncIndex);
            }
          }
        }
      }
      const result = sharedValue2.set(false);
    }
  }, items);
  const items1 = [callback, sharedValue2];
  const callback1 = animatedSnapPoints.useCallback((arg0) => {
    if (null != ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(ref.current);
    }
    ref.current = requestAnimationFrame(callback);
    if (arg0) {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
      }
      const _setTimeout = setTimeout;
      ref2.current = setTimeout(() => {
        ref2.current = null;
        const result = sharedValue2.set(false);
      }, 500);
    }
  }, items1);
  const effect = animatedSnapPoints.useEffect(() => () => {
    if (null != ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(tmp.current);
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp4.current);
    }
  }, []);
  const items2 = [animatedContentGestureState, animatedIndex, animatedAnimationState, , ];
  const useAnimatedReaction = bottomSheetRef(isExitingRef[2]).useAnimatedReaction;
  const tmp10 = bottomSheetRef(isExitingRef[2]);
  items2[3] = bottomSheetRef(isExitingRef[1]).ANIMATION_STATE;
  items2[4] = sharedValue2;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class BottomSheetRotationResyncNativeTsx1 {
    constructor() {
      const obj = { index: _undefined.get(), isAnimating: _undefined2.get() === _undefined3.RUNNING, isPending: _undefined4.get() };
      return obj;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15];
  BottomSheetRotationResyncNativeTsx1.__closure = items3;
  BottomSheetRotationResyncNativeTsx1.__workletHash = 332265499455;
  BottomSheetRotationResyncNativeTsx1.__initData = tmp11;
  const items4 = [animatedHandleGestureState, sharedValue, sharedValue1, animatedSnapPoints];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items4;
  class BottomSheetRotationResyncNativeTsx2 {
    constructor(index) {
      index = index.index;
      if (!index.isPending) {
        if (!index.isAnimating) {
          const _Math = Math;
          const rounded = Math.round(index);
          let tmp3 = rounded < 0;
          if (!tmp3) {
            const _Math2 = Math;
            tmp3 = Math.abs(index - rounded) > 0.01;
          }
          if (!tmp3) {
            const result = _undefined.set(rounded);
            const result1 = _undefined2.set(rounded === _undefined3.get().length - 1);
          }
        }
      }
    }
  }
  const items5 = [tmp17, tmp18, tmp19];
  BottomSheetRotationResyncNativeTsx2.__closure = items5;
  BottomSheetRotationResyncNativeTsx2.__workletHash = 5550662404596;
  BottomSheetRotationResyncNativeTsx2.__initData = tmp16;
  const animatedReaction = useAnimatedReaction(BottomSheetRotationResyncNativeTsx1, BottomSheetRotationResyncNativeTsx2);
  const items6 = [sharedValue, animatedContainerHeight];
  c0 = undefined;
  [tmp22, tmp23] = items6;
  const tmpResult = tmp(isExitingRef[2]);
  class BottomSheetRotationResyncNativeTsx3 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp23];
  BottomSheetRotationResyncNativeTsx3.__closure = items7;
  BottomSheetRotationResyncNativeTsx3.__workletHash = 91405314278;
  BottomSheetRotationResyncNativeTsx3.__initData = tmp22;
  const items8 = [sharedValue1, sharedValue2, , ];
  const useAnimatedReaction2 = tmpResult.useAnimatedReaction;
  items8[2] = tmp(isExitingRef[2]).runOnJS;
  items8[3] = callback1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items8;
  class BottomSheetRotationResyncNativeTsx4 {
    constructor(arg0, arg1) {
      const tmp = null == arg1 || arg1 <= 0 || arg0 <= 0 || arg0 === arg1;
      if (!tmp) {
        const result = _undefined.set(true);
        _undefined2(c2)(true);
      }
    }
  }
  const items9 = [tmp25, tmp26, tmp27];
  BottomSheetRotationResyncNativeTsx4.__closure = items9;
  BottomSheetRotationResyncNativeTsx4.__workletHash = 10618511840168;
  BottomSheetRotationResyncNativeTsx4.__initData = tmp24;
  const animatedReaction2 = useAnimatedReaction2(BottomSheetRotationResyncNativeTsx3, BottomSheetRotationResyncNativeTsx4);
  const items10 = [sharedValue2, animatedSnapPoints];
  c0 = undefined;
  [tmp30, tmp31] = items10;
  const tmpResult2 = tmp(isExitingRef[2]);
  class BottomSheetRotationResyncNativeTsx5 {
    constructor() {
      return _undefined.get();
    }
  }
  const items11 = [tmp31];
  BottomSheetRotationResyncNativeTsx5.__closure = items11;
  BottomSheetRotationResyncNativeTsx5.__workletHash = 8125636855552;
  BottomSheetRotationResyncNativeTsx5.__initData = tmp30;
  const items12 = [ref, sharedValue2, , ];
  const useAnimatedReaction3 = tmpResult2.useAnimatedReaction;
  items12[2] = tmp(isExitingRef[2]).runOnJS;
  items12[3] = callback1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp32, tmp33, tmp34, tmp35] = items12;
  class BottomSheetRotationResyncNativeTsx6 {
    constructor(arg0, arg1) {
      const value = null != arg1 && _undefined.get();
      if (value) {
        _undefined2(c2)(false);
      }
    }
  }
  const items13 = [tmp33, tmp34, tmp35];
  BottomSheetRotationResyncNativeTsx6.__closure = items13;
  BottomSheetRotationResyncNativeTsx6.__workletHash = 16028021278103;
  BottomSheetRotationResyncNativeTsx6.__initData = tmp32;
  const animatedReaction3 = useAnimatedReaction3(BottomSheetRotationResyncNativeTsx5, BottomSheetRotationResyncNativeTsx6);
  return null;
}

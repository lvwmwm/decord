// Module ID: 11585
// Function ID: 11586
// Name: useAnimatedScrollLock
// Dependencies: [19, 1364, 4566, 2]
// Exports: useAnimatedScrollLock

// Module 11585 (useAnimatedScrollLock)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let closure_3 = PlatformUtils.isAndroid();
let context = react.createContext(null);
let closure_5 = { code: "function onBeginDrag_useAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}" };
const __initData = { code: "function onEndDrag_useAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}" };
const __initData2 = { code: "function onMomentumEnd_useAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}" };
const __initData3 = { code: "function onScroll_useAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}" };
const __initData4 = { code: "function useAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export const useAnimatedScrollLock = function useAnimatedScrollLock(arg0) {
  let fn;
  let fn2;
  let obj6;
  let tmp3Result3;
  let tmp3Result4;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const onScrollHandler = obj.onScrollHandler;
  const onScrollHandlerWorkletized = obj.onScrollHandlerWorkletized;
  let scrollLocked;
  let scrollOffsetValue;
  let isDragScrolling;
  let animatedRef;
  context = scrollLocked.useContext(isDragScrolling);
  const ref = scrollLocked.useRef(undefined);
  let obj2 = onScrollHandler(onScrollHandlerWorkletized[2]);
  const sharedValue = obj2.useSharedValue(false);
  let obj3 = onScrollHandler(onScrollHandlerWorkletized[2]);
  const sharedValue1 = obj3.useSharedValue(0);
  let gestureRef;
  const obj4 = onScrollHandler(onScrollHandlerWorkletized[2]);
  const sharedValue2 = obj4.useSharedValue(false);
  if (context != null) {
    gestureRef = context.gestureRef;
  }
  if (gestureRef == null) {
    gestureRef = ref;
  }
  scrollLocked = undefined;
  if (context != null) {
    scrollLocked = context.scrollLocked;
  }
  if (scrollLocked == null) {
    scrollLocked = sharedValue;
  }
  scrollOffsetValue = undefined;
  if (context != null) {
    scrollOffsetValue = context.scrollOffsetValue;
  }
  if (scrollOffsetValue == null) {
    scrollOffsetValue = sharedValue1;
  }
  isDragScrolling = undefined;
  if (context != null) {
    isDragScrolling = context.isDragScrolling;
  }
  if (isDragScrolling == null) {
    isDragScrolling = sharedValue2;
  }
  const tmp3Result = onScrollHandler(onScrollHandlerWorkletized[2]);
  animatedRef = tmp3Result.useAnimatedRef();
  const obj5 = { onScroll: tmp3Result3.useAnimatedScrollHandler(obj6), animatedProps: tmp3Result4.useAnimatedProps(H), scrollerRef: animatedRef, gestureRef };
  obj6 = { onBeginDrag: D, onEndDrag: fn, onMomentumEnd: fn2, onScroll: S };
  tmp3Result3 = onScrollHandler(onScrollHandlerWorkletized[2]);
  class D {
    constructor(arg0, arg1) {
      arg1.momentumEndCount = 0;
      const result = isDragScrolling.set(true);
    }
  }
  D.__closure = { isDragScrolling };
  D.__workletHash = 5670175593964;
  D.__initData = animatedRef;
  fn = function k(velocity) {
    const result = isDragScrolling.set(false);
    velocity = velocity.velocity;
    let num;
    const _Math = Math;
    if (velocity != null) {
      num = velocity.y;
    }
    if (num == null) {
      num = 0;
    }
    if (0 === abs(num)) {
      const result1 = scrollLocked.set(false);
    }
  };
  fn.__closure = { isDragScrolling, scrollLocked };
  fn.__workletHash = 5460992873286;
  fn.__initData = __initData;
  fn2 = function v(arg0, momentumEndCount) {
    const tmp = closure_3;
    if (tmp) {
      let num;
      if (momentumEndCount != null) {
        num = momentumEndCount.momentumEndCount;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      if (3 === sum) {
        const result = scrollLocked.set(false);
      } else if (null != momentumEndCount) {
        momentumEndCount.momentumEndCount = sum;
      }
    } else {
      const result1 = scrollLocked.set(false);
    }
  };
  const obj7 = { IS_ANDROID: scrollOffsetValue, scrollLocked };
  fn2.__closure = obj7;
  fn2.__workletHash = 5278475045322;
  fn2.__initData = __initData2;
  class S {
    constructor(contentOffset) {
      let height;
      let height2;
      let width;
      let width2;
      const y = contentOffset.contentOffset.y;
      if (true !== isDragScrolling.get()) {
        let num6 = y;
        const tmp9 = closure_3 && y < 0;
        if (tmp9) {
          const obj2 = ReanimatedRexport;
          obj2.scrollTo(animatedRef, 0, 0, false);
          num6 = 0;
        }
        const result = scrollOffsetValue.set(num6);
      } else {
        y < scrollOffsetValue.get();
        if (scrollLocked.get()) {
          if (!scrollLocked.get()) {
            const result1 = obj7.set(true);
          }
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, 0, 0, false);
          const result2 = obj6.set(0);
        } else {
          const result3 = obj6.set(y);
        }
      }
      ({ width, height } = contentOffset.layoutMeasurement);
      ({ width: width2, height: height2 } = contentOffset.contentSize);
      if (null != onScrollHandler) {
        size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        const obj3 = ReanimatedRexport;
        obj3.runOnJS(tmp17)(size);
      }
      if (onScrollHandlerWorkletized != null) {
        const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        tmp21(size1);
      }
    }
  }
  S.__closure = { isDragScrolling, IS_ANDROID: scrollOffsetValue, scrollTo: onScrollHandler(onScrollHandlerWorkletized[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue, scrollLocked, onScrollHandler, runOnJS: onScrollHandler(onScrollHandlerWorkletized[2]).runOnJS, onScrollHandlerWorkletized };
  S.__workletHash = 9155123629104;
  S.__initData = __initData3;
  ({ isDragScrolling, IS_ANDROID: scrollOffsetValue, scrollTo: onScrollHandler(onScrollHandlerWorkletized[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue, scrollLocked, onScrollHandler, runOnJS: onScrollHandler(onScrollHandlerWorkletized[2]).runOnJS, onScrollHandlerWorkletized });
  tmp3Result4 = onScrollHandler(onScrollHandlerWorkletized[2]);
  class H {
    constructor() {
      const obj = { showsVerticalScrollIndicator: !scrollLocked.get() };
      return obj;
    }
  }
  H.__closure = { scrollLocked };
  H.__workletHash = 2902739817621;
  H.__initData = __initData4;
  return obj5;
};

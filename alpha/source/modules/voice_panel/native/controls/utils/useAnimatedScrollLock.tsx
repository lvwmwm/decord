// Module ID: 13329
// Function ID: 13330
// Name: useAnimatedScrollLock
// Dependencies: [19, 1377, 1652, 1705, 2]
// Exports: useAnimatedScrollLock

// Module 13329 (useAnimatedScrollLock)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

let closure_3 = PlatformUtils.isAndroid();
let context = react.createContext(null);
let closure_5 = { code: "(function onBeginDrag_useAnimatedScrollLockTsx1(_,context){let[isDragScrolling]=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);})" };
let closure_6 = { code: "(function onEndDrag_useAnimatedScrollLockTsx2(event){let[isDragScrolling,scrollLocked]=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}})" };
let closure_7 = { code: "(function onMomentumEnd_useAnimatedScrollLockTsx3(event,context){let[IS_ANDROID,scrollLocked]=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}})" };
let closure_8 = { code: "(function onScroll_useAnimatedScrollLockTsx4(event){let[isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,scheduleOnRN,onScrollHandlerWorkletized]=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&scheduleOnRN(onScrollHandler,{width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});})" };
let closure_9 = { code: "(function useAnimatedScrollLockTsx5(){let[scrollLocked]=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/useAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export function useAnimatedScrollLock(arg0) {
  let onBeginDrag;
  let onEndDrag;
  let onMomentumEnd;
  let onScroll;
  let onScrollHandler;
  let onScrollHandlerWorkletized;
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
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp33;
  let tmp34;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ onScrollHandler, onScrollHandlerWorkletized } = obj);
  context = react.useContext(context);
  const ref = react.useRef(undefined);
  const obj2 = _mod1652;
  const sharedValue = obj2.useSharedValue(false);
  const obj3 = _mod1652;
  const sharedValue1 = obj3.useSharedValue(0);
  let gestureRef;
  const obj4 = _mod1652;
  const sharedValue2 = obj4.useSharedValue(false);
  if (context != null) {
    gestureRef = context.gestureRef;
  }
  if (gestureRef == null) {
    gestureRef = ref;
  }
  let scrollLocked;
  if (context != null) {
    scrollLocked = context.scrollLocked;
  }
  if (scrollLocked == null) {
    scrollLocked = sharedValue;
  }
  let scrollOffsetValue;
  if (context != null) {
    scrollOffsetValue = context.scrollOffsetValue;
  }
  if (scrollOffsetValue == null) {
    scrollOffsetValue = sharedValue1;
  }
  let isDragScrolling;
  if (context != null) {
    isDragScrolling = context.isDragScrolling;
  }
  if (isDragScrolling == null) {
    isDragScrolling = sharedValue2;
  }
  const tmp3Result = _mod1652;
  const animatedRef = tmp3Result.useAnimatedRef();
  const items = [closure_5, isDragScrolling];
  [tmp14, tmp15] = items;
  const obj5 = { onBeginDrag, onEndDrag, onMomentumEnd, onScroll };
  onBeginDrag = function onBeginDrag(arg0, arg1) {
    arg1.momentumEndCount = 0;
    const result = _undefined.set(true);
  };
  const items1 = [tmp15];
  onBeginDrag.__closure = items1;
  onBeginDrag.__workletHash = 16715410599637;
  onBeginDrag.__initData = tmp14;
  const items2 = [closure_6, isDragScrolling, scrollLocked];
  [tmp16, tmp17, tmp18] = items2;
  onEndDrag = function onEndDrag(velocity) {
    const result = _undefined.set(false);
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
      const result1 = _undefined2.set(false);
    }
  };
  const items3 = [tmp17, tmp18];
  onEndDrag.__closure = items3;
  onEndDrag.__workletHash = 15559740677567;
  onEndDrag.__initData = tmp16;
  const items4 = [closure_7, closure_3, scrollLocked];
  [tmp19, tmp20, tmp21] = items4;
  onMomentumEnd = function onMomentumEnd(arg0, momentumEndCount) {
    const tmp = c0;
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
        const result = _undefined.set(false);
      } else if (null != momentumEndCount) {
        momentumEndCount.momentumEndCount = sum;
      }
    } else {
      const result1 = _undefined.set(false);
    }
  };
  const items5 = [tmp20, tmp21];
  onMomentumEnd.__closure = items5;
  onMomentumEnd.__workletHash = 3109808246259;
  onMomentumEnd.__initData = tmp19;
  const items6 = [closure_8, isDragScrolling, closure_3, , , , , , , ];
  const useAnimatedScrollHandler = _mod1652.useAnimatedScrollHandler;
  items6[3] = _mod1652.scrollTo;
  items6[4] = animatedRef;
  items6[5] = scrollOffsetValue;
  items6[6] = scrollLocked;
  items6[7] = onScrollHandler;
  items6[8] = _mod1705.scheduleOnRN;
  items6[9] = onScrollHandlerWorkletized;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items6;
  onScroll = function onScroll(contentOffset) {
    let height;
    let height2;
    let width;
    let width2;
    const y = contentOffset.contentOffset.y;
    if (true !== _undefined.get()) {
      let num6 = y;
      const tmp8 = c1 && y < 0;
      if (tmp8) {
        _undefined2(c3, 0, 0, false);
        num6 = 0;
      }
      const result = _undefined3.set(num6);
    } else {
      y < _undefined3.get();
      if (_undefined4.get()) {
        if (!_undefined4.get()) {
          const result1 = obj2.set(true);
        }
        _undefined2(c3, 0, 0, false);
        const result2 = obj.set(0);
      } else {
        const result3 = obj.set(y);
      }
    }
    ({ width, height } = contentOffset.layoutMeasurement);
    ({ width: width2, height: height2 } = contentOffset.contentSize);
    if (null != c6) {
      size = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
      _undefined5(tmp14, size);
    }
    if (c8 != null) {
      const size1 = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
      tmp17(size1);
    }
  };
  const items7 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  onScroll.__closure = items7;
  onScroll.__workletHash = 12056309843492;
  onScroll.__initData = tmp22;
  const items8 = [closure_9, scrollLocked];
  let c0;
  [tmp33, tmp34] = items8;
  function useAnimatedScrollLockTsx5() {
    const obj = { showsVerticalScrollIndicator: !_undefined.get() };
    return obj;
  }
  const items9 = [tmp34];
  useAnimatedScrollLockTsx5.__closure = items9;
  useAnimatedScrollLockTsx5.__workletHash = 5672658583564;
  useAnimatedScrollLockTsx5.__initData = tmp33;
  const animatedScrollHandler = useAnimatedScrollHandler(obj5);
  const tmp3Result4 = _mod1652;
  const obj6 = { onScroll: animatedScrollHandler, animatedProps: tmp3Result4.useAnimatedProps(useAnimatedScrollLockTsx5), scrollerRef: animatedRef, gestureRef };
  return obj6;
}

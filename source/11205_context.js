// Module ID: 11205
// Function ID: 87238
// Name: context
// Dependencies: []
// Exports: createUseAnimatedScrollLock

// Module 11205 (context)
const importAllResult = importAll(dependencyMap[0]);
let closure_2 = arg1(dependencyMap[1]).isAndroid();
let closure_3 = { code: "function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}" };
let closure_4 = { code: "function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}" };
let closure_5 = { code: "function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}" };
let closure_6 = { code: "function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}" };
let closure_7 = { code: "function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}" };
const context = importAllResult.createContext(() => ({}));
const obj2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx");

export const ControlsGestureScrollLock = context;
export function createUseAnimatedScrollLock(closure_12, sharedValue4, sharedValue3, sharedValue2) {
  sharedValue4 = closure_12;
  const dependencyMap = sharedValue4;
  let closure_2 = sharedValue3;
  let closure_3 = sharedValue2;
  return (A) => {
    let obj = A;
    if (A === undefined) {
      obj = {};
    }
    A = onScrollHandler;
    const arg1 = onScrollHandlerWorkletized;
    let arg2;
    let obj1 = A(arg1[2]);
    const animatedRef = obj1.useAnimatedRef();
    arg2 = animatedRef;
    obj = {};
    let obj3 = A(arg1[2]);
    obj = { onBeginDrag: fn };
    const fn = function w(arg0, arg1) {
      arg1.momentumEndCount = 0;
      const result = store.set(true);
    };
    obj1 = { isDragScrolling: arg3 };
    fn.__closure = obj1;
    fn.__workletHash = 16433590303176;
    fn.__initData = arg3;
    class H {
      constructor(arg0) {
        result = closure_3.set(false);
        velocity = A.velocity;
        y = undefined;
        if (null != velocity) {
          y = velocity.y;
        }
        num = 0;
        if (null != y) {
          num = y;
        }
        if (0 === Math.abs(num)) {
          tmp3 = closure_1;
          result1 = closure_1.set(false);
        }
        return;
      }
    }
    H.__closure = { isDragScrolling: arg3, scrollLocked: arg1 };
    H.__workletHash = 1594981610850;
    H.__initData = closure_4;
    obj.onEndDrag = H;
    class D {
      constructor(arg0, arg1) {
        if (closure_2) {
          tmp3 = null;
          momentumEndCount = undefined;
          if (null != arg1) {
            momentumEndCount = arg1.momentumEndCount;
          }
          num = 0;
          if (null != momentumEndCount) {
            num = momentumEndCount;
          }
          num2 = 1;
          sum = num + 1;
          num3 = 3;
          if (3 === sum) {
            tmp6 = closure_1;
            flag2 = false;
            result = closure_1.set(false);
          } else if (null != arg1) {
            arg1.momentumEndCount = sum;
          }
        } else {
          tmp = closure_1;
          flag = false;
          result1 = closure_1.set(false);
        }
        return;
      }
    }
    obj3 = { IS_ANDROID: arg2, scrollLocked: arg1 };
    D.__closure = obj3;
    D.__workletHash = 17525906195822;
    D.__initData = closure_5;
    obj.onMomentumEnd = D;
    const fn2 = function k(contentOffset) {
      let height;
      let height2;
      let width;
      let width2;
      const y = contentOffset.contentOffset.y;
      if (true !== store.get()) {
        let tmp13 = animatedRef;
        if (animatedRef) {
          tmp13 = y < 0;
        }
        let num7 = y;
        if (tmp13) {
          const obj2 = onScrollHandler(onScrollHandlerWorkletized[2]);
          obj2.scrollTo(animatedRef, 0, 0, false);
          num7 = 0;
        }
        const result = animatedRef.set(num7);
      } else {
        if (onScrollHandlerWorkletized.get()) {
          if (!onScrollHandlerWorkletized.get()) {
            const result1 = onScrollHandlerWorkletized.set(true);
          }
          let obj = onScrollHandler(onScrollHandlerWorkletized[2]);
          obj.scrollTo(animatedRef, 0, 0, false);
          const result2 = animatedRef.set(0);
        } else {
          const result3 = animatedRef.set(y);
        }
        const tmp28 = y < animatedRef.get();
      }
      ({ width, height } = contentOffset.layoutMeasurement);
      ({ width: width2, height: height2 } = contentOffset.contentSize);
      if (null != onScrollHandler) {
        obj = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        onScrollHandler(onScrollHandlerWorkletized[2]).runOnJS(onScrollHandler)(obj);
        const obj3 = onScrollHandler(onScrollHandlerWorkletized[2]);
      }
      if (null != onScrollHandlerWorkletized) {
        obj = { width, height, offset: y, contentWidth: width2, contentHeight: height2 };
        onScrollHandlerWorkletized(obj);
      }
    };
    fn2.__closure = { isDragScrolling: arg3, IS_ANDROID: arg2, scrollTo: A(arg1[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: arg2, scrollLocked: arg1, onScrollHandler: obj.onScrollHandler, runOnJS: A(arg1[2]).runOnJS, onScrollHandlerWorkletized: obj.onScrollHandlerWorkletized };
    fn2.__workletHash = 13271628494164;
    fn2.__initData = closure_6;
    obj.onScroll = fn2;
    obj.onScroll = obj3.useAnimatedScrollHandler(obj);
    const obj2 = { isDragScrolling: arg3, scrollLocked: arg1 };
    const obj4 = { isDragScrolling: arg3, IS_ANDROID: arg2, scrollTo: A(arg1[2]).scrollTo, scrollerRef: animatedRef, scrollOffsetValue: arg2, scrollLocked: arg1, onScrollHandler: obj.onScrollHandler, runOnJS: A(arg1[2]).runOnJS, onScrollHandlerWorkletized: obj.onScrollHandlerWorkletized };
    class L {
      constructor() {
        obj = { showsVerticalScrollIndicator: !closure_1.get() };
        return obj;
      }
    }
    L.__closure = { scrollLocked: arg1 };
    L.__workletHash = 3670657775473;
    L.__initData = closure_7;
    obj.animatedProps = A(arg1[2]).useAnimatedProps(L);
    obj.scrollerRef = animatedRef;
    obj.gestureRef = A;
    return obj;
  };
}

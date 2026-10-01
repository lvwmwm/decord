// Module ID: 12297
// Function ID: 12298
// Name: PanGestureAnimations
// Dependencies: [1177, 5280, 4837, 4566, 6073, 2]
// Exports: default

// Module 12297 (PanGestureAnimations)
import native from "native" /* 1177 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import size from "module_2" /* 2 */;

let _Math, obj1, obj7, obj8, result1, result2, set, str, str2, sum, tmp10Result, tmp11, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp21Result, tmp22, tmp23, tmp25, tmp26, tmp4, tmp4Result, tmp5, tmp5Result, tmp6, tmp7, tmp8, tmp9, translationX, velocityX;

const SPRING_CONFIG = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
let obj2 = { duration: 500, easing: native.STANDARD_EASING };
const __initData = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
function getNearestValue(value, arg1, arg2) {
  let closure_0 = arg1;
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  let num2 = -1;
  if (num >= 0) {
    let num3 = 0;
    if (num > 0) {
      num3 = 1;
    }
    num2 = num3;
  }
  function getSortedByMeasure(arg0, arg1) {
    let closure_0 = arg1;
    const ArrayResult = Array(...arg0);
    return ArrayResult.sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        let num2 = 0;
        if (absolute > absolute1) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
  }
  getSortedByMeasure.__closure = {};
  getSortedByMeasure.__workletHash = 9192847351523;
  getSortedByMeasure.__initData = __initData;
  if (0 === value.length) {
    return arg1;
  } else {
    let first;
    closure_0 = arg1;
    let tmp2 = globalThis;
    const _Array = Array;
    const items = [];
    HermesBuiltin.arraySpread(items, value, 0);
    const _Array2 = Array;
    const applyResult = HermesBuiltin.apply(Array, items);
    const sorted = applyResult.sort((arg0, arg1) => {
      const absolute = Math.abs(arg0 - closure_0);
      const absolute1 = Math.abs(arg1 - closure_0);
      let num = -1;
      if (absolute >= absolute1) {
        let num2 = 0;
        if (absolute > absolute1) {
          num2 = 1;
        }
        num = num2;
      }
      return num;
    });
    if (0 !== num2) {
      let found = sorted.find((item) => {
        let tmp2;
        if (num2 < 0) {
          tmp2 = closure_0 > item;
        } else {
          tmp2 = closure_0 < item;
        }
        return tmp2;
      });
      if (found == null) {
        found = sorted[0];
      }
      first = found;
    } else {
      first = sorted[0];
    }
    return first;
  }
}
getNearestValue.__closure = {};
getNearestValue.__workletHash = 4186929947751;
getNearestValue.__initData = { code: "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}" };
function withPanGestureSpring(targetHeight, velocity, arg2) {
  let obj;
  let tmp = arg2;
  const withSpring = spring.withSpring;
  spring;
  if (arg2 == null) {
    tmp = obj;
  }
  obj = { velocity };
  const merged = Object.assign(tmp);
  return withSpring(targetHeight, obj);
}
let obj3 = { SPRING_CONFIG, withSpring: spring.withSpring };
withPanGestureSpring.__closure = obj3;
withPanGestureSpring.__workletHash = 12189464558811;
withPanGestureSpring.__initData = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
function withPanGestureTiming(value, timingStandard) {
  let tmp = timingStandard;
  const withTiming = timing.withTiming;
  timing;
  if (timingStandard == null) {
    tmp = obj2;
  }
  return withTiming(value, tmp);
}
let obj4 = { TIMING_CONFIG: obj2, withTiming: timing.withTiming };
withPanGestureTiming.__closure = obj4;
withPanGestureTiming.__workletHash = 7636074551896;
withPanGestureTiming.__initData = { code: "function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}" };
let closure_8 = { code: "function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
let closure_9 = { code: "function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
let closure_10 = { code: "function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}" };
let closure_11 = { code: "function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
let result = size.fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default function usePanGesture(lowerBounds) {
  lowerBounds = lowerBounds.lowerBounds;
  const upperBounds = lowerBounds.upperBounds;
  const snapPositions = lowerBounds.snapPositions;
  let num = lowerBounds.swipeVelocityThreshold;
  if (num === undefined) {
    num = 300;
  }
  const translate = lowerBounds.translate;
  const onStart = lowerBounds.onStart;
  const onChange = lowerBounds.onChange;
  const onEnd = lowerBounds.onEnd;
  let flag = lowerBounds.vertical;
  if (flag === undefined) {
    flag = true;
  }
  const isGestureInProgress = lowerBounds.isGestureInProgress;
  let obj = lowerBounds(upperBounds[3]);
  const sharedValue = obj.useSharedValue(0);
  obj2 = lowerBounds(upperBounds[3]);
  const sharedValue1 = obj2.useSharedValue(0);
  const Gesture = lowerBounds(upperBounds[4]).Gesture;
  const PanResult = Gesture.Pan();
  class N {
    constructor(arg0) {
      obj = closure_10;
      result = closure_10.set(translate.get());
      result1 = closure_11.set(0);
      obj2 = isGestureInProgress;
      if (null != isGestureInProgress) {
        flag = true;
        result2 = obj2.set(true);
      }
      if (onStart != null) {
        tmp5 = lowerBounds;
        obj1 = { destination: null, startPosition: null };
        obj1.destination = obj.get();
        obj1.startPosition = obj.get();
        tmp4Result = tmp4(lowerBounds, obj1);
      }
      return;
    }
  }
  N.__closure = { start: sharedValue, translate, velocity: sharedValue1, isGestureInProgress, onStart };
  N.__workletHash = 7008504704609;
  N.__initData = sharedValue1;
  const onStartResult = PanResult.onStart(N);
  class C {
    constructor(arg0) {
      ({ velocityX, translationX } = lowerBounds);
      obj = closure_10;
      ({ velocityY, translationY } = lowerBounds);
      value = closure_10.get();
      tmp2 = c8;
      if (tmp2) {
        translationX = translationY;
      }
      sum = value + translationX;
      tmp4 = lowerBounds;
      if (null == lowerBounds) {
        tmp5 = upperBounds;
        tmp6 = null != upperBounds && sum > tmp5;
        tmp4 = sum;
        if (tmp6) {
          tmp4 = tmp5;
        }
      }
      tmp7 = closure_11;
      set = closure_11.set;
      if (tmp2) {
        velocityX = velocityY;
      }
      result = set(velocityX);
      obj2 = translate;
      result1 = translate.set(tmp4);
      if (onChange != null) {
        obj1 = { destination: null, startPosition: null };
        obj1.destination = obj2.get();
        obj1.startPosition = obj.get();
        tmp10Result = tmp10(lowerBounds, obj1);
      }
      return;
    }
  }
  C.__closure = { start: sharedValue, vertical: flag, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  C.__workletHash = 15962975179371;
  C.__initData = sharedValue;
  const onChangeResult = onStartResult.onChange(C);
  class T {
    constructor(arg0, arg1) {
      obj = closure_10;
      obj2 = translate;
      result = closure_10.set(translate.get());
      obj3 = snapPositions;
      if (null != snapPositions) {
        tmp25 = globalThis;
        _Math = Math;
        obj7 = closure_11;
        tmp26 = c3;
        num2 = 0;
        num = 0;
        if (Math.abs(closure_11.get()) > c3) {
          num = obj7.get();
        }
        tmp2 = getNearestValue;
        value = obj3.get();
        tmp4 = getNearestValue(value, obj2.get(), num);
        if (0 !== num) {
          tmp11 = withPanGestureSpring;
          set = obj2.set;
          if (typeof withPanGestureSpring === "function") {
            tmp13 = closure_0;
            tmp14 = closure_1;
            tmp15 = closure_0(closure_1[1]);
            tmp16 = closure_2;
            obj1 = {};
            tmp17 = obj1;
            tmp18 = closure_2;
            withSpring = tmp15.withSpring;
            merged = Object.assign(closure_2);
            obj1.velocity = tmp12;
            result1 = set(withSpring(tmp4, obj1));
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp6 = withPanGestureTiming;
          if (typeof withPanGestureTiming === "function") {
            tmp7 = closure_0;
            tmp8 = closure_1;
            obj4 = closure_0(closure_1[2]);
            tmp9 = closure_3;
            tmp5Result = tmp5(obj4.withTiming(tmp4, closure_3));
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (onEnd != null) {
          tmp22 = lowerBounds;
          tmp23 = arg1;
          obj8 = { success: null, destination: null, startPosition: null };
          obj8.success = arg1;
          obj8.destination = tmp4;
          obj8.startPosition = obj.get();
          tmp21Result = tmp21(lowerBounds, obj8);
        }
      }
      return;
    }
  }
  let obj3 = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onStart, withPanGestureSpring: onChange, withPanGestureTiming: onEnd, onEnd };
  T.__closure = obj3;
  T.__workletHash = 15665959414289;
  T.__initData = isGestureInProgress;
  const onEndResult = onChangeResult.onEnd(T);
  class S {
    constructor() {
      obj = isGestureInProgress;
      if (null != isGestureInProgress) {
        flag = false;
        result = obj.set(false);
      }
      return;
    }
  }
  S.__closure = { isGestureInProgress };
  S.__workletHash = 11128244755178;
  S.__initData = flag;
  return onEndResult.onFinalize(S);
};
export { SPRING_CONFIG };
export const TIMING_CONFIG = obj2;
export { withPanGestureSpring };
export { withPanGestureTiming };

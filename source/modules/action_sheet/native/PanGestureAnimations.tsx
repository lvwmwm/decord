// Module ID: 10832
// Function ID: 84048
// Name: getNearestValue
// Dependencies: [1273, 4542, 4131, 3991, 5217, 2]
// Exports: default

// Module 10832 (getNearestValue)
let obj = { damping: 30, mass: 1, stiffness: 250, overshootClamping: true, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
obj = { duration: 500, easing: require("Button").STANDARD_EASING };
let closure_4 = { code: "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}" };
let closure_5 = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
let closure_6 = (() => {
  function getNearestValue(arg0, arg1) {
    let num = arg2;
    let closure_0 = arg1;
    if (arg2 === undefined) {
      num = 0;
    }
    let num2;
    num2 = -1;
    if (num >= 0) {
      let num3 = 0;
      if (num > 0) {
        num3 = 1;
      }
      num2 = num3;
    }
    if (0 === arg0.length) {
      return arg1;
    } else {
      const tmpResult = tmp(arg0, arg1);
      if (0 === num2) {
        let first = tmpResult[0];
      } else {
        first = tmpResult.find((arg0) => {
          if (num2 < 0) {
            let tmp2 = closure_0 > arg0;
          } else {
            tmp2 = closure_0 < arg0;
          }
          return tmp2;
        });
      }
      return first;
    }
  }
  getNearestValue.__closure = {};
  getNearestValue.__workletHash = 4186929947751;
  getNearestValue.__initData = closure_4;
  return getNearestValue;
})();
let closure_7 = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
let tmp2 = (() => {
  export function withPanGestureSpring(value) {
    let tmp = arg2;
    if (null == arg2) {
      tmp = outer1_2;
    }
    let obj = outer1_0(outer1_1[1]);
    obj = {};
    const merged = Object.assign(tmp);
    obj["velocity"] = arg1;
    return obj.withSpring(value, obj);
  }
  obj = { SPRING_CONFIG: obj, withSpring: require(4542) /* withSpring */.withSpring };
  withPanGestureSpring.__closure = obj;
  withPanGestureSpring.__workletHash = 12189464558811;
  withPanGestureSpring.__initData = closure_7;
  return withPanGestureSpring;
})();
let closure_8 = tmp2;
let closure_9 = { code: "function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}" };
const tmp3 = (() => {
  export function withPanGestureTiming(value, timingStandard) {
    let tmp = timingStandard;
    if (null == timingStandard) {
      tmp = outer1_3;
    }
    return outer1_0(outer1_1[2]).withTiming(value, tmp);
  }
  obj = { TIMING_CONFIG: obj, withTiming: require(4131) /* withTiming */.withTiming };
  withPanGestureTiming.__closure = obj;
  withPanGestureTiming.__workletHash = 7636074551896;
  withPanGestureTiming.__initData = closure_9;
  return withPanGestureTiming;
})();
let closure_10 = tmp3;
let closure_11 = { code: "function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
let closure_12 = { code: "function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
let closure_13 = { code: "function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}" };
let closure_14 = { code: "function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
let result = require("withTiming").fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

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
  let sharedValue;
  let sharedValue1;
  let obj = lowerBounds(upperBounds[3]);
  sharedValue = obj.useSharedValue(0);
  sharedValue1 = lowerBounds(upperBounds[3]).useSharedValue(0);
  const Gesture = lowerBounds(upperBounds[4]).Gesture;
  const obj2 = lowerBounds(upperBounds[3]);
  class N {
    constructor(arg0) {
      result = c10.set(translate.get());
      result1 = useSharedValue.set(0);
      if (null != isGestureInProgress) {
        tmp3 = isGestureInProgress;
        flag = true;
        result2 = isGestureInProgress.set(true);
      }
      if (null != onStart) {
        tmp5 = onStart;
        obj = {};
        tmp6 = c10;
        obj.destination = c10.get();
        tmp7 = c10;
        obj.startPosition = c10.get();
        tmp8 = lowerBounds;
        tmp9 = onStart(lowerBounds, obj);
      }
      return;
    }
  }
  N.__closure = { start: sharedValue, translate, velocity: sharedValue1, isGestureInProgress, onStart };
  N.__workletHash = 7008504704609;
  N.__initData = closure_14;
  const PanResult = Gesture.Pan();
  class C {
    constructor(arg0) {
      ({ velocityX, translationX } = lowerBounds);
      ({ velocityY, translationY } = lowerBounds);
      value = c10.get();
      if (c8) {
        translationX = translationY;
      }
      sum = value + translationX;
      if (null != lowerBounds) {
        tmp3 = lowerBounds;
        if (sum < lowerBounds) {
          sum = lowerBounds;
        }
        tmp7 = c8;
        tmp6 = useSharedValue;
        if (c8) {
          velocityX = velocityY;
        }
        result = useSharedValue.set(velocityX);
        tmp9 = translate;
        result1 = translate.set(sum);
        tmp11 = onChange;
        if (null != onChange) {
          tmp12 = onChange;
          obj = {};
          tmp13 = translate;
          obj.destination = translate.get();
          tmp14 = c10;
          obj.startPosition = c10.get();
          tmp15 = onChange(lowerBounds, obj);
        }
        return;
      }
      tmp4 = null != upperBounds;
      if (tmp4) {
        tmp5 = upperBounds;
        tmp4 = sum > upperBounds;
      }
      if (tmp4) {
        sum = upperBounds;
      }
      return;
    }
  }
  obj = { start: sharedValue, vertical: flag, lowerBounds, upperBounds, velocity: sharedValue1, translate, onChange };
  C.__closure = obj;
  C.__workletHash = 15962975179371;
  C.__initData = closure_13;
  const onStartResult = Gesture.Pan().onStart(N);
  class T {
    constructor(arg0, arg1) {
      result = c10.set(translate.get());
      if (null != snapPositions) {
        tmp21 = globalThis;
        _Math = Math;
        tmp22 = useSharedValue;
        tmp23 = c3;
        num2 = 0;
        num = 0;
        if (Math.abs(useSharedValue.get()) > c3) {
          tmp2 = useSharedValue;
          num = useSharedValue.get();
        }
        tmp3 = onChange;
        tmp4 = snapPositions;
        tmp6 = translate;
        value = snapPositions.get();
        tmp7 = onChange(value, translate.get(), num);
        if (0 !== num) {
          tmp11 = translate;
          tmp12 = c8;
          tmp13 = useSharedValue;
          result1 = translate.set(c8(tmp7, useSharedValue.get()));
        } else {
          tmp8 = translate;
          tmp9 = c10;
          result2 = translate.set(c10(tmp7));
        }
        tmp15 = onEnd;
        if (null != onEnd) {
          tmp16 = onEnd;
          obj = {};
          tmp17 = arg1;
          obj.success = arg1;
          obj.destination = tmp7;
          tmp18 = c10;
          obj.startPosition = c10.get();
          tmp19 = lowerBounds;
          tmp20 = onEnd(lowerBounds, obj);
        }
      }
      return;
    }
  }
  obj = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: onChange, withPanGestureSpring: flag, withPanGestureTiming: sharedValue, onEnd };
  T.__closure = obj;
  T.__workletHash = 15665959414289;
  T.__initData = closure_12;
  const onChangeResult = Gesture.Pan().onStart(N).onChange(C);
  class S {
    constructor() {
      if (null != isGestureInProgress) {
        tmp = isGestureInProgress;
        flag = false;
        result = isGestureInProgress.set(false);
      }
      return;
    }
  }
  S.__closure = { isGestureInProgress };
  S.__workletHash = 11128244755178;
  S.__initData = sharedValue1;
  return Gesture.Pan().onStart(N).onChange(C).onEnd(T).onFinalize(S);
};
export const SPRING_CONFIG = obj;
export const TIMING_CONFIG = obj;

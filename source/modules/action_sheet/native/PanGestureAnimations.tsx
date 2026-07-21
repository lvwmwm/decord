// Module ID: 10792
// Function ID: 83783
// Name: getNearestValue
// Dependencies: []
// Exports: default

// Module 10792 (getNearestValue)
let obj = {};
obj = { duration: 500, easing: require(dependencyMap[0]).STANDARD_EASING };
let closure_4 = { code: "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}" };
let closure_5 = { code: "function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}" };
let closure_6 = () => {
  function getNearestValue(arg0, arg1) {
    let num = arg2;
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
            let tmp2 = arg1 > arg0;
          } else {
            tmp2 = arg1 < arg0;
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
}();
let closure_7 = { code: "function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}" };
const tmp2 = () => {
  function withPanGestureSpring(targetHeight) {
    let tmp = arg2;
    if (null == arg2) {
      tmp = closure_2;
    }
    let obj = callback(closure_1[1]);
    obj = {};
    const merged = Object.assign(tmp);
    obj["velocity"] = arg1;
    return obj.withSpring(targetHeight, obj);
  }
  const obj = { SPRING_CONFIG: obj, withSpring: require(dependencyMap[1]).withSpring };
  withPanGestureSpring.__closure = obj;
  withPanGestureSpring.__workletHash = 12189464558811;
  withPanGestureSpring.__initData = closure_7;
  return withPanGestureSpring;
}();
let closure_9 = { code: "function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}" };
const tmp3 = () => {
  function withPanGestureTiming(value, timingStandard) {
    let tmp = timingStandard;
    if (null == timingStandard) {
      tmp = closure_3;
    }
    return callback(closure_1[2]).withTiming(value, tmp);
  }
  const obj = { TIMING_CONFIG: obj, withTiming: require(dependencyMap[2]).withTiming };
  withPanGestureTiming.__closure = obj;
  withPanGestureTiming.__workletHash = 7636074551896;
  withPanGestureTiming.__initData = closure_9;
  return withPanGestureTiming;
}();
let closure_11 = { code: "function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}" };
let closure_12 = { code: "function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}" };
let closure_13 = { code: "function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}" };
let closure_14 = { code: "function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}" };
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/action_sheet/native/PanGestureAnimations.tsx");

export default function usePanGesture(lowerBounds) {
  lowerBounds = lowerBounds.lowerBounds;
  const require = lowerBounds;
  const upperBounds = lowerBounds.upperBounds;
  const dependencyMap = upperBounds;
  const snapPositions = lowerBounds.snapPositions;
  let obj = snapPositions;
  let num = lowerBounds.swipeVelocityThreshold;
  if (num === undefined) {
    num = 300;
  }
  obj = num;
  const translate = lowerBounds.translate;
  let closure_4 = translate;
  const onStart = lowerBounds.onStart;
  let closure_5 = onStart;
  const onChange = lowerBounds.onChange;
  let closure_6 = onChange;
  const onEnd = lowerBounds.onEnd;
  let closure_7 = onEnd;
  let flag = lowerBounds.vertical;
  if (flag === undefined) {
    flag = true;
  }
  const isGestureInProgress = lowerBounds.isGestureInProgress;
  let closure_9 = isGestureInProgress;
  let tmp3;
  let closure_11;
  obj = require(dependencyMap[3]);
  const sharedValue = obj.useSharedValue(0);
  tmp3 = sharedValue;
  const sharedValue1 = require(dependencyMap[3]).useSharedValue(0);
  closure_11 = sharedValue1;
  const Gesture = require(dependencyMap[4]).Gesture;
  const obj2 = require(dependencyMap[3]);
  const tmp2 = flag;
  class N {
    constructor(arg0) {
      result = closure_10.set(translate.get());
      result1 = useSharedValue.set(0);
      if (null != isGestureInProgress) {
        tmp3 = isGestureInProgress;
        flag = true;
        result2 = isGestureInProgress.set(true);
      }
      if (null != onStart) {
        tmp5 = onStart;
        obj = {};
        tmp6 = closure_10;
        obj.destination = closure_10.get();
        tmp7 = closure_10;
        obj.startPosition = closure_10.get();
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
      value = closure_10.get();
      if (closure_8) {
        translationX = translationY;
      }
      sum = value + translationX;
      if (null != lowerBounds) {
        tmp3 = lowerBounds;
        if (sum < lowerBounds) {
          sum = lowerBounds;
        }
        tmp7 = closure_8;
        tmp6 = useSharedValue;
        if (closure_8) {
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
          tmp14 = closure_10;
          obj.startPosition = closure_10.get();
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
      result = closure_10.set(translate.get());
      if (null != snapPositions) {
        tmp21 = globalThis;
        _Math = Math;
        tmp22 = useSharedValue;
        tmp23 = closure_3;
        num2 = 0;
        num = 0;
        if (Math.abs(useSharedValue.get()) > closure_3) {
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
          tmp12 = closure_8;
          tmp13 = useSharedValue;
          result1 = translate.set(closure_8(tmp7, useSharedValue.get()));
        } else {
          tmp8 = translate;
          tmp9 = closure_10;
          result2 = translate.set(closure_10(tmp7));
        }
        tmp15 = onEnd;
        if (null != onEnd) {
          tmp16 = onEnd;
          obj = {};
          tmp17 = arg1;
          obj.success = arg1;
          obj.destination = tmp7;
          tmp18 = closure_10;
          obj.startPosition = closure_10.get();
          tmp19 = lowerBounds;
          tmp20 = onEnd(lowerBounds, obj);
        }
      }
      return;
    }
  }
  obj = { start: sharedValue, translate, snapPositions, velocity: sharedValue1, swipeVelocityThreshold: num, getNearestValue: closure_6, withPanGestureSpring: tmp2, withPanGestureTiming: tmp3, onEnd };
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
  S.__initData = closure_11;
  return Gesture.Pan().onStart(N).onChange(C).onEnd(T).onFinalize(S);
};
export const SPRING_CONFIG = obj;
export const TIMING_CONFIG = obj;
export const withPanGestureSpring = tmp2;
export const withPanGestureTiming = tmp3;

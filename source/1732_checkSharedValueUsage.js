// Module ID: 1732
// Function ID: 19404
// Name: checkSharedValueUsage
// Dependencies: [65, 31, 27, 1585, 1733, 1728, 1682, 1593, 1734, 1654, 1626, 1680]
// Exports: useAnimatedStyle

// Module 1732 (checkSharedValueUsage)
import _toConsumableArray from "_toConsumableArray";
import result from "result";
import { Platform } from "get ActivityIndicator";
import isJest from "isJest";

let closure_6;
let closure_7;
const require = arg1;
function checkSharedValueUsage(item10033, item10023) {
  if (Array.isArray(item10033)) {
    for (const item10033 of tmp) {
      let tmp13 = checkSharedValueUsage;
      let tmp14 = arg1;
      let tmp15 = checkSharedValueUsage(item10033, arg1);
      continue;
    }
  } else {
    if ("object" === typeof iter) {
      if (null !== iter) {
        if (undefined === iter.value) {
          const _Object = Object;
          const keys = Object.keys(iter);
          for (const item10023 of keys) {
            let tmp9 = checkSharedValueUsage;
            let tmp10 = arg0;
            let tmp11 = checkSharedValueUsage(iter[item10023], item10023);
            continue;
          }
        }
      }
    }
    if (undefined !== item10023) {
      if ("object" === typeof iter) {
        if (null !== iter) {
          if (undefined !== iter.value) {
            const ReanimatedError = require(1593) /* processStack */.ReanimatedError;
            const _HermesInternal = HermesInternal;
            const prototype = ReanimatedError.prototype;
            const reanimatedError = new ReanimatedError("Invalid value passed to `" + item10023 + "`, maybe you forgot to use `.value`?");
            throw reanimatedError;
          }
        }
      }
    }
  }
}
function animatedStyleHandleToJSON() {
  return "{}";
}
({ useEffect: closure_6, useRef: closure_7 } = result);
isJest = isJest.shouldBeUseWeb();
function prepareAnimation(arg0, arr) {
  let current = arg2;
  let iter = arg3;
  let closure_0 = arg0;
  let closure_1 = arr;
  let closure_2 = arg2;
  let closure_3 = arg3;
  if (Array.isArray(arr)) {
    const item = arr.forEach((arg0, arg1) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[arg1];
      }
      let tmp5 = dependencyMap2;
      if (dependencyMap2) {
        tmp5 = dependencyMap2[arg1];
      }
      dependencyMap2(closure_0, arg0, tmp3, tmp5);
    });
  }
  if ("object" === typeof arr) {
    if (arr.onFrame) {
      let closure_4 = arr;
      current = arr.current;
      if (null == iter) {
        arr.callStart = (arg0) => {
          arr2.onStart(arr2, current, arg0, closure_2);
        };
        arr.callStart(arg0);
        arr.callStart = null;
      } else if ("object" !== typeof iter) {
        current = iter;
      }
      if (undefined !== iter.value) {
        iter = iter.value;
        current = iter;
      } else if (undefined !== iter.onFrame) {
        current = undefined;
        if (null != current) {
          current = current.current;
        }
        if (undefined !== current) {
          current = current.current;
        } else {
          let current1;
          if (null != iter) {
            current1 = iter.current;
          }
          if (undefined !== current1) {
            current = iter.current;
          }
        }
      }
    }
  }
  if ("object" === typeof arr) {
    const _Object = Object;
    const keys = Object.keys(arr);
    const item1 = keys.forEach((arg0) => {
      let tmp3 = dependencyMap;
      if (dependencyMap) {
        tmp3 = dependencyMap[arg0];
      }
      let tmp5 = dependencyMap2;
      if (dependencyMap2) {
        tmp5 = dependencyMap2[arg0];
      }
      dependencyMap2(closure_0, arr[arg0], tmp3, tmp5);
    });
  }
}
prepareAnimation.__closure = {};
prepareAnimation.__workletHash = 14540565048240;
prepareAnimation.__initData = { code: "function prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}}" };
function runAnimations(arr, timestamp, arg2, arg3, value) {
  let closure_0 = arr;
  let closure_1 = timestamp;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let closure_4 = value;
  let _toConsumableArray = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      arg3[arg2] = [];
      let c6 = true;
      _toConsumableArray = "boxShadow" === arg2;
      const item = arr.forEach((arg0, arg1) => {
        if (!value(arg0, closure_1, arg1, dependencyMap[closure_2], value, _toConsumableArray)) {
          let c6 = false;
        }
      });
      return c6;
    } else {
      if ("object" === typeof arr) {
        if (arr.onFrame) {
          let flag5 = true;
          if (!arr.finished) {
            if (arr.callStart) {
              arr.callStart(timestamp);
              arr.callStart = null;
            }
            const onFrameResult = arr.onFrame(arr, timestamp);
            arr.timestamp = timestamp;
            flag5 = onFrameResult;
            if (onFrameResult) {
              arr.finished = true;
              flag5 = onFrameResult;
              if (arr.callback) {
                arr.callback(true);
                flag5 = onFrameResult;
              }
            }
          }
          if (arg5) {
            const _Object2 = Object;
            let current = Object.assign({}, arr.current);
          } else {
            current = arr.current;
          }
          arg3[arg2] = current;
          return flag5;
        }
      }
      if ("object" === typeof arr) {
        arg3[arg2] = {};
        let c7 = true;
        const _Object = Object;
        const keys = Object.keys(arr);
        const item1 = keys.forEach((arg0) => {
          if (!value(arr[arg0], closure_1, arg0, dependencyMap[closure_2], value, _toConsumableArray)) {
            let c7 = false;
          }
        });
        return c7;
      } else {
        arg3[arg2] = arr;
        return true;
      }
    }
  } else {
    return true;
  }
}
runAnimations.__closure = {};
runAnimations.__workletHash = 2714844766543;
runAnimations.__initData = { code: "function runAnimations_Pnpm_useAnimatedStyleTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){animation.finished=true;animation.callback&&animation.callback(true);}}if(forceCopyAnimation){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}}" };
let closure_11 = { code: "function styleUpdater_Pnpm_useAnimatedStyleTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){const{SHOULD_BE_USE_WEB,processBoxShadow,isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;if(!SHOULD_BE_USE_WEB&&newValues.boxShadow){processBoxShadow(newValues);}for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;}" };
let closure_12 = (() => {
  function styleUpdater(arg0, arg1, animations) {
    let tmp10;
    let closure_0 = arg0;
    let closure_1 = animations;
    let closure_2 = arg3;
    if (arguments.length > 5) {
      let tmp5 = arguments[5];
    }
    animations = animations.animations;
    if (null == animations) {
      animations = {};
    }
    let obj = arg1();
    if (null == obj) {
      obj = {};
    }
    let last = animations.last;
    obj = {};
    if (tmp6) {
      outer1_1(outer1_2[4]).processBoxShadow(obj);
      const obj4 = outer1_1(outer1_2[4]);
    }
    let flag = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag3 = flag;
      flag4 = flag2;
      while (keys[tmp2] !== undefined) {
        let tmp31 = tmp14;
        let tmp32 = obj[tmp14];
        let tmp33 = outer1_1;
        let tmp34 = outer1_2;
        let obj8 = outer1_1(outer1_2[5]);
        if (obj8.isAnimated(tmp32)) {
          let tmp15 = outer1_0;
          let __frameTimestamp = outer1_0.__frameTimestamp;
          if (!__frameTimestamp) {
            let tmp16 = outer1_0;
            __frameTimestamp = outer1_0._getAnimationTimestamp();
          }
          let tmp17 = outer1_9;
          let tmp18 = __frameTimestamp;
          let tmp19 = tmp32;
          let tmp20 = outer1_9(__frameTimestamp, tmp32, animations[tmp14], last[tmp14]);
          animations[tmp14] = tmp32;
          tmp10 = __frameTimestamp;
          flag = true;
          continue;
        } else {
          obj[tmp14] = tmp32;
          delete tmp[tmp3];
          flag2 = true;
          continue;
        }
        continue;
      }
      const tmp11 = tmp10;
    }
    if (flag3) {
      function frame(arg0) {
        let closure_0 = arg0;
        animations = animations.animations;
        const last = animations.last;
        if (animations.isAnimationCancelled) {
          animations.isAnimationRunning = false;
        } else {
          const obj = {};
          let c4 = true;
          for (const key10011 in animations) {
            let tmp13 = key10011;
            let tmpResult = tmp(key10011);
            continue;
          }
          outer2_1(outer2_2[6]).updateProps(closure_0, obj);
          if (c4) {
            animations.isAnimationRunning = false;
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(obj);
          }
          const obj2 = outer2_1(outer2_2[6]);
        }
      }
      animations.animations = animations;
      if (!animations.isAnimationRunning) {
        animations.isAnimationCancelled = false;
        animations.isAnimationRunning = true;
        frame(tmp11);
      }
      if (flag4) {
        outer1_1(outer1_2[6]).updateProps(arg0, obj);
        const obj7 = outer1_1(outer1_2[6]);
      }
    } else {
      animations.isAnimationCancelled = true;
      animations.animations = [];
      const obj5 = outer1_1(outer1_2[5]);
      if (!tmp23) {
        outer1_1(outer1_2[6]).updateProps(arg0, obj, tmp4);
        const obj6 = outer1_1(outer1_2[6]);
      }
      tmp23 = outer1_1(outer1_2[5]).shallowEqual(last, obj) && !tmp5;
    }
    animations.last = obj;
  }
  styleUpdater.__closure = { SHOULD_BE_USE_WEB: isJest, processBoxShadow: require(1733) /* pnpm_processBoxShadowTs1 */.processBoxShadow, isAnimated: require(1728) /* buildWorkletsHash */.isAnimated, prepareAnimation, runAnimations, updateProps: require(1682) /* updateProps */.updateProps, shallowEqual: require(1728) /* buildWorkletsHash */.shallowEqual };
  styleUpdater.__workletHash = 3108907120254;
  styleUpdater.__initData = closure_11;
  return styleUpdater;
})();
let closure_13 = { code: "function jestStyleUpdater_Pnpm_useAnimatedStyleTs4(viewDescriptors,updater,state,animationsActive,animatedValues,adapters,forceUpdate){const{isAnimated,prepareAnimation,runAnimations,updatePropsJestWrapper,shallowEqual}=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;let hasAnimations=false;let frameTimestamp;Object.keys(animations).forEach(function(key){const value=newValues[key];if(!isAnimated(value)){delete animations[key];}});Object.keys(newValues).forEach(function(key){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}});function frame(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;Object.keys(animations).forEach(function(propName){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){last[propName]=updates[propName];delete animations[propName];}else{allFinished=false;}});if(Object.keys(updates).length){updatePropsJestWrapper(viewDescriptors,updates,animatedValues,adapters);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}}if(hasAnimations){state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}}else{state.isAnimationCancelled=true;state.animations=[];}state.last=newValues;if(!shallowEqual(oldValues,newValues)||forceUpdate){updatePropsJestWrapper(viewDescriptors,newValues,animatedValues,adapters);}}" };
let closure_14 = (() => {
  function jestStyleUpdater(closure_0, arg1, animations, arg3, current, c4) {
    let closure_1 = animations;
    let closure_2 = arg3;
    let closure_3 = current;
    let closure_4 = c4;
    animations = animations.animations;
    if (null == animations) {
      animations = {};
    }
    let obj = arg1();
    if (null == obj) {
      obj = {};
    }
    let last = animations.last;
    let c9 = false;
    let keys = Object.keys(animations);
    let item = keys.forEach((arg0) => {
      const obj = outer2_1(outer2_2[5]);
      if (!obj.isAnimated(obj[arg0])) {
        delete tmp[tmp2];
      }
    });
    const keys1 = Object.keys(obj);
    const item1 = keys1.forEach((arg0) => {
      const obj = outer2_1(outer2_2[5]);
      if (obj.isAnimated(obj[arg0])) {
        let __frameTimestamp = outer2_0.__frameTimestamp;
        if (!__frameTimestamp) {
          __frameTimestamp = outer2_0._getAnimationTimestamp();
        }
        outer2_9(__frameTimestamp, tmp, animations[arg0], last[arg0]);
        animations[arg0] = tmp;
        let c9 = true;
      }
    });
    if (c9) {
      animations.animations = animations;
      if (!animations.isAnimationRunning) {
        animations.isAnimationCancelled = false;
        animations.isAnimationRunning = true;
        function frame(_toConsumableArray) {
          let closure_0 = _toConsumableArray;
          animations = animations.animations;
          const last = animations.last;
          if (animations.isAnimationCancelled) {
            animations.isAnimationRunning = false;
          } else {
            const obj = {};
            let c4 = true;
            const _Object = Object;
            const keys = Object.keys(animations);
            const item = keys.forEach((arg0) => {
              if (outer3_10(animations[arg0], closure_0, arg0, obj, last)) {
                last[arg0] = obj[arg0];
                delete tmp[tmp2];
              } else {
                let c4 = false;
              }
            });
            const _Object2 = Object;
            if (Object.keys(obj).length) {
              const obj2 = outer2_1(outer2_2[6]);
              const result = obj2.updatePropsJestWrapper(closure_0, obj, obj, c4);
            }
            if (c4) {
              animations.isAnimationRunning = false;
            } else {
              const _requestAnimationFrame = requestAnimationFrame;
              const animationFrame = requestAnimationFrame(frame);
            }
          }
        }
        frame(_toConsumableArray);
      }
    } else {
      animations.isAnimationCancelled = true;
      animations.animations = [];
    }
    animations.last = obj;
    let shallowEqualResult = outer1_1(outer1_2[5]).shallowEqual(last, obj);
    if (shallowEqualResult) {
      shallowEqualResult = !arg6;
    }
    if (!shallowEqualResult) {
      const obj4 = outer1_1(outer1_2[6]);
      let result = obj4.updatePropsJestWrapper(closure_0, obj, current, c4);
    }
  }
  jestStyleUpdater.__closure = { isAnimated: require(1728) /* buildWorkletsHash */.isAnimated, prepareAnimation, runAnimations, updatePropsJestWrapper: require(1682) /* updateProps */.updatePropsJestWrapper, shallowEqual: require(1728) /* buildWorkletsHash */.shallowEqual };
  jestStyleUpdater.__workletHash = 12729247822121;
  jestStyleUpdater.__initData = closure_13;
  return jestStyleUpdater;
})();
let closure_15 = { code: "function pnpm_useAnimatedStyleTs5(){const{updater,adaptersArray}=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;}" };
let closure_16 = { code: "function pnpm_useAnimatedStyleTs6(forceUpdate){const{jestStyleUpdater,shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray}=this.__closure;jestStyleUpdater(shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray,forceUpdate);}" };
let closure_17 = { code: "function pnpm_useAnimatedStyleTs7(forceUpdate){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);}" };
let closure_18 = { code: "function pnpm_useAnimatedStyleTs8(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);remoteState.isFirstRun=false;}" };
let closure_19 = { code: "function pnpm_useAnimatedStyleTs9(){const{remoteState}=this.__closure;return remoteState.isFirstRun=true;}" };

export const useAnimatedStyle = function useAnimatedStyle(fn, items, arg2, arg3) {
  let initial;
  let isJest;
  let viewDescriptors;
  let closure_0 = fn;
  const _require = arg2;
  const dependencyMap = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
  let tmp = callback(null);
  const prepareAnimation = tmp;
  let __closure = fn.__closure;
  if (null == __closure) {
    __closure = {};
  }
  let values = Object.values(__closure);
  let closure_4 = values;
  let length = isJest;
  if (isJest) {
    length = !values.length;
  }
  if (length) {
    length = null != items;
    let arr1 = items;
  }
  if (length) {
    length = arr1.length;
  }
  if (length) {
    closure_4 = items;
    values = items;
  }
  if (arg2) {
    const _Array = Array;
    let tmp2 = arg2;
    if (!Array.isArray(arg2)) {
      items = [arg2];
      tmp2 = items;
    }
    let items1 = tmp2;
  } else {
    items1 = [];
  }
  let workletsHash = null;
  if (arg2) {
    let obj1 = _require(1728);
    workletsHash = obj1.buildWorkletsHash(items1);
  }
  let obj2 = _require(1734);
  const sharedValue = obj2.useSharedValue(true);
  const tmp7 = callback({});
  callback = tmp7;
  if (items) {
    items.push(fn.__workletHash);
    let combined = items;
  } else {
    const items2 = [];
    const items3 = [fn.__workletHash];
    combined = items2.concat(items1(values), items3);
  }
  if (workletsHash) {
    combined.push(workletsHash);
  }
  if (!tmp.current) {
    let obj3 = _require(1654);
    const initialUpdaterRunResult = obj3.initialUpdaterRun(fn);
    let obj = {};
    obj = { value: initialUpdaterRunResult, updater: fn };
    obj.initial = obj;
    obj1 = { last: initialUpdaterRunResult, animations: {}, isAnimationCancelled: false, isAnimationRunning: false, isFirstRun: true };
    obj.remoteState = _require(1626).makeShareable(obj1);
    const obj7 = _require(1626);
    obj.viewDescriptors = _require(1680).makeViewDescriptorsSet();
    obj2 = { current: undefined };
    obj.styleUpdaterContainer = obj2;
    tmp.current = obj;
    const obj9 = _require(1680);
  }
  ({ initial, remoteState: isJest, viewDescriptors } = tmp.current);
  const shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  arr1 = combined.push(shareableViewDescriptors);
  sharedValue(() => {
    let tmp = pnpm_useAnimatedStyleTs5;
    if (callback) {
      pnpm_useAnimatedStyleTs5 = /* worklet (recovered source) */ function pnpm_useAnimatedStyleTs5(){const{updater,adaptersArray}=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;};
      let obj = { updater: pnpm_useAnimatedStyleTs5, adaptersArray: items1 };
      pnpm_useAnimatedStyleTs5.__closure = obj;
      pnpm_useAnimatedStyleTs5.__workletHash = 2827602676287;
      pnpm_useAnimatedStyleTs5.__initData = outer1_15;
      tmp = pnpm_useAnimatedStyleTs5;
    }
    if (obj2.isJest()) {
      /* worklet (recovered source) */ function pnpm_useAnimatedStyleTs6(forceUpdate){const{jestStyleUpdater,shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray}=this.__closure;jestStyleUpdater(shareableViewDescriptors,updater,remoteState,areAnimationsActive,jestAnimatedValues,adaptersArray,forceUpdate);}
      obj = { jestStyleUpdater: outer1_14, shareableViewDescriptors, updater: pnpm_useAnimatedStyleTs5, remoteState: isFirstRun, areAnimationsActive: sharedValue, jestAnimatedValues: closure_7, adaptersArray: items1 };
      pnpm_useAnimatedStyleTs6.__closure = obj;
      pnpm_useAnimatedStyleTs6.__workletHash = 11745429083106;
      pnpm_useAnimatedStyleTs6.__initData = outer1_16;
      let tmp13 = pnpm_useAnimatedStyleTs6;
    } else {
      /* worklet (recovered source) */ function pnpm_useAnimatedStyleTs7(forceUpdate){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);}
      obj = { styleUpdater: outer1_12, shareableViewDescriptors, updaterFn: tmp, remoteState: isFirstRun, areAnimationsActive: sharedValue, isAnimatedProps: dependencyMap };
      pnpm_useAnimatedStyleTs7.__closure = obj;
      pnpm_useAnimatedStyleTs7.__workletHash = 6831194621571;
      pnpm_useAnimatedStyleTs7.__initData = outer1_17;
      const _globalThis = globalThis;
      isFirstRun = !globalThis._IS_FABRIC;
      if (isFirstRun) {
        isFirstRun = isFirstRun.isFirstRun;
      }
      tmp13 = pnpm_useAnimatedStyleTs7;
      if (isFirstRun) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => {
          let obj = callback(1626);
          /* worklet (recovered source) */ function pnpm_useAnimatedStyleTs8(){const{styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps}=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps);remoteState.isFirstRun=false;}
          obj = { styleUpdater: outer2_12, shareableViewDescriptors: outer1_9, updaterFn: pnpm_useAnimatedStyleTs5, remoteState: outer1_8, areAnimationsActive: outer1_6, isAnimatedProps: outer1_2 };
          pnpm_useAnimatedStyleTs8.__closure = obj;
          pnpm_useAnimatedStyleTs8.__workletHash = 11622360674991;
          pnpm_useAnimatedStyleTs8.__initData = outer2_18;
          obj.runOnUI(pnpm_useAnimatedStyleTs8)();
        });
        tmp13 = pnpm_useAnimatedStyleTs7;
      }
    }
    if (tmp.current) {
      tmp.current.styleUpdaterContainer.current = tmp13;
    }
    obj2 = callback(1585);
    callback = callback(1626).startMapper(tmp13, closure_4);
    return () => {
      let obj = callback(1626);
      obj.stopMapper(callback);
      if (!globalThis._IS_FABRIC) {
        /* worklet (recovered source) */ function pnpm_useAnimatedStyleTs9(){const{remoteState}=this.__closure;return remoteState.isFirstRun=true;}
        obj = { remoteState: outer1_8 };
        pnpm_useAnimatedStyleTs9.__closure = obj;
        pnpm_useAnimatedStyleTs9.__workletHash = 6168210089002;
        pnpm_useAnimatedStyleTs9.__initData = outer2_19;
        callback(1626).runOnUI(pnpm_useAnimatedStyleTs9)();
        const obj2 = callback(1626);
      }
    };
  }, combined);
  const items4 = [sharedValue];
  sharedValue(() => {
    sharedValue.value = true;
    return () => {
      outer1_6.value = false;
    };
  }, items4);
  checkSharedValueUsage(initial.value);
  const tmp18 = callback(null);
  if (tmp18.current) {
    return tmp18.current;
  } else {
    const styleUpdaterContainer = tmp.current.styleUpdaterContainer;
    if (obj11.isJest()) {
      obj3 = { viewDescriptors, initial, jestAnimatedValues: tmp7, toJSON: animatedStyleHandleToJSON, styleUpdaterContainer };
      let obj4 = obj3;
    } else {
      obj4 = { viewDescriptors, initial, styleUpdaterContainer };
    }
    tmp18.current = obj4;
    obj11 = _require(1585);
  }
};

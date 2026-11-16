// Module ID: 1892
// Function ID: 1893
// Name: styleUpdater
// Dependencies: [1893, 1838]
// Exports: buildWorkletsHash, createAnimatedStyleHandle, styleUpdater

// Module 1892 (styleUpdater)
import _mod1838 from "module_1838" /* 1838 */;
import _mod1893 from "module_1893" /* 1893 */;

let _undefined, _undefined2;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,animatedProp,lastAnimation,lastValue){const prepareAnimation_Pnpm_useAnimatedStyleCommonTs1=this._recur;if(Array.isArray(animatedProp)){animatedProp.forEach(function(prop,index){prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,prop,lastAnimation&&lastAnimation[index],lastValue&&lastValue[index]);});}if(typeof animatedProp==='object'&&animatedProp.onFrame){const animation=animatedProp;let value=animation.current;if(lastValue!==undefined&&lastValue!==null){if(typeof lastValue==='object'){if(lastValue.value!==undefined){value=lastValue.value;}else if(lastValue.onFrame!==undefined){if((lastAnimation===null||lastAnimation===void 0?void 0:lastAnimation.current)!==undefined){value=lastAnimation.current;}else if((lastValue===null||lastValue===void 0?void 0:lastValue.current)!==undefined){value=lastValue.current;}}}else{value=lastValue;}}animation.callStart=function(timestamp){animation.onStart(animation,value,timestamp,lastAnimation);};animation.callStart(frameTimestamp);animation.callStart=null;}else if(typeof animatedProp==='object'){Object.keys(animatedProp).forEach(function(key){return prepareAnimation_Pnpm_useAnimatedStyleCommonTs1(frameTimestamp,animatedProp[key],lastAnimation&&lastAnimation[key],lastValue&&lastValue[key]);});}})" }];
[tmp2] = items;
function prepareAnimation(arg0, onFrame, current, value) {
  let closure_0 = arg0;
  if (Array.isArray(onFrame)) {
    const item = onFrame.forEach((item, index) => {
      let tmp3 = current;
      const tmp = prepareAnimation;
      const tmp2 = closure_0;
      if (current) {
        tmp3 = current[index];
      }
      const tmp4 = value && value[index];
      tmp(tmp2, item, tmp3, tmp4);
    });
  }
  if (typeof onFrame === "object") {
    if (onFrame.onFrame) {
      const onFrame2 = onFrame;
      let current2 = onFrame.current;
      let tmp2 = null;
      if (null != value) {
        if (typeof value === "object") {
          if (undefined !== value.value) {
            current2 = value.value;
          } else if (undefined !== value.onFrame) {
            current = undefined;
            if (current != null) {
              current = current.current;
            }
            if (undefined !== current) {
              current2 = current.current;
            } else {
              let current1;
              if (value != null) {
                current1 = value.current;
              }
              if (undefined !== current1) {
                current2 = value.current;
              }
            }
          }
        } else {
          current2 = value;
        }
      }
      onFrame.callStart = (arg0) => {
        onFrame2.onStart(onFrame2, closure_5, arg0, current);
      };
      onFrame.callStart(arg0);
      onFrame.callStart = null;
    }
  }
  if (typeof onFrame === "object") {
    const _Object = Object;
    const keys = Object.keys(onFrame);
    const item1 = keys.forEach((item) => {
      let tmp4 = current;
      const tmp = prepareAnimation;
      const tmp2 = closure_0;
      const tmp3 = onFrame[item];
      if (current) {
        tmp4 = current[item];
      }
      const tmp5 = value && value[item];
      tmp(tmp2, tmp3, tmp4, tmp5);
    });
  }
}
prepareAnimation.__workletHash = 15689660036081;
prepareAnimation.__initData = tmp2;
const items1 = [{ code: "(function runAnimations_Pnpm_useAnimatedStyleCommonTs2(animation,timestamp,key,result,animationsActive,forceCopyAnimation){const runAnimations_Pnpm_useAnimatedStyleCommonTs2=this._recur;if(!animationsActive.value){return true;}if(Array.isArray(animation)){result[key]=[];let allFinished=true;forceCopyAnimation=key==='boxShadow';animation.forEach(function(entry,index){if(!runAnimations_Pnpm_useAnimatedStyleCommonTs2(entry,timestamp,index,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else if(typeof animation==='object'&&animation.onFrame){let finished=true;if(!animation.finished){if(animation.callStart){animation.callStart(timestamp);animation.callStart=null;}finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;if(finished){var _animation$callback;animation.finished=true;(_animation$callback=animation.callback)===null||_animation$callback===void 0||_animation$callback.call(animation,true);}}if(forceCopyAnimation&&typeof animation.current==='object'){result[key]={...animation.current};}else{result[key]=animation.current;}return finished;}else if(typeof animation==='object'){result[key]={};let allFinished=true;Object.keys(animation).forEach(function(k){if(!runAnimations_Pnpm_useAnimatedStyleCommonTs2(animation[k],timestamp,k,result[key],animationsActive,forceCopyAnimation)){allFinished=false;}});return allFinished;}else{result[key]=animation;return true;}})" }];
[tmp3] = items1;
function runAnimations(onFrame, timestamp, item, arg3, value, arg5) {
  let closure_1 = timestamp;
  let closure_2 = item;
  let closure_3 = arg3;
  let closure_4 = value;
  let closure_5 = arg5;
  if (value.value) {
    const _Array = Array;
    if (Array.isArray(onFrame)) {
      arg3[item] = [];
      let c6 = true;
      closure_5 = "boxShadow" === item;
      item = onFrame.forEach((item, index) => {
        if (!runAnimations(item, timestamp, index, closure_3[item], closure_4, closure_5)) {
          c6 = false;
        }
      });
      return c6;
    } else {
      if (typeof onFrame === "object") {
        if (onFrame.onFrame) {
          let flag4 = true;
          if (!onFrame.finished) {
            if (onFrame.callStart) {
              onFrame.callStart(timestamp);
              onFrame.callStart = null;
            }
            const onFrameResult = onFrame.onFrame(onFrame, timestamp);
            onFrame.timestamp = timestamp;
            flag4 = onFrameResult;
            if (flag4) {
              onFrame.finished = true;
              const callback = onFrame.callback;
              flag4 = onFrameResult;
              if (callback != null) {
                callback(true);
                flag4 = onFrameResult;
              }
            }
          }
          if (arg5) {
            if (typeof onFrame.current === "object") {
              const obj = {};
              const merged = Object.assign(onFrame.current);
              arg3[item] = obj;
            }
            return flag4;
          }
          arg3[item] = onFrame.current;
        }
      }
      if (typeof onFrame === "object") {
        arg3[item] = {};
        let c7 = true;
        const _Object = Object;
        const keys = Object.keys(onFrame);
        const item1 = keys.forEach((item) => {
          if (!runAnimations(onFrame[item], timestamp, item, closure_3[item], closure_4, closure_5)) {
            c7 = false;
          }
        });
        return c7;
      } else {
        arg3[item] = onFrame;
        return true;
      }
    }
  } else {
    return true;
  }
}
runAnimations.__workletHash = 302621435996;
runAnimations.__initData = tmp3;
const items2 = [{ code: "(function styleUpdater_Pnpm_useAnimatedStyleCommonTs3(viewDescriptors,updater,state,animationsActive,isAnimatedProps=false,forceUpdate){let[isAnimated,prepareAnimation,runAnimations,updateProps,shallowEqual]=this.__closure;var _state$animations,_updater;const animations=(_state$animations=state.animations)!==null&&_state$animations!==void 0?_state$animations:{};const newValues=(_updater=updater())!==null&&_updater!==void 0?_updater:{};const oldValues=state.last;const nonAnimatedNewValues={};let hasAnimations=false;let frameTimestamp;let hasNonAnimatedValues=false;for(const key in newValues){const value=newValues[key];if(isAnimated(value)){frameTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();prepareAnimation(frameTimestamp,value,animations[key],oldValues[key]);animations[key]=value;hasAnimations=true;}else{hasNonAnimatedValues=true;nonAnimatedNewValues[key]=value;delete animations[key];}}if(hasAnimations){const frame=function(timestamp){const{animations:animations,last:last,isAnimationCancelled:isAnimationCancelled}=state;if(isAnimationCancelled){state.isAnimationRunning=false;return;}const updates={};let allFinished=true;for(const propName in animations){const finished=runAnimations(animations[propName],timestamp,propName,updates,animationsActive);if(finished){if(Array.isArray(updates[propName])){updates[propName].forEach(function(obj){for(const prop in obj){if(!last[propName]||typeof last[propName]!=='object'){last[propName]={};}last[propName][prop]=obj[prop];}});}else{last[propName]=updates[propName];}delete animations[propName];}else{allFinished=false;}}if(updates){updateProps(viewDescriptors,updates,isAnimatedProps);}if(!allFinished){requestAnimationFrame(frame);}else{state.isAnimationRunning=false;}};state.animations=animations;if(!state.isAnimationRunning){state.isAnimationCancelled=false;state.isAnimationRunning=true;frame(frameTimestamp);}if(hasNonAnimatedValues){updateProps(viewDescriptors,nonAnimatedNewValues,isAnimatedProps);}}else{state.isAnimationCancelled=true;state.animations=[];if(!shallowEqual(oldValues,newValues)||forceUpdate){updateProps(viewDescriptors,newValues,isAnimatedProps);}}state.last=newValues;})" }, _mod1893.isAnimated, prepareAnimation, runAnimations, _mod1838.updateProps, _mod1893.shallowEqual];
let c0;
let c1;
let c2;
let c3;
let c4;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
function styleUpdater(arg0, fn, animations, arg3) {
  let tmp;
  let tmp2;
  let tmp3;
  _undefined = arg0;
  _undefined2 = animations;
  let closure_2 = arg3;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let frame;
  animations = animations.animations;
  if (animations == null) {
    animations = {};
  }
  let obj2 = fn();
  if (obj2 == null) {
    obj2 = {};
  }
  const last = animations.last;
  const obj3 = {};
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let keys = Object.keys();
  if (keys !== undefined) {
    const tmp7 = tmp2;
    flag4 = flag2;
    flag5 = flag3;
    tmp3 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp23 = obj2[tmp8];
      let tmp22 = tmp8;
      if (_undefined(tmp23)) {
        let obj4 = _undefined;
        let tmp9 = _undefined.__frameTimestamp || obj4._getAnimationTimestamp();
        let tmp13 = _undefined2(tmp9, tmp23, animations[tmp8], last[tmp8]);
        animations[tmp8] = tmp23;
        tmp2 = tmp9;
        flag3 = true;
        continue;
      } else {
        obj3[tmp8] = tmp23;
        delete obj[tmp22];
        flag2 = true;
        continue;
      }
      continue;
    }
  }
  if (flag5) {
    frame = function frame(animations) {
      let last;
      let tmp;
      let tmp2;
      ({ animations, last } = animations);
      if (animations.isAnimationCancelled) {
        tmp2.isAnimationRunning = false;
      } else {
        const obj = {};
        let tmp3 = animations;
        flag = true;
        let tmp4 = globalThis;
        let flag3 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag3 = flag;
          while (keys[tmp] !== undefined) {
            closure_0 = tmp7;
            let tmp16 = tmp7;
            let flag4 = false;
            if (c2(animations[tmp7], animations, tmp7, obj, closure_2)) {
              let _Array = Array;
              let arr = obj[tmp7];
              if (Array.isArray(obj[tmp7])) {
                let item = arr.forEach((item) => {
                  for (const key10003 in item) {
                    let tmp3 = closure_2_0;
                    let tmp4 = closure_0;
                    let tmp = closure_2_0[closure_0] && typeof tmp3[tmp4] === "object";
                    if (!tmp) {
                      tmp3[tmp4] = {};
                    }
                    tmp3[tmp4][key10003] = item[key10003];
                    continue;
                  }
                });
              } else {
                last[tmp7] = arr;
              }
              delete animations[tmp16];
              flag4 = flag;
            }
            flag = flag4;
            continue;
          }
        }
        c3(closure_0, obj, flag);
        if (flag3) {
          animations.isAnimationRunning = false;
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(frame);
        }
      }
    };
    animations.animations = animations;
    if (!animations.isAnimationRunning) {
      animations.isAnimationCancelled = false;
      animations.isAnimationRunning = true;
      frame(tmp3);
    }
    if (flag4) {
      let tmp20 = flag;
      let tmp21 = flag(arg0, obj3, flag);
    }
  } else {
    animations.isAnimationCancelled = true;
    animations.animations = [];
    let tmp15 = frame(last, obj2);
    if (tmp15) {
      let tmp16 = arg5;
      tmp15 = !arg5;
    }
    if (!tmp15) {
      let tmp17 = flag;
      let tmp18 = flag(arg0, obj2, flag);
    }
  }
  animations.last = obj2;
}
const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9];
styleUpdater.__closure = items3;
styleUpdater.__workletHash = 11128039097092;
styleUpdater.__initData = tmp4;
function checkSharedValueUsage(value, item10015) {
  if (Array.isArray(value)) {
    const tmp7 = value[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp12 = checkSharedValueUsage(tmp9, item10015);
      continue;
    }
  } else {
    if (typeof value === "object") {
      if (null !== value) {
        if (undefined === value.value) {
          const _Object = Object;
          const keys = Object.keys(value);
          for (const item10015 of keys) {
            let tmp5 = checkSharedValueUsage(value[item10015], item10015);
            continue;
          }
        }
      }
    }
    if (undefined !== item10015) {
      if (typeof value === "object") {
        if (null !== value) {
          if (undefined !== value.value) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("[Reanimated] Invalid value passed to `" + item10015 + "`, maybe you forgot to use `.value`?");
            throw error;
          }
        }
      }
    }
  }
}

export function createAnimatedStyleHandle(arg0, styleUpdaterContainer) {
  const obj = { enumerable: false, value: styleUpdaterContainer };
  Object.defineProperty(arg0, "styleUpdaterContainer", obj);
  return arg0;
}
export { prepareAnimation };
export { runAnimations };
export { styleUpdater };
export { checkSharedValueUsage };
export function buildWorkletsHash(items1) {
  const values = Object.values(items1);
  return values.reduce((acc, __workletHash) => {
    const str = __workletHash.__workletHash;
    return acc + str.toString();
  }, "");
}

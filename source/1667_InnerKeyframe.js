// Module ID: 1667
// Function ID: 18505
// Name: InnerKeyframe
// Dependencies: [77, 65, 6, 7, 1607, 1654, 1634, 1593, 1622]

// Module 1667 (InnerKeyframe)
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";
import linear from "linear";
import processStack from "processStack";

const require = arg1;
let closure_6 = { code: "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}" };
let closure_7 = { code: "function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
let closure_8 = { code: "function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
let closure_9 = { code: "function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+\"_transform:\"+transformProp;}" };
let closure_10 = (() => {
  function makeKeyframeKey(arg0, arg1) {
    return "" + arg0 + "_transform:" + arg1;
  }
  makeKeyframeKey.__closure = {};
  makeKeyframeKey.__workletHash = 11090453666227;
  makeKeyframeKey.__initData = closure_9;
  return makeKeyframeKey;
})();

export const Keyframe = (() => {
  class InnerKeyframe {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, self);
      this.reduceMotionV = InnerKeyframe(outer1_1[4]).ReduceMotion.System;
      this.build = () => {
        delayV = delayV.delayV;
        const delayFunction = delayV.getDelayFunction();
        const parseDefinitionsResult = delayV.parseDefinitions();
        const keyframes = parseDefinitionsResult.keyframes;
        const initialValues = parseDefinitionsResult.initialValues;
        const callbackV = delayV.callbackV;
        if (!delayV.parsedAnimation) {
          /* worklet (recovered source) */ function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}
          let obj = { keyframes, delayFunction, delay: delayV, withTiming: InnerKeyframe(outer2_1[5]).withTiming, Easing: InnerKeyframe(outer2_1[6]).Easing, withSequence: InnerKeyframe(outer2_1[5]).withSequence, initialValues, makeKeyframeKey: outer2_10, callback: callbackV };
          pnpm_KeyframeTs1.__closure = obj;
          pnpm_KeyframeTs1.__workletHash = 2209924843920;
          pnpm_KeyframeTs1.__initData = outer2_6;
          delayV.parsedAnimation = pnpm_KeyframeTs1;
        }
        return delayV.parsedAnimation;
      };
      this.definitions = arg0;
      return;
    }
  }
  let obj = {
    key: "parseDefinitions",
    value: function parseDefinitions() {
      let self = this;
      self = this;
      let obj = {};
      if (this.definitions.from) {
        if (self.definitions[0]) {
          const ReanimatedError3 = InnerKeyframe(outer1_1[7]).ReanimatedError;
          const prototype3 = ReanimatedError3.prototype;
          const reanimatedError3 = new ReanimatedError3("You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
          throw reanimatedError3;
        } else {
          self.definitions[0] = self.definitions.from;
          const definitions = self.definitions;
          delete tmp.from;
        }
      }
      if (self.definitions.to) {
        if (self.definitions[100]) {
          const ReanimatedError2 = InnerKeyframe(outer1_1[7]).ReanimatedError;
          const prototype2 = ReanimatedError2.prototype;
          const reanimatedError2 = new ReanimatedError2("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
          throw reanimatedError2;
        } else {
          self.definitions[100] = self.definitions.to;
          const definitions2 = self.definitions;
          delete tmp.to;
        }
      }
      if (self.definitions[0]) {
        const first = self.definitions[0];
        let _Object = Object;
        let keys = Object.keys(first);
        let item = keys.forEach((arg0) => {
          if ("transform" === arg0) {
            const _Array = Array;
            if (Array.isArray(first.transform)) {
              const transform = first.transform;
              let item = transform.forEach((arg0, arg1) => {
                let closure_0 = arg1;
                const keys = Object.keys(arg0);
                const item = keys.forEach((arg0) => {
                  outer2_1[outer4_10(closure_0, arg0)] = [];
                });
              });
            }
          } else {
            obj[arg0] = [];
          }
        });
        let num4 = 500;
        if (self.durationV) {
          num4 = self.durationV;
        }
        let _Array = Array;
        const _Object2 = Object;
        const _Number = Number;
        const mapped = Array.from(Object.keys(self.definitions)).map(Number);
        function getAnimationDuration(arg0, arg1) {
          const result = arg1 / 100 * num4;
          return result - obj[arg0].reduce((arg0, duration) => arg0 + duration.duration, 0);
        }
        const found = mapped.filter((arg0) => 0 !== arg0);
        const sorted = found.sort((arg0, arg1) => arg0 - arg1);
        const item1 = sorted.forEach((arg0) => {
          const _self = arg0;
          if (arg0 >= 0) {
            if (arg0 <= 100) {
              const easing = tmp3.easing;
              delete tmp.easing;
              function addKeyPointWith(key, value) {
                let obj = { key, value, currentKeyPoint: closure_0, easing };
                if (obj.key in tmp3) {
                  let arr = tmp3[key];
                  obj = { duration: outer1_4(key, tmp2), value: tmp, easing: tmp3 };
                  arr = arr.push(obj);
                } else {
                  const ReanimatedError = InnerKeyframe(outer3_1[7]).ReanimatedError;
                  const prototype = ReanimatedError.prototype;
                  const reanimatedError = new ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  throw reanimatedError;
                }
              }
              const _Object = Object;
              let keys = Object.keys(tmp3);
              let item = keys.forEach((key) => {
                if ("transform" === key) {
                  const _Array = Array;
                  if (Array.isArray(tmp3.transform)) {
                    const transform = tmp3.transform;
                    let item = transform.forEach((arg0, arg1) => {
                      let closure_0 = arg0;
                      let closure_1 = arg1;
                      const keys = Object.keys(arg0);
                      const item = keys.forEach(() => { ... });
                    });
                  }
                } else {
                  tmp3 = addKeyPointWith(key, tmp3[key]);
                }
              });
            }
          }
          let reanimatedError = new InnerKeyframe(outer2_1[7]).ReanimatedError("Keyframe should be in between range 0 - 100.");
          throw reanimatedError;
        });
        obj = { initialValues: first };
        obj.keyframes = obj;
        return obj;
      } else {
        let ReanimatedError = InnerKeyframe(outer1_1[7]).ReanimatedError;
        let prototype = ReanimatedError.prototype;
        let reanimatedError = new ReanimatedError("Please provide 0 or 'from' keyframe with initial state of your object.");
        throw reanimatedError;
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "duration",
    value: function duration(durationV) {
      this.durationV = durationV;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    }
  };
  items[4] = {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    }
  };
  items[5] = {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      const reduceMotionV = this.reduceMotionV;
      if (this.delayV) {
        /* worklet (recovered source) */ function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}
        let obj = { withDelay: InnerKeyframe(outer1_1[5]).withDelay, reduceMotion: reduceMotionV };
        pnpm_KeyframeTs2.__closure = obj;
        pnpm_KeyframeTs2.__workletHash = 6884672498893;
        pnpm_KeyframeTs2.__initData = outer1_7;
        let pnpm_KeyframeTs3 = pnpm_KeyframeTs2;
      } else {
        pnpm_KeyframeTs3 = /* worklet (recovered source) */ function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;};
        obj = { getReduceMotionFromConfig: InnerKeyframe(outer1_1[8]).getReduceMotionFromConfig, reduceMotion: reduceMotionV };
        pnpm_KeyframeTs3.__closure = obj;
        pnpm_KeyframeTs3.__workletHash = 14632587413843;
        pnpm_KeyframeTs3.__initData = outer1_8;
      }
      return pnpm_KeyframeTs3;
    }
  };
  return callback(InnerKeyframe, items);
})();

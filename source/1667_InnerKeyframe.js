// Module ID: 1667
// Function ID: 18498
// Name: InnerKeyframe
// Dependencies: []

// Module 1667 (InnerKeyframe)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = { code: "function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}" };
let closure_7 = { code: "function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
let closure_8 = { code: "function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };
let closure_9 = { code: "function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+\"_transform:\"+transformProp;}" };
let closure_10 = () => {
  function makeKeyframeKey(arg0, arg1) {
    return "" + arg0 + "_transform:" + arg1;
  }
  makeKeyframeKey.__closure = {};
  makeKeyframeKey.__workletHash = 11090453666227;
  makeKeyframeKey.__initData = closure_9;
  return makeKeyframeKey;
}();

export const Keyframe = () => {
  class InnerKeyframe {
    constructor(arg0) {
      InnerKeyframe = this;
      tmp = closure_4(this, InnerKeyframe);
      this.reduceMotionV = InnerKeyframe(closure_1[4]).ReduceMotion.System;
      this.build = () => {
        const delayV = self.delayV;
        const self = delayV;
        const delayFunction = self.getDelayFunction();
        const parseDefinitionsResult = self.parseDefinitions();
        const keyframes = parseDefinitionsResult.keyframes;
        const initialValues = parseDefinitionsResult.initialValues;
        const callbackV = self.callbackV;
        if (!self.parsedAnimation) {
          /* worklet (recovered source) */ function pnpm_KeyframeTs1(){const{keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback}=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};}
          const obj = { keyframes, delayFunction, delay: delayV, withTiming: self(delayFunction[5]).withTiming, Easing: self(delayFunction[6]).Easing, withSequence: self(delayFunction[5]).withSequence, initialValues, makeKeyframeKey: closure_10, callback: callbackV };
          pnpm_KeyframeTs1.__closure = obj;
          pnpm_KeyframeTs1.__workletHash = 2209924843920;
          pnpm_KeyframeTs1.__initData = closure_6;
          self.parsedAnimation = pnpm_KeyframeTs1;
        }
        return self.parsedAnimation;
      };
      this.definitions = arg0;
      return;
    }
  }
  const arg1 = InnerKeyframe;
  let obj = {
    key: "parseDefinitions",
    value: function parseDefinitions() {
      const self = this;
      const InnerKeyframe = this;
      let obj = {};
      if (this.definitions.from) {
        if (self.definitions[0]) {
          const ReanimatedError3 = InnerKeyframe(obj[7]).ReanimatedError;
          const prototype3 = ReanimatedError3.prototype;
          const reanimatedError3 = new ReanimatedError3("You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
          throw reanimatedError3;
        } else {
          self.definitions[0] = self.definitions.from;
          const definitions = self.definitions;
          delete r2.from;
        }
      }
      if (self.definitions.to) {
        if (self.definitions[100]) {
          const ReanimatedError2 = InnerKeyframe(obj[7]).ReanimatedError;
          const prototype2 = ReanimatedError2.prototype;
          const reanimatedError2 = new ReanimatedError2("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
          throw reanimatedError2;
        } else {
          self.definitions[100] = self.definitions.to;
          const definitions2 = self.definitions;
          delete r2.to;
        }
      }
      if (self.definitions[0]) {
        const first = self.definitions[0];
        const _Object = Object;
        const keys = Object.keys(first);
        const item = keys.forEach((arg0) => {
          if ("transform" === arg0) {
            const _Array = Array;
            if (Array.isArray(first.transform)) {
              const transform = first.transform;
              const item = transform.forEach((arg0, arg1) => {
                const keys = Object.keys(arg0);
                const item = keys.forEach((arg0) => {
                  closure_1[callback(arg1, arg0)] = [];
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
        const _Array = Array;
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
          const self = arg0;
          if (arg0 >= 0) {
            if (arg0 <= 100) {
              const first = tmp2.easing;
              delete r3.easing;
              function addKeyPointWith(key, value) {
                let obj = { key, value, currentKeyPoint: key, easing };
                if (obj.key in tmp2) {
                  let arr = tmp2[key];
                  obj = { duration: callback(key, tmp2), value: tmp, easing: tmp3 };
                  arr = arr.push(obj);
                } else {
                  const ReanimatedError = key(tmp2[7]).ReanimatedError;
                  const prototype = ReanimatedError.prototype;
                  const reanimatedError = new ReanimatedError("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  throw reanimatedError;
                }
              }
              const _Object = Object;
              const keys = Object.keys(tmp2);
              const item = keys.forEach((key) => {
                if ("transform" === key) {
                  const _Array = Array;
                  if (Array.isArray(tmp2.transform)) {
                    const transform = tmp2.transform;
                    const item = transform.forEach((arg0, arg1) => {
                      const keys = Object.keys(arg0);
                      const item = keys.forEach(() => { ... });
                    });
                  }
                } else {
                  addKeyPointWith(key, tmp2[key]);
                }
              });
            }
          }
          const reanimatedError = new self(obj[7]).ReanimatedError("Keyframe should be in between range 0 - 100.");
          throw reanimatedError;
        });
        obj = { initialValues: first };
        obj.keyframes = obj;
        return obj;
      } else {
        const ReanimatedError = InnerKeyframe(obj[7]).ReanimatedError;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Please provide 0 or 'from' keyframe with initial state of your object.");
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
      const InnerKeyframe = reduceMotionV;
      if (this.delayV) {
        /* worklet (recovered source) */ function pnpm_KeyframeTs2(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}
        let obj = { withDelay: InnerKeyframe(closure_1[5]).withDelay, reduceMotion: reduceMotionV };
        pnpm_KeyframeTs2.__closure = obj;
        pnpm_KeyframeTs2.__workletHash = 6884672498893;
        pnpm_KeyframeTs2.__initData = closure_7;
        let pnpm_KeyframeTs3 = pnpm_KeyframeTs2;
      } else {
        pnpm_KeyframeTs3 = /* worklet (recovered source) */ function pnpm_KeyframeTs3(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;};
        obj = { getReduceMotionFromConfig: InnerKeyframe(closure_1[8]).getReduceMotionFromConfig, reduceMotion: reduceMotionV };
        pnpm_KeyframeTs3.__closure = obj;
        pnpm_KeyframeTs3.__workletHash = 14632587413843;
        pnpm_KeyframeTs3.__initData = closure_8;
      }
      return pnpm_KeyframeTs3;
    }
  };
  return callback(InnerKeyframe, items);
}();

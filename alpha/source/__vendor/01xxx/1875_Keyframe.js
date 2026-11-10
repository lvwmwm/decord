// Module ID: 1875
// Function ID: 1876
// Name: Keyframe
// Dependencies: [41, 42, 1697, 1839, 1861, 1841]

// Module 1875 (Keyframe)
import _createClassDefault from "_createClass" /* 42 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1697 */;
import _mod1839 from "module_1839" /* 1839 */;
import utilNative from "utilNative" /* 1841 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let linear;

let tmp2;
let closure_3 = { code: "(function pnpm_KeyframeTs1(){let[keyframes,delayFunction,delay,withTiming,Easing,withSequence,initialValues,makeKeyframeKey,callback]=this.__closure;const animations={};const addAnimation=function(key){const keyframePoints=keyframes[key];if(keyframePoints.length===0){return;}const animation=delayFunction(delay,keyframePoints.length===1?withTiming(keyframePoints[0].value,{duration:keyframePoints[0].duration,easing:keyframePoints[0].easing?keyframePoints[0].easing:Easing.linear}):withSequence(...keyframePoints.map(function(keyframePoint){return withTiming(keyframePoint.value,{duration:keyframePoint.duration,easing:keyframePoint.easing?keyframePoint.easing:Easing.linear});})));if(key.includes('transform')){if(!('transform'in animations)){animations.transform=[];}animations.transform.push({[key.split(':')[1]]:animation});}else{animations[key]=animation;}};Object.keys(initialValues).forEach(function(key){if(key.includes('transform')){initialValues[key].forEach(function(transformProp,index){Object.keys(transformProp).forEach(function(transformPropKey){addAnimation(makeKeyframeKey(index,transformPropKey));});});}else{addAnimation(key);}});return{animations:animations,initialValues:initialValues,callback:callback};})" };
let closure_4 = { code: "(function pnpm_KeyframeTs2(delay,animation){let[withDelay,reduceMotion]=this.__closure;return withDelay(delay,animation,reduceMotion);})" };
let closure_5 = { code: "(function pnpm_KeyframeTs3(_,animation){let[getReduceMotionFromConfig,reduceMotion]=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;})" };
class InnerKeyframe {
  constructor(definitions) {
    const self = this;
    let tmp = _classCallCheck(this, InnerKeyframe);
    this.reduceMotionV = LayoutAnimationType.ReduceMotion.System;
    this.build = () => {
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp = self;
      const delayV = self.delayV;
      const delayFunction = self.getDelayFunction();
      self.parseDefinitions();
      if (!self.parsedAnimation) {
        let items = [closure_2_3, tmp4, delayFunction, delayV, , , , , , ];
        let tmp8 = InnerKeyframe;
        items[4] = InnerKeyframe(closure_2_1[3]).withTiming;
        items[5] = InnerKeyframe(closure_2_1[4]).Easing;
        items[6] = InnerKeyframe(closure_2_1[3]).withSequence;
        items[7] = tmp5;
        items[8] = closure_2_6;
        items[9] = tmp6;
        let c0;
        let c1;
        let c2;
        let c3;
        let c4;
        let c5;
        let c6;
        let c7;
        let c8;
        const tmp11 = items;
        [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
        function pnpm_KeyframeTs1() {
          const animations = {};
          function addAnimation(arr) {
            if (0 !== animations[arr].length) {
              let obj;
              let applyResult;
              const tmp13 = c1;
              const tmp14 = c2;
              if (1 === animations[arr].length) {
                obj = { duration: animations[arr][0].duration, easing: linear };
                let value = arr[0].value;
                const tmp8 = c3;
                if (animations[arr][0].easing) {
                  linear = arr[0].easing;
                } else {
                  linear = linear.linear;
                }
                applyResult = tmp8(value, obj);
              } else {
                const items = [];
                HermesBuiltin.arraySpread(items, animations[arr].map((duration) => {
                  const value = duration.value;
                  const obj = { duration: duration.duration, easing: linear };
                  const tmp = closure_1_3;
                  if (duration.easing) {
                    linear = duration.easing;
                  } else {
                    linear = linear.linear;
                  }
                  return tmp(value, obj);
                }), 0);
                applyResult = HermesBuiltin.apply(c5, items, undefined);
              }
              const tmp13Result = tmp13(tmp14, applyResult);
              if (arr.includes("transform")) {
                if (!("transform" in obj)) {
                  obj.transform = [];
                }
                const transform = tmp11.transform;
                const obj2 = {};
                obj2[arr.split(":")[1]] = tmp13Result;
                transform.push(obj2);
              } else {
                obj[arr] = tmp13Result;
              }
            }
          }
          let keys = Object.keys(initialValues);
          let item = keys.forEach((arr) => {
            if (arr.includes("transform")) {
              arr = c6[arr];
              let item = arr.forEach((item, index) => {
                let closure_0 = index;
                const keys = Object.keys(item);
                item = keys.forEach((item) => {
                  addAnimation(closure_3_7(index, item));
                });
              });
            } else {
              addAnimation(arr);
            }
          });
          let obj2 = { animations, initialValues, callback };
          return obj2;
        }
        const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
        pnpm_KeyframeTs1.__closure = items1;
        pnpm_KeyframeTs1.__workletHash = 2421918238825;
        pnpm_KeyframeTs1.__initData = tmp12;
        tmp.parsedAnimation = pnpm_KeyframeTs1;
      }
      return tmp.parsedAnimation;
    };
    this.definitions = definitions;
  }
}
const entry = {
  key: "parseDefinitions",
  value: function parseDefinitions() {
    let self = this;
    const keyframes = {};
    if (this.definitions.from) {
      if (self.definitions[0]) {
        let tmp9 = globalThis;
        const _Error3 = Error;
        const self6 = this;
        const str3 = "[Reanimated] You cannot provide both keyframe 0 and 'from' as they both specified initial values.";
        const self7 = this;
        let error = new Error("[Reanimated] You cannot provide both keyframe 0 and 'from' as they both specified initial values.");
        throw error;
      } else {
        let num = 0;
        self.definitions[0] = self.definitions.from;
        delete self.definitions["from"];
      }
    }
    if (self.definitions.to) {
      if (self.definitions[100]) {
        const tmp6 = globalThis;
        const _Error2 = Error;
        const self4 = this;
        const str2 = "[Reanimated] You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.";
        const self5 = this;
        const error1 = new Error("[Reanimated] You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
        const tmp8 = error1;
        throw error1;
      } else {
        self.definitions[100] = self.definitions.to;
        delete self.definitions["to"];
      }
    }
    if (self.definitions[0]) {
      const initialValues = self.definitions[0];
      let _Object = Object;
      let keys = Object.keys(initialValues);
      let item = keys.forEach((item) => {
        if ("transform" === item) {
          const tmp2 = globalThis;
          const _Array = Array;
          const tmp3 = first;
          if (Array.isArray(first.transform)) {
            const transform = tmp3.transform;
            item = transform.forEach((item, index) => {
              let closure_0 = index;
              const keys = Object.keys(item);
              item = keys.forEach((item) => {
                if (typeof makeKeyframeKey === "function") {
                  const _HermesInternal = HermesInternal;
                  tmp["" + tmp2 + "_transform:" + item] = [];
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            });
          }
        } else {
          const tmp = obj;
          obj[item] = [];
        }
      });
      let num3 = 500;
      if (self.durationV) {
        num3 = self.durationV;
      }
      let _Array = Array;
      const _Object2 = Object;
      let arr = Array.from(Object.keys(self.definitions));
      const _Number = Number;
      const mapped = arr.map(Number);
      function getAnimationDuration(arg0, arg1) {

      }
      const found = mapped.filter((item) => 0 !== item);
      const sorted = found.sort((arg0, arg1) => arg0 - arg1);
      const item1 = sorted.forEach((item) => {
        let closure_0 = item;
        if (item >= 0) {
          if (item <= 100) {
            const tmp = self;
            const tmp2 = self.definitions[item];
            let transform = tmp2;
            const easing = tmp2.easing;
            delete tmp2["easing"];
            function addKeyPointWith(arg0, arg1) {

            }
            const tmp3 = globalThis;
            const _Object = Object;
            let keys = Object.keys(tmp2);
            item = keys.forEach(function(item) {
              let arr;
              let obj;
              let result;
              const f137283 = (acc, duration) => acc + duration.duration;
              if ("transform" === item) {
                const _Array = Array;
                const tmp14 = transform;
                if (Array.isArray(transform.transform)) {
                  transform = tmp14.transform;
                  item = transform.forEach((item, index) => {
                    let closure_0 = item;
                    const keys = Object.keys(item);
                    item = keys.forEach(function(item) {
                      let arr;
                      let result;
                      if (typeof makeKeyframeKey === "function") {
                        const _HermesInternal = HermesInternal;
                        const combined = "" + tmp2 + "_transform:" + item;
                        if (typeof tmp === "function") {
                          if (combined in index) {
                            if (typeof item === "function") {
                              const obj = { duration: result - arr.reduce(f137283, 0), value: tmp7, easing: tmp9 };
                              result = tmp8 / 100 * closure_1_3;
                              arr = index[combined];
                              tmp14(obj);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            const _Error = Error;
                            self = this;
                            const self2 = this;
                            const error = new Error("[Reanimated] Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                            throw error;
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  });
                }
              } else if (typeof addKeyPointWith === "function") {
                if (item in obj) {
                  const tmp7 = tmp3[item];
                  const tmp9 = getAnimationDuration;
                  if (typeof getAnimationDuration === "function") {
                    obj = { duration: result - arr.reduce(f137283, 0), value: tmp18, easing: tmp2 };
                    arr = tmp3[item];
                    result = tmp / 100 * num3;
                    tmp8(obj);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let _Error = Error;
                  self = this;
                  let self2 = this;
                  let error = new Error("[Reanimated] Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
                  throw error;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
          }
        }
        let error = new Error("[Reanimated] Keyframe should be in between range 0 - 100.");
        throw error;
      });
      return { initialValues, keyframes };
    } else {
      let _Error = Error;
      let self2 = this;
      const str = "[Reanimated] Please provide 0 or 'from' keyframe with initial state of your object.";
      const self3 = this;
      const error2 = new Error("[Reanimated] Please provide 0 or 'from' keyframe with initial state of your object.");
      let tmp2 = error2;
      throw error2;
    }
  }
};
let items = [
  entry,
  {
    key: "duration",
    value: function duration(durationV) {
      this.durationV = durationV;
      return this;
    }
  },
  {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    }
  },
  {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    }
  },
  {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    }
  },
  {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      let pnpm_KeyframeTs3;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp5;
      let tmp6;
      let tmp7;
      const reduceMotionV = this.reduceMotionV;
      if (this.delayV) {
        const items = [closure_4, _mod1839.withDelay, reduceMotionV];
        let c0;
        let c1;
        [tmp12, tmp13, tmp14] = items;
        function pnpm_KeyframeTs2(arg0, arg1) {
          return _undefined(arg0, arg1, c1);
        }
        const items1 = [tmp13, tmp14];
        pnpm_KeyframeTs2.__closure = items1;
        pnpm_KeyframeTs2.__workletHash = 11603357749076;
        pnpm_KeyframeTs2.__initData = tmp12;
        pnpm_KeyframeTs3 = pnpm_KeyframeTs2;
      } else {
        const items2 = [closure_5, utilNative.getReduceMotionFromConfig, reduceMotionV];
        c0 = undefined;
        c1 = undefined;
        [tmp5, tmp6, tmp7] = items2;
        pnpm_KeyframeTs3 = function pnpm_KeyframeTs3(arg0, arg1) {
          arg1.reduceMotion = _undefined(c1);
          return arg1;
        };
        const items3 = [tmp6, tmp7];
        pnpm_KeyframeTs3.__closure = items3;
        pnpm_KeyframeTs3.__workletHash = 15303259028586;
        pnpm_KeyframeTs3.__initData = tmp5;
      }
      return pnpm_KeyframeTs3;
    }
  }
];
let items1 = [{ code: "(function makeKeyframeKey_Pnpm_KeyframeTs4(index,transformProp){return index+\"_transform:\"+transformProp;})" }];
[tmp2] = items1;
function makeKeyframeKey(arg0, arg1) {
  return "" + arg0 + "_transform:" + arg1;
}
makeKeyframeKey.__workletHash = 8190490332018;
makeKeyframeKey.__initData = tmp2;

export const Keyframe = _createClassDefault(InnerKeyframe, items);

// Module ID: 1713
// Function ID: 19263
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 1713 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { code: "function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}" };
const tmp2 = (BaseAnimationBuilder) => {
  class FadingTransition {
    constructor() {
      self = this;
      tmp = __exportStarResult1(this, FadingTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(FadingTransition);
      tmp3 = closure_4;
      if (closure_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      FadingTransition = tmp3Result;
      tmp3Result.build = () => {
        const delayFunction = tmp3Result.getDelayFunction();
        const callbackV = tmp3Result.callbackV;
        const delay = tmp3Result.getDelay();
        const durationV = tmp3Result.durationV;
        let num = 500;
        if (null != durationV) {
          num = durationV;
        }
        const result = num / 2;
        /* worklet (recovered source) */ function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}
        pnpm_FadingTransitionTs1.__closure = { delayFunction, delay, withSequence: delayFunction(callbackV[5]).withSequence, withTiming: delayFunction(callbackV[5]).withTiming, halfDuration: result, withDelay: delayFunction(callbackV[5]).withDelay, callback: callbackV };
        pnpm_FadingTransitionTs1.__workletHash = 3440645628303;
        pnpm_FadingTransitionTs1.__initData = closure_7;
        return pnpm_FadingTransitionTs1;
      };
      return tmp3Result;
    }
  }
  const arg1 = FadingTransition;
  callback2(FadingTransition, BaseAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadingTransition();
      }
    }
  ];
  return callback(FadingTransition, null, items);
}(require("__exportStarResult1").BaseAnimationBuilder);
tmp2.presetName = "FadingTransition";

export const FadingTransition = tmp2;

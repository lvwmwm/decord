// Module ID: 1713
// Function ID: 19264
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1654, 1652]

// Module 1713 (_isNativeReflectConstruct)
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { code: "function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}" };
const tmp2 = ((BaseAnimationBuilder) => {
  class FadingTransition {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_5(apply);
      tmp3 = outer1_4;
      if (outer1_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, combined, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const callbackV = delayFunction.callbackV;
        const delay = delayFunction.getDelay();
        const durationV = delayFunction.durationV;
        let num = 500;
        if (null != durationV) {
          num = durationV;
        }
        const result = num / 2;
        /* worklet (recovered source) */ function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}
        pnpm_FadingTransitionTs1.__closure = { delayFunction, delay, withSequence: FadingTransition(outer2_1[5]).withSequence, withTiming: FadingTransition(outer2_1[5]).withTiming, halfDuration: result, withDelay: FadingTransition(outer2_1[5]).withDelay, callback: callbackV };
        pnpm_FadingTransitionTs1.__workletHash = 3440645628303;
        pnpm_FadingTransitionTs1.__initData = outer2_7;
        return pnpm_FadingTransitionTs1;
      };
      return tmp3Result;
    }
  }
  callback2(FadingTransition, BaseAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadingTransition();
      }
    }
  ];
  return callback(FadingTransition, null, items);
})(require("BaseAnimationBuilder").BaseAnimationBuilder);
tmp2.presetName = "FadingTransition";

export const FadingTransition = tmp2;

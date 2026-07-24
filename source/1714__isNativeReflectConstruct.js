// Module ID: 1714
// Function ID: 19274
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1654, 1634, 1652]

// Module 1714 (_isNativeReflectConstruct)
import linear from "linear";
import BaseAnimationBuilder from "BaseAnimationBuilder";
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
let closure_7 = { code: "function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}" };
const tmp2 = ((BaseAnimationBuilder) => {
  class JumpingTransition {
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
        let num = 300;
        if (null != durationV) {
          num = durationV;
        }
        const result = num / 2;
        let obj = { duration: num };
        /* worklet (recovered source) */ function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}
        obj = { delayFunction, delay, withTiming: JumpingTransition(outer2_1[5]).withTiming, config: obj, withSequence: JumpingTransition(outer2_1[5]).withSequence, halfDuration: result, Easing: JumpingTransition(outer2_1[6]).Easing, callback: callbackV };
        pnpm_JumpingTransitionTs1.__closure = obj;
        pnpm_JumpingTransitionTs1.__workletHash = 11549153259849;
        pnpm_JumpingTransitionTs1.__initData = outer2_7;
        return pnpm_JumpingTransitionTs1;
      };
      return tmp3Result;
    }
  }
  callback2(JumpingTransition, BaseAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new JumpingTransition();
      }
    }
  ];
  return callback(JumpingTransition, null, items);
})(require("BaseAnimationBuilder").BaseAnimationBuilder);
tmp2.presetName = "JumpingTransition";

export const JumpingTransition = tmp2;

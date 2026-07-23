// Module ID: 1716
// Function ID: 19291
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1654, 1652]

// Module 1716 (_isNativeReflectConstruct)
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
let closure_7 = { code: "function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}" };
let tmp2 = ((BaseAnimationBuilder) => {
  class SequencedTransition {
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
      tmp3Result.reversed = false;
      tmp3Result.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const callbackV = delayFunction.callbackV;
        const delay = delayFunction.getDelay();
        let obj = {};
        const durationV = delayFunction.durationV;
        let num = 500;
        if (null != durationV) {
          num = durationV;
        }
        obj.duration = num / 2;
        const reversed = delayFunction.reversed;
        /* worklet (recovered source) */ function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}
        obj = { delayFunction, delay, withSequence: SequencedTransition(outer2_1[5]).withSequence, withTiming: SequencedTransition(outer2_1[5]).withTiming, reverse: reversed, config: obj, callback: callbackV };
        pnpm_SequencedTransitionTs1.__closure = obj;
        pnpm_SequencedTransitionTs1.__workletHash = 255577740024;
        pnpm_SequencedTransitionTs1.__initData = outer2_7;
        return pnpm_SequencedTransitionTs1;
      };
      return tmp3Result;
    }
  }
  callback2(SequencedTransition, BaseAnimationBuilder);
  let obj = {
    key: "reverse",
    value: function reverse() {
      this.reversed = !this.reversed;
      return this;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new SequencedTransition();
    }
  };
  const items1 = [
    obj,
    {
      key: "reverse",
      value: function reverse() {
        const instance = SequencedTransition.createInstance();
        return instance.reverse();
      }
    }
  ];
  return callback(SequencedTransition, items, items1);
})(require("BaseAnimationBuilder").BaseAnimationBuilder);
tmp2.presetName = "SequencedTransition";

export const SequencedTransition = tmp2;

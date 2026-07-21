// Module ID: 1716
// Function ID: 19290
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 1716 (_isNativeReflectConstruct)
import result from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { code: "function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}" };
const tmp2 = (BaseAnimationBuilder) => {
  class SequencedTransition {
    constructor() {
      self = this;
      tmp = result(this, SequencedTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(SequencedTransition);
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
      SequencedTransition = tmp3Result;
      tmp3Result.reversed = false;
      tmp3Result.build = () => {
        const delayFunction = tmp3Result.getDelayFunction();
        const callbackV = tmp3Result.callbackV;
        const delay = tmp3Result.getDelay();
        let obj = {};
        const durationV = tmp3Result.durationV;
        let num = 500;
        if (null != durationV) {
          num = durationV;
        }
        obj.duration = num / 2;
        const reversed = tmp3Result.reversed;
        /* worklet (recovered source) */ function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}
        obj = { delayFunction, delay, withSequence: tmp3Result(callbackV[5]).withSequence, withTiming: tmp3Result(callbackV[5]).withTiming, reverse: reversed, config: obj, callback: callbackV };
        pnpm_SequencedTransitionTs1.__closure = obj;
        pnpm_SequencedTransitionTs1.__workletHash = 255577740024;
        pnpm_SequencedTransitionTs1.__initData = closure_7;
        return pnpm_SequencedTransitionTs1;
      };
      return tmp3Result;
    }
  }
  const arg1 = SequencedTransition;
  callback2(SequencedTransition, BaseAnimationBuilder);
  let obj = {
    key: "reverse",
    value: function reverse() {
      this.reversed = !this.reversed;
      return this;
    }
  };
  const items = [obj];
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
}(require("result").BaseAnimationBuilder);
tmp2.presetName = "SequencedTransition";

export const SequencedTransition = tmp2;

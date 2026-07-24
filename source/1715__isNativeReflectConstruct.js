// Module ID: 1715
// Function ID: 19283
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1715 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _slicedToArray = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _slicedToArray;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class LinearTransition {
    constructor() {
      self = this;
      tmp = outer1_1(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_4(apply);
      tmp3 = outer1_3;
      if (outer1_7()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_4;
        constructResult = Reflect.construct(obj, combined, outer1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = LinearTransition(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}
        pnpm_LinearTransitionTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_LinearTransitionTs1.__workletHash = 16224579837767;
        pnpm_LinearTransitionTs1.__initData = outer2_6;
        return pnpm_LinearTransitionTs1;
      };
      return tmp3Result;
    }
  }
  callback2(LinearTransition, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LinearTransition();
      }
    }
  ];
  return callback(LinearTransition, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "LinearTransition";

export const LinearTransition = tmp2;
export const Layout = tmp2;

// Module ID: 1708
// Function ID: 19119
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1708 (_callSuper)
import _slicedToArray from "_slicedToArray";
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let _slicedToArray = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _slicedToArray;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class StretchInX {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_10(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = StretchInX(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}
        pnpm_StretchTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_StretchTs1.__workletHash = 8236429657427;
        pnpm_StretchTs1.__initData = outer2_6;
        return pnpm_StretchTs1;
      };
      return tmp3;
    }
  }
  callback3(StretchInX, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchInX();
      }
    }
  ];
  return callback(StretchInX, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "StretchInX";
let closure_7 = { code: "function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class StretchInY {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_10(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = StretchInY(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}
        pnpm_StretchTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_StretchTs2.__workletHash = 15758510181808;
        pnpm_StretchTs2.__initData = outer2_7;
        return pnpm_StretchTs2;
      };
      return tmp3;
    }
  }
  callback3(StretchInY, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchInY();
      }
    }
  ];
  return callback(StretchInY, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "StretchInY";
let closure_8 = { code: "function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class StretchOutX {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_10(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = StretchOutX(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}
        pnpm_StretchTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_StretchTs3.__workletHash = 2374207350737;
        pnpm_StretchTs3.__initData = outer2_8;
        return pnpm_StretchTs3;
      };
      return tmp3;
    }
  }
  callback3(StretchOutX, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchOutX();
      }
    }
  ];
  return callback(StretchOutX, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "StretchOutX";
let closure_9 = { code: "function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class StretchOutY {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_10(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = StretchOutY(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}
        pnpm_StretchTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_StretchTs4.__workletHash = 3228047902646;
        pnpm_StretchTs4.__initData = outer2_9;
        return pnpm_StretchTs4;
      };
      return tmp3;
    }
  }
  callback3(StretchOutY, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new StretchOutY();
      }
    }
  ];
  return callback(StretchOutY, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "StretchOutY";

export const StretchInX = tmp2;
export const StretchInY = tmp3;
export const StretchOutX = tmp4;
export const StretchOutY = tmp5;

// Module ID: 1705
// Function ID: 19004
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1705 (_callSuper)
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
let closure_6 = { code: "function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class RollInLeft {
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
        const tmp2 = RollInLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}
        pnpm_RollTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RollTs1.__workletHash = 16303599954051;
        pnpm_RollTs1.__initData = outer2_6;
        return pnpm_RollTs1;
      };
      return tmp3;
    }
  }
  callback3(RollInLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollInLeft();
      }
    }
  ];
  return callback(RollInLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "RollInLeft";
let closure_7 = { code: "function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class RollInRight {
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
        const tmp2 = RollInRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}
        pnpm_RollTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RollTs2.__workletHash = 514820713152;
        pnpm_RollTs2.__initData = outer2_7;
        return pnpm_RollTs2;
      };
      return tmp3;
    }
  }
  callback3(RollInRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollInRight();
      }
    }
  ];
  return callback(RollInRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "RollInRight";
let closure_8 = { code: "function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class RollOutLeft {
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
        const tmp2 = RollOutLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}
        pnpm_RollTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RollTs3.__workletHash = 1569061887041;
        pnpm_RollTs3.__initData = outer2_8;
        return pnpm_RollTs3;
      };
      return tmp3;
    }
  }
  callback3(RollOutLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollOutLeft();
      }
    }
  ];
  return callback(RollOutLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "RollOutLeft";
let closure_9 = { code: "function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class RollOutRight {
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
        const tmp2 = RollOutRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}
        pnpm_RollTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RollTs4.__workletHash = 9663216530406;
        pnpm_RollTs4.__initData = outer2_9;
        return pnpm_RollTs4;
      };
      return tmp3;
    }
  }
  callback3(RollOutRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollOutRight();
      }
    }
  ];
  return callback(RollOutRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "RollOutRight";

export const RollInLeft = tmp2;
export const RollInRight = tmp3;
export const RollOutLeft = tmp4;
export const RollOutRight = tmp5;

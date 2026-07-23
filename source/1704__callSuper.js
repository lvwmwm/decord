// Module ID: 1704
// Function ID: 18989
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1704 (_callSuper)
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
let closure_6 = { code: "function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class PinwheelIn {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_8(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = PinwheelIn(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}
        pnpm_PinwheelTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_PinwheelTs1.__workletHash = 8890961567516;
        pnpm_PinwheelTs1.__initData = outer2_6;
        return pnpm_PinwheelTs1;
      };
      return tmp3;
    }
  }
  callback3(PinwheelIn, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new PinwheelIn();
      }
    }
  ];
  return callback(PinwheelIn, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "PinwheelIn";
let closure_7 = { code: "function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class PinwheelOut {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_8(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = PinwheelOut(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}
        pnpm_PinwheelTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_PinwheelTs2.__workletHash = 15028563671839;
        pnpm_PinwheelTs2.__initData = outer2_7;
        return pnpm_PinwheelTs2;
      };
      return tmp3;
    }
  }
  callback3(PinwheelOut, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new PinwheelOut();
      }
    }
  ];
  return callback(PinwheelOut, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "PinwheelOut";

export const PinwheelIn = tmp2;
export const PinwheelOut = tmp3;

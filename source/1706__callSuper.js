// Module ID: 1706
// Function ID: 19030
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1706 (_callSuper)
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
let closure_6 = { code: "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class RotateInDownLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateInDownLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}
        pnpm_RotateTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs1.__workletHash = 1900668823867;
        pnpm_RotateTs1.__initData = outer2_6;
        return pnpm_RotateTs1;
      };
      return tmp3;
    }
  }
  callback3(RotateInDownLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInDownLeft();
      }
    }
  ];
  return callback(RotateInDownLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "RotateInDownLeft";
let closure_7 = { code: "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class RotateInDownRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateInDownRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}
        pnpm_RotateTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs2.__workletHash = 1066189129817;
        pnpm_RotateTs2.__initData = outer2_7;
        return pnpm_RotateTs2;
      };
      return tmp3;
    }
  }
  callback3(RotateInDownRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInDownRight();
      }
    }
  ];
  return callback(RotateInDownRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "RotateInDownRight";
let closure_8 = { code: "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class RotateInUpLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateInUpLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}
        pnpm_RotateTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs3.__workletHash = 11999620665656;
        pnpm_RotateTs3.__initData = outer2_8;
        return pnpm_RotateTs3;
      };
      return tmp3;
    }
  }
  callback3(RotateInUpLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInUpLeft();
      }
    }
  ];
  return callback(RotateInUpLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "RotateInUpLeft";
let closure_9 = { code: "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class RotateInUpRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateInUpRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}
        pnpm_RotateTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs4.__workletHash = 15143335307550;
        pnpm_RotateTs4.__initData = outer2_9;
        return pnpm_RotateTs4;
      };
      return tmp3;
    }
  }
  callback3(RotateInUpRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateInUpRight();
      }
    }
  ];
  return callback(RotateInUpRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "RotateInUpRight";
let closure_10 = { code: "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp6 = ((ComplexAnimationBuilder) => {
  class RotateOutDownLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateOutDownLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs5.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs5.__workletHash = 11712932777694;
        pnpm_RotateTs5.__initData = outer2_10;
        return pnpm_RotateTs5;
      };
      return tmp3;
    }
  }
  callback3(RotateOutDownLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutDownLeft();
      }
    }
  ];
  return callback(RotateOutDownLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp6.presetName = "RotateOutDownLeft";
let closure_11 = { code: "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp7 = ((ComplexAnimationBuilder) => {
  class RotateOutDownRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateOutDownRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs6.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs6.__workletHash = 16449003298460;
        pnpm_RotateTs6.__initData = outer2_11;
        return pnpm_RotateTs6;
      };
      return tmp3;
    }
  }
  callback3(RotateOutDownRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutDownRight();
      }
    }
  ];
  return callback(RotateOutDownRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp7.presetName = "RotateOutDownRight";
let closure_12 = { code: "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp8 = ((ComplexAnimationBuilder) => {
  class RotateOutUpLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateOutUpLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs7.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs7.__workletHash = 16777964503997;
        pnpm_RotateTs7.__initData = outer2_12;
        return pnpm_RotateTs7;
      };
      return tmp3;
    }
  }
  callback3(RotateOutUpLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutUpLeft();
      }
    }
  ];
  return callback(RotateOutUpLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp8.presetName = "RotateOutUpLeft";
let closure_13 = { code: "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
const tmp9 = ((ComplexAnimationBuilder) => {
  class RotateOutUpRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_14(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = RotateOutUpRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}
        pnpm_RotateTs8.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_RotateTs8.__workletHash = 14312403608563;
        pnpm_RotateTs8.__initData = outer2_13;
        return pnpm_RotateTs8;
      };
      return tmp3;
    }
  }
  callback3(RotateOutUpRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RotateOutUpRight();
      }
    }
  ];
  return callback(RotateOutUpRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp9.presetName = "RotateOutUpRight";

export const RotateInDownLeft = tmp2;
export const RotateInDownRight = tmp3;
export const RotateInUpLeft = tmp4;
export const RotateInUpRight = tmp5;
export const RotateOutDownLeft = tmp6;
export const RotateOutDownRight = tmp7;
export const RotateOutUpLeft = tmp8;
export const RotateOutUpRight = tmp9;

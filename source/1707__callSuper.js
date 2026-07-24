// Module ID: 1707
// Function ID: 19075
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1707 (_callSuper)
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
let closure_6 = { code: "function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class SlideInRight {
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
        const tmp2 = SlideInRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}
        pnpm_SlideTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs1.__workletHash = 10760418577189;
        pnpm_SlideTs1.__initData = outer2_6;
        return pnpm_SlideTs1;
      };
      return tmp3;
    }
  }
  callback3(SlideInRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInRight();
      }
    }
  ];
  return callback(SlideInRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "SlideInRight";
let closure_7 = { code: "function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class SlideInLeft {
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
        const tmp2 = SlideInLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}
        pnpm_SlideTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs2.__workletHash = 2180499422144;
        pnpm_SlideTs2.__initData = outer2_7;
        return pnpm_SlideTs2;
      };
      return tmp3;
    }
  }
  callback3(SlideInLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInLeft();
      }
    }
  ];
  return callback(SlideInLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "SlideInLeft";
let closure_8 = { code: "function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class SlideOutRight {
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
        const tmp2 = SlideOutRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}
        pnpm_SlideTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs3.__workletHash = 12812296890492;
        pnpm_SlideTs3.__initData = outer2_8;
        return pnpm_SlideTs3;
      };
      return tmp3;
    }
  }
  callback3(SlideOutRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutRight();
      }
    }
  ];
  return callback(SlideOutRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "SlideOutRight";
let closure_9 = { code: "function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class SlideOutLeft {
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
        const tmp2 = SlideOutLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}
        pnpm_SlideTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs4.__workletHash = 6273927341006;
        pnpm_SlideTs4.__initData = outer2_9;
        return pnpm_SlideTs4;
      };
      return tmp3;
    }
  }
  callback3(SlideOutLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutLeft();
      }
    }
  ];
  return callback(SlideOutLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "SlideOutLeft";
let closure_10 = { code: "function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}" };
const tmp6 = ((ComplexAnimationBuilder) => {
  class SlideInUp {
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
        const tmp2 = SlideInUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}
        pnpm_SlideTs5.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs5.__workletHash = 9846507393044;
        pnpm_SlideTs5.__initData = outer2_10;
        return pnpm_SlideTs5;
      };
      return tmp3;
    }
  }
  callback3(SlideInUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInUp();
      }
    }
  ];
  return callback(SlideInUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp6.presetName = "SlideInUp";
let closure_11 = { code: "function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}" };
const tmp7 = ((ComplexAnimationBuilder) => {
  class SlideInDown {
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
        const tmp2 = SlideInDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}
        pnpm_SlideTs6.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs6.__workletHash = 9348728185019;
        pnpm_SlideTs6.__initData = outer2_11;
        return pnpm_SlideTs6;
      };
      return tmp3;
    }
  }
  callback3(SlideInDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideInDown();
      }
    }
  ];
  return callback(SlideInDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp7.presetName = "SlideInDown";
let closure_12 = { code: "function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
const tmp8 = ((ComplexAnimationBuilder) => {
  class SlideOutUp {
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
        const tmp2 = SlideOutUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}
        pnpm_SlideTs7.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs7.__workletHash = 14850009730573;
        pnpm_SlideTs7.__initData = outer2_12;
        return pnpm_SlideTs7;
      };
      return tmp3;
    }
  }
  callback3(SlideOutUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutUp();
      }
    }
  ];
  return callback(SlideOutUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp8.presetName = "SlideOutUp";
let closure_13 = { code: "function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
const tmp9 = ((ComplexAnimationBuilder) => {
  class SlideOutDown {
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
        const tmp2 = SlideOutDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}
        pnpm_SlideTs8.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_SlideTs8.__workletHash = 14065812257143;
        pnpm_SlideTs8.__initData = outer2_13;
        return pnpm_SlideTs8;
      };
      return tmp3;
    }
  }
  callback3(SlideOutDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new SlideOutDown();
      }
    }
  ];
  return callback(SlideOutDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp9.presetName = "SlideOutDown";

export const SlideInRight = tmp2;
export const SlideInLeft = tmp3;
export const SlideOutRight = tmp4;
export const SlideOutLeft = tmp5;
export const SlideInUp = tmp6;
export const SlideInDown = tmp7;
export const SlideOutUp = tmp8;
export const SlideOutDown = tmp9;

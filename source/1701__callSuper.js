// Module ID: 1701
// Function ID: 18845
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1701 (_callSuper)
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
let closure_6 = { code: "function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class FadeIn {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeIn(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}
        pnpm_FadeTs1.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs1.__workletHash = 4187624806586;
        pnpm_FadeTs1.__initData = outer2_6;
        return pnpm_FadeTs1;
      };
      return tmp3;
    }
  }
  callback3(FadeIn, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeIn();
      }
    }
  ];
  return callback(FadeIn, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "FadeIn";
let closure_7 = { code: "function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class FadeInRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeInRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}
        pnpm_FadeTs2.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs2.__workletHash = 5328703857616;
        pnpm_FadeTs2.__initData = outer2_7;
        return pnpm_FadeTs2;
      };
      return tmp3;
    }
  }
  callback3(FadeInRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInRight();
      }
    }
  ];
  return callback(FadeInRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "FadeInRight";
let closure_8 = { code: "function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class FadeInLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeInLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}
        pnpm_FadeTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs3.__workletHash = 3876464806620;
        pnpm_FadeTs3.__initData = outer2_8;
        return pnpm_FadeTs3;
      };
      return tmp3;
    }
  }
  callback3(FadeInLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInLeft();
      }
    }
  ];
  return callback(FadeInLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "FadeInLeft";
let closure_9 = { code: "function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class FadeInUp {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeInUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}
        pnpm_FadeTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs4.__workletHash = 14652570092763;
        pnpm_FadeTs4.__initData = outer2_9;
        return pnpm_FadeTs4;
      };
      return tmp3;
    }
  }
  callback3(FadeInUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInUp();
      }
    }
  ];
  return callback(FadeInUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "FadeInUp";
let closure_10 = { code: "function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}" };
const tmp6 = ((ComplexAnimationBuilder) => {
  class FadeInDown {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeInDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}
        pnpm_FadeTs5.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs5.__workletHash = 3370389664855;
        pnpm_FadeTs5.__initData = outer2_10;
        return pnpm_FadeTs5;
      };
      return tmp3;
    }
  }
  callback3(FadeInDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeInDown();
      }
    }
  ];
  return callback(FadeInDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp6.presetName = "FadeInDown";
let closure_11 = { code: "function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}" };
const tmp7 = ((ComplexAnimationBuilder) => {
  class FadeOut {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeOut(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}
        pnpm_FadeTs6.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs6.__workletHash = 12496093665501;
        pnpm_FadeTs6.__initData = outer2_11;
        return pnpm_FadeTs6;
      };
      return tmp3;
    }
  }
  callback3(FadeOut, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOut();
      }
    }
  ];
  return callback(FadeOut, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp7.presetName = "FadeOut";
let closure_12 = { code: "function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp8 = ((ComplexAnimationBuilder) => {
  class FadeOutRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeOutRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_FadeTs7.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs7.__workletHash = 8966511332149;
        pnpm_FadeTs7.__initData = outer2_12;
        return pnpm_FadeTs7;
      };
      return tmp3;
    }
  }
  callback3(FadeOutRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutRight();
      }
    }
  ];
  return callback(FadeOutRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp8.presetName = "FadeOutRight";
let closure_13 = { code: "function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp9 = ((ComplexAnimationBuilder) => {
  class FadeOutLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeOutLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_FadeTs8.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs8.__workletHash = 7570822684087;
        pnpm_FadeTs8.__initData = outer2_13;
        return pnpm_FadeTs8;
      };
      return tmp3;
    }
  }
  callback3(FadeOutLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutLeft();
      }
    }
  ];
  return callback(FadeOutLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp9.presetName = "FadeOutLeft";
let closure_14 = { code: "function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp10 = ((ComplexAnimationBuilder) => {
  class FadeOutUp {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeOutUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_FadeTs9.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs9.__workletHash = 7080775562358;
        pnpm_FadeTs9.__initData = outer2_14;
        return pnpm_FadeTs9;
      };
      return tmp3;
    }
  }
  callback3(FadeOutUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutUp();
      }
    }
  ];
  return callback(FadeOutUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp10.presetName = "FadeOutUp";
let closure_15 = { code: "function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp11 = ((ComplexAnimationBuilder) => {
  class FadeOutDown {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_16(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FadeOutDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        const delay = delayFunction.getDelay();
        /* worklet (recovered source) */ function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_FadeTs10.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_FadeTs10.__workletHash = 4897427935171;
        pnpm_FadeTs10.__initData = outer2_15;
        return pnpm_FadeTs10;
      };
      return tmp3;
    }
  }
  callback3(FadeOutDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FadeOutDown();
      }
    }
  ];
  return callback(FadeOutDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp11.presetName = "FadeOutDown";

export const FadeIn = tmp2;
export const FadeInRight = tmp3;
export const FadeInLeft = tmp4;
export const FadeInUp = tmp5;
export const FadeInDown = tmp6;
export const FadeOut = tmp7;
export const FadeOutRight = tmp8;
export const FadeOutLeft = tmp9;
export const FadeOutUp = tmp10;
export const FadeOutDown = tmp11;

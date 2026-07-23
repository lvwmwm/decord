// Module ID: 1702
// Function ID: 18899
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1652]

// Module 1702 (_callSuper)
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
let closure_6 = { code: "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class FlipInXUp {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInXUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs1.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs1.__workletHash = 17482936202676;
        pnpm_FlipTs1.__initData = outer2_6;
        return pnpm_FlipTs1;
      };
      return tmp3;
    }
  }
  callback3(FlipInXUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInXUp();
      }
    }
  ];
  return callback(FlipInXUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "FlipInXUp";
let closure_7 = { code: "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class FlipInYLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInYLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs2.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs2.__workletHash = 7030831354781;
        pnpm_FlipTs2.__initData = outer2_7;
        return pnpm_FlipTs2;
      };
      return tmp3;
    }
  }
  callback3(FlipInYLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInYLeft();
      }
    }
  ];
  return callback(FlipInYLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "FlipInYLeft";
let closure_8 = { code: "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class FlipInXDown {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInXDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs3.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs3.__workletHash = 8540727794920;
        pnpm_FlipTs3.__initData = outer2_8;
        return pnpm_FlipTs3;
      };
      return tmp3;
    }
  }
  callback3(FlipInXDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInXDown();
      }
    }
  ];
  return callback(FlipInXDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "FlipInXDown";
let closure_9 = { code: "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class FlipInYRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInYRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}
        pnpm_FlipTs4.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs4.__workletHash = 10571583952635;
        pnpm_FlipTs4.__initData = outer2_9;
        return pnpm_FlipTs4;
      };
      return tmp3;
    }
  }
  callback3(FlipInYRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInYRight();
      }
    }
  ];
  return callback(FlipInYRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "FlipInYRight";
let closure_10 = { code: "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
const tmp6 = ((ComplexAnimationBuilder) => {
  class FlipInEasyX {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInEasyX(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}
        pnpm_FlipTs5.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs5.__workletHash = 5139023366989;
        pnpm_FlipTs5.__initData = outer2_10;
        return pnpm_FlipTs5;
      };
      return tmp3;
    }
  }
  callback3(FlipInEasyX, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInEasyX();
      }
    }
  ];
  return callback(FlipInEasyX, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp6.presetName = "FlipInEasyX";
let closure_11 = { code: "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
const tmp7 = ((ComplexAnimationBuilder) => {
  class FlipInEasyY {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipInEasyY(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}
        pnpm_FlipTs6.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs6.__workletHash = 4577193778414;
        pnpm_FlipTs6.__initData = outer2_11;
        return pnpm_FlipTs6;
      };
      return tmp3;
    }
  }
  callback3(FlipInEasyY, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipInEasyY();
      }
    }
  ];
  return callback(FlipInEasyY, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp7.presetName = "FlipInEasyY";
let closure_12 = { code: "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}" };
const tmp8 = ((ComplexAnimationBuilder) => {
  class FlipOutXUp {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutXUp(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}
        pnpm_FlipTs7.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs7.__workletHash = 3506458137332;
        pnpm_FlipTs7.__initData = outer2_12;
        return pnpm_FlipTs7;
      };
      return tmp3;
    }
  }
  callback3(FlipOutXUp, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutXUp();
      }
    }
  ];
  return callback(FlipOutXUp, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp8.presetName = "FlipOutXUp";
let closure_13 = { code: "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}" };
const tmp9 = ((ComplexAnimationBuilder) => {
  class FlipOutYLeft {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutYLeft(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}
        pnpm_FlipTs8.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs8.__workletHash = 17419119819311;
        pnpm_FlipTs8.__initData = outer2_13;
        return pnpm_FlipTs8;
      };
      return tmp3;
    }
  }
  callback3(FlipOutYLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutYLeft();
      }
    }
  ];
  return callback(FlipOutYLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp9.presetName = "FlipOutYLeft";
let closure_14 = { code: "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}" };
const tmp10 = ((ComplexAnimationBuilder) => {
  class FlipOutXDown {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutXDown(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}
        pnpm_FlipTs9.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs9.__workletHash = 9961334044730;
        pnpm_FlipTs9.__initData = outer2_14;
        return pnpm_FlipTs9;
      };
      return tmp3;
    }
  }
  callback3(FlipOutXDown, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutXDown();
      }
    }
  ];
  return callback(FlipOutXDown, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp10.presetName = "FlipOutXDown";
let closure_15 = { code: "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}" };
const tmp11 = ((ComplexAnimationBuilder) => {
  class FlipOutYRight {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutYRight(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}
        pnpm_FlipTs10.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs10.__workletHash = 12107293900726;
        pnpm_FlipTs10.__initData = outer2_15;
        return pnpm_FlipTs10;
      };
      return tmp3;
    }
  }
  callback3(FlipOutYRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutYRight();
      }
    }
  ];
  return callback(FlipOutYRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp11.presetName = "FlipOutYRight";
let closure_16 = { code: "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
const tmp12 = ((ComplexAnimationBuilder) => {
  class FlipOutEasyX {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutEasyX(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}
        pnpm_FlipTs11.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs11.__workletHash = 9417124215224;
        pnpm_FlipTs11.__initData = outer2_16;
        return pnpm_FlipTs11;
      };
      return tmp3;
    }
  }
  callback3(FlipOutEasyX, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutEasyX();
      }
    }
  ];
  return callback(FlipOutEasyX, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp12.presetName = "FlipOutEasyX";
let closure_17 = { code: "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
const tmp13 = ((ComplexAnimationBuilder) => {
  class FlipOutEasyY {
    constructor() {
      tmp = outer1_1(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_18(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = FlipOutEasyY(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _defineProperties = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}
        pnpm_FlipTs12.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
        pnpm_FlipTs12.__workletHash = 4473299233947;
        pnpm_FlipTs12.__initData = outer2_17;
        return pnpm_FlipTs12;
      };
      return tmp3;
    }
  }
  callback3(FlipOutEasyY, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new FlipOutEasyY();
      }
    }
  ];
  return callback(FlipOutEasyY, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp13.presetName = "FlipOutEasyY";

export const FlipInXUp = tmp2;
export const FlipInYLeft = tmp3;
export const FlipInXDown = tmp4;
export const FlipInYRight = tmp5;
export const FlipInEasyX = tmp6;
export const FlipInEasyY = tmp7;
export const FlipOutXUp = tmp8;
export const FlipOutYLeft = tmp9;
export const FlipOutXDown = tmp10;
export const FlipOutYRight = tmp11;
export const FlipOutEasyX = tmp12;
export const FlipOutEasyY = tmp13;

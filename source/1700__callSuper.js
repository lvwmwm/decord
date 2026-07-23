// Module ID: 1700
// Function ID: 18769
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1654, 1652]

// Module 1700 (_callSuper)
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = { code: "function pnpm_BounceTs1(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(1,{duration:duration*0.15})))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}" };
const tmp2 = ((ComplexAnimationBuilder) => {
  class BounceIn {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs1(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(1,{duration:duration*0.15})))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}
        pnpm_BounceTs1.__closure = { delayFunction, delay, withSequence: BounceIn(outer2_1[5]).withSequence, withTiming: BounceIn(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs1.__workletHash = 6814288411244;
        pnpm_BounceTs1.__initData = outer2_7;
        return pnpm_BounceTs1;
      };
      return tmp3;
    }
  }
  callback3(BounceIn, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceIn();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceIn, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "BounceIn";
let closure_8 = { code: "function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class BounceInDown {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}
        pnpm_BounceTs2.__closure = { delayFunction, delay, withSequence: BounceInDown(outer2_1[5]).withSequence, withTiming: BounceInDown(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs2.__workletHash = 4551292686981;
        pnpm_BounceTs2.__initData = outer2_8;
        return pnpm_BounceTs2;
      };
      return tmp3;
    }
  }
  callback3(BounceInDown, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInDown();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInDown, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "BounceInDown";
let closure_9 = { code: "function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class BounceInUp {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}
        pnpm_BounceTs3.__closure = { delayFunction, delay, withSequence: BounceInUp(outer2_1[5]).withSequence, withTiming: BounceInUp(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs3.__workletHash = 11333943352836;
        pnpm_BounceTs3.__initData = outer2_9;
        return pnpm_BounceTs3;
      };
      return tmp3;
    }
  }
  callback3(BounceInUp, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInUp();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInUp, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "BounceInUp";
let closure_10 = { code: "function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class BounceInLeft {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}
        pnpm_BounceTs4.__closure = { delayFunction, delay, withSequence: BounceInLeft(outer2_1[5]).withSequence, withTiming: BounceInLeft(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs4.__workletHash = 10162410157050;
        pnpm_BounceTs4.__initData = outer2_10;
        return pnpm_BounceTs4;
      };
      return tmp3;
    }
  }
  callback3(BounceInLeft, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInLeft();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInLeft, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "BounceInLeft";
let closure_11 = { code: "function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}" };
const tmp6 = ((ComplexAnimationBuilder) => {
  class BounceInRight {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}
        pnpm_BounceTs5.__closure = { delayFunction, delay, withSequence: BounceInRight(outer2_1[5]).withSequence, withTiming: BounceInRight(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs5.__workletHash = 4134237895259;
        pnpm_BounceTs5.__initData = outer2_11;
        return pnpm_BounceTs5;
      };
      return tmp3;
    }
  }
  callback3(BounceInRight, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInRight();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInRight, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp6.presetName = "BounceInRight";
let closure_12 = { code: "function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
const tmp7 = ((ComplexAnimationBuilder) => {
  class BounceOut {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}
        pnpm_BounceTs6.__closure = { delayFunction, delay, withSequence: BounceOut(outer2_1[5]).withSequence, withTiming: BounceOut(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs6.__workletHash = 15864962046507;
        pnpm_BounceTs6.__initData = outer2_12;
        return pnpm_BounceTs6;
      };
      return tmp3;
    }
  }
  callback3(BounceOut, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOut();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOut, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp7.presetName = "BounceOut";
let closure_13 = { code: "function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp8 = ((ComplexAnimationBuilder) => {
  class BounceOutDown {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_BounceTs7.__closure = { delayFunction, delay, withSequence: BounceOutDown(outer2_1[5]).withSequence, withTiming: BounceOutDown(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs7.__workletHash = 4170057933312;
        pnpm_BounceTs7.__initData = outer2_13;
        return pnpm_BounceTs7;
      };
      return tmp3;
    }
  }
  callback3(BounceOutDown, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutDown();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutDown, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp8.presetName = "BounceOutDown";
let closure_14 = { code: "function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp9 = ((ComplexAnimationBuilder) => {
  class BounceOutUp {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_BounceTs8.__closure = { delayFunction, delay, withSequence: BounceOutUp(outer2_1[5]).withSequence, withTiming: BounceOutUp(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs8.__workletHash = 8059944917039;
        pnpm_BounceTs8.__initData = outer2_14;
        return pnpm_BounceTs8;
      };
      return tmp3;
    }
  }
  callback3(BounceOutUp, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutUp();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutUp, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp9.presetName = "BounceOutUp";
let closure_15 = { code: "function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp10 = ((ComplexAnimationBuilder) => {
  class BounceOutLeft {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_BounceTs9.__closure = { delayFunction, delay, withSequence: BounceOutLeft(outer2_1[5]).withSequence, withTiming: BounceOutLeft(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs9.__workletHash = 6930767645815;
        pnpm_BounceTs9.__initData = outer2_15;
        return pnpm_BounceTs9;
      };
      return tmp3;
    }
  }
  callback3(BounceOutLeft, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutLeft();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutLeft, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp10.presetName = "BounceOutLeft";
let closure_16 = { code: "function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp11 = ((ComplexAnimationBuilder) => {
  class BounceOutRight {
    constructor() {
      tmp = outer1_2(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_17(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_BounceTs10.__closure = { delayFunction, delay, withSequence: BounceOutRight(outer2_1[5]).withSequence, withTiming: BounceOutRight(outer2_1[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs10.__workletHash = 11465945086863;
        pnpm_BounceTs10.__initData = outer2_16;
        return pnpm_BounceTs10;
      };
      return tmp3;
    }
  }
  callback3(BounceOutRight, ComplexAnimationBuilder);
  let obj = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 600;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  let items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutRight();
    }
  };
  let items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutRight, items, items1);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp11.presetName = "BounceOutRight";

export const BounceIn = tmp2;
export const BounceInDown = tmp3;
export const BounceInUp = tmp4;
export const BounceInLeft = tmp5;
export const BounceInRight = tmp6;
export const BounceOut = tmp7;
export const BounceOutDown = tmp8;
export const BounceOutUp = tmp9;
export const BounceOutLeft = tmp10;
export const BounceOutRight = tmp11;

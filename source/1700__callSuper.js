// Module ID: 1700
// Function ID: 18768
// Name: _callSuper
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 1700 (_callSuper)
import result from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";

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
  return closure_4(arg0, constructResult);
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
const tmp2 = (ComplexAnimationBuilder) => {
  class BounceIn {
    constructor() {
      tmp = result(this, BounceIn);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceIn, items.concat(array));
      BounceIn = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs1(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(1,{duration:duration*0.15})))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}
        pnpm_BounceTs1.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs1.__workletHash = 6814288411244;
        pnpm_BounceTs1.__initData = closure_7;
        return pnpm_BounceTs1;
      };
      return tmp3;
    }
  }
  const arg1 = BounceIn;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceIn();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceIn, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp2.presetName = "BounceIn";
let closure_8 = { code: "function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class BounceInDown {
    constructor() {
      tmp = result(this, BounceInDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceInDown, items.concat(array));
      BounceInDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}
        pnpm_BounceTs2.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs2.__workletHash = 4551292686981;
        pnpm_BounceTs2.__initData = closure_8;
        return pnpm_BounceTs2;
      };
      return tmp3;
    }
  }
  const arg1 = BounceInDown;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInDown();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInDown, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp3.presetName = "BounceInDown";
let closure_9 = { code: "function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class BounceInUp {
    constructor() {
      tmp = result(this, BounceInUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceInUp, items.concat(array));
      BounceInUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}
        pnpm_BounceTs3.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs3.__workletHash = 11333943352836;
        pnpm_BounceTs3.__initData = closure_9;
        return pnpm_BounceTs3;
      };
      return tmp3;
    }
  }
  const arg1 = BounceInUp;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInUp();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInUp, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp4.presetName = "BounceInUp";
let closure_10 = { code: "function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class BounceInLeft {
    constructor() {
      tmp = result(this, BounceInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceInLeft, items.concat(array));
      BounceInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}
        pnpm_BounceTs4.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs4.__workletHash = 10162410157050;
        pnpm_BounceTs4.__initData = closure_10;
        return pnpm_BounceTs4;
      };
      return tmp3;
    }
  }
  const arg1 = BounceInLeft;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInLeft();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInLeft, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp5.presetName = "BounceInLeft";
let closure_11 = { code: "function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}" };
const tmp6 = (ComplexAnimationBuilder) => {
  class BounceInRight {
    constructor() {
      tmp = result(this, BounceInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceInRight, items.concat(array));
      BounceInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}
        pnpm_BounceTs5.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs5.__workletHash = 4134237895259;
        pnpm_BounceTs5.__initData = closure_11;
        return pnpm_BounceTs5;
      };
      return tmp3;
    }
  }
  const arg1 = BounceInRight;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceInRight();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceInRight, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp6.presetName = "BounceInRight";
let closure_12 = { code: "function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
const tmp7 = (ComplexAnimationBuilder) => {
  class BounceOut {
    constructor() {
      tmp = result(this, BounceOut);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceOut, items.concat(array));
      BounceOut = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}
        pnpm_BounceTs6.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs6.__workletHash = 15864962046507;
        pnpm_BounceTs6.__initData = closure_12;
        return pnpm_BounceTs6;
      };
      return tmp3;
    }
  }
  const arg1 = BounceOut;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOut();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOut, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp7.presetName = "BounceOut";
let closure_13 = { code: "function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp8 = (ComplexAnimationBuilder) => {
  class BounceOutDown {
    constructor() {
      tmp = result(this, BounceOutDown);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceOutDown, items.concat(array));
      BounceOutDown = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_BounceTs7.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs7.__workletHash = 4170057933312;
        pnpm_BounceTs7.__initData = closure_13;
        return pnpm_BounceTs7;
      };
      return tmp3;
    }
  }
  const arg1 = BounceOutDown;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutDown();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutDown, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp8.presetName = "BounceOutDown";
let closure_14 = { code: "function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
const tmp9 = (ComplexAnimationBuilder) => {
  class BounceOutUp {
    constructor() {
      tmp = result(this, BounceOutUp);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceOutUp, items.concat(array));
      BounceOutUp = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}
        pnpm_BounceTs8.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs8.__workletHash = 8059944917039;
        pnpm_BounceTs8.__initData = closure_14;
        return pnpm_BounceTs8;
      };
      return tmp3;
    }
  }
  const arg1 = BounceOutUp;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutUp();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutUp, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp9.presetName = "BounceOutUp";
let closure_15 = { code: "function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp10 = (ComplexAnimationBuilder) => {
  class BounceOutLeft {
    constructor() {
      tmp = result(this, BounceOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceOutLeft, items.concat(array));
      BounceOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_BounceTs9.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs9.__workletHash = 6930767645815;
        pnpm_BounceTs9.__initData = closure_15;
        return pnpm_BounceTs9;
      };
      return tmp3;
    }
  }
  const arg1 = BounceOutLeft;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutLeft();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutLeft, items, items1);
}(require("result").ComplexAnimationBuilder);
tmp10.presetName = "BounceOutLeft";
let closure_16 = { code: "function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
const tmp11 = (ComplexAnimationBuilder) => {
  class BounceOutRight {
    constructor() {
      tmp = result(this, BounceOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_17(this, BounceOutRight, items.concat(array));
      BounceOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}
        pnpm_BounceTs10.__closure = { delayFunction, delay, withSequence: delayFunction(delay[5]).withSequence, withTiming: delayFunction(delay[5]).withTiming, duration, initialValues, callback: callbackV };
        pnpm_BounceTs10.__workletHash = 11465945086863;
        pnpm_BounceTs10.__initData = closure_16;
        return pnpm_BounceTs10;
      };
      return tmp3;
    }
  }
  const arg1 = BounceOutRight;
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
  const items = [obj];
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new BounceOutRight();
    }
  };
  const items1 = [
    obj,
    {
      key: "getDuration",
      value: function getDuration() {
        return 600;
      }
    }
  ];
  return callback(BounceOutRight, items, items1);
}(require("result").ComplexAnimationBuilder);
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

// Module ID: 1703
// Function ID: 18964
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1654, 1652]

// Module 1703 (_callSuper)
import _slicedToArray from "_slicedToArray";
import withClamp from "withClamp";
import BaseAnimationBuilder from "BaseAnimationBuilder";
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
let closure_8 = { code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}" };
let tmp2 = ((ComplexAnimationBuilder) => {
  class LightSpeedInRight {
    constructor() {
      tmp = outer1_3(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_12(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = outer2_2(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _slicedToArray = tmp4;
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs1.__closure = { delayFunction, delay, withTiming: LightSpeedInRight(outer2_1[6]).withTiming, duration, animation: first, config: tmp2[1], withSequence: LightSpeedInRight(outer2_1[6]).withSequence, initialValues, callback: callbackV };
        pnpm_LightspeedTs1.__workletHash = 14533434616043;
        pnpm_LightspeedTs1.__initData = outer2_8;
        return pnpm_LightspeedTs1;
      };
      return tmp3;
    }
  }
  callback3(LightSpeedInRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedInRight();
      }
    }
  ];
  return callback(LightSpeedInRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp2.presetName = "LightSpeedInRight";
let closure_9 = { code: "function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}" };
let tmp3 = ((ComplexAnimationBuilder) => {
  class LightSpeedInLeft {
    constructor() {
      tmp = outer1_3(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_12(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = outer2_2(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _slicedToArray = tmp4;
        const delay = delayFunction.getDelay();
        const duration = delayFunction.getDuration();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs2.__closure = { delayFunction, delay, withTiming: LightSpeedInLeft(outer2_1[6]).withTiming, duration, animation: first, config: tmp2[1], withSequence: LightSpeedInLeft(outer2_1[6]).withSequence, initialValues, callback: callbackV };
        pnpm_LightspeedTs2.__workletHash = 7816705328872;
        pnpm_LightspeedTs2.__initData = outer2_9;
        return pnpm_LightspeedTs2;
      };
      return tmp3;
    }
  }
  callback3(LightSpeedInLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedInLeft();
      }
    }
  ];
  return callback(LightSpeedInLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp3.presetName = "LightSpeedInLeft";
let closure_10 = { code: "function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
const tmp4 = ((ComplexAnimationBuilder) => {
  class LightSpeedOutRight {
    constructor() {
      tmp = outer1_3(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_12(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = outer2_2(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _slicedToArray = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs3.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_LightspeedTs3.__workletHash = 222611120175;
        pnpm_LightspeedTs3.__initData = outer2_10;
        return pnpm_LightspeedTs3;
      };
      return tmp3;
    }
  }
  callback3(LightSpeedOutRight, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedOutRight();
      }
    }
  ];
  return callback(LightSpeedOutRight, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp4.presetName = "LightSpeedOutRight";
let closure_11 = { code: "function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
const tmp5 = ((ComplexAnimationBuilder) => {
  class LightSpeedOutLeft {
    constructor() {
      tmp = outer1_3(this, concat);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_12(this, concat, items.concat(array));
      concat = tmp3;
      tmp3.build = () => {
        delayFunction = delayFunction.getDelayFunction();
        const tmp2 = outer2_2(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        let _slicedToArray = tmp4;
        const delay = delayFunction.getDelay();
        const callbackV = delayFunction.callbackV;
        const initialValues = delayFunction.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs4.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
        pnpm_LightspeedTs4.__workletHash = 766058259752;
        pnpm_LightspeedTs4.__initData = outer2_11;
        return pnpm_LightspeedTs4;
      };
      return tmp3;
    }
  }
  callback3(LightSpeedOutLeft, ComplexAnimationBuilder);
  let items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedOutLeft();
      }
    }
  ];
  return callback(LightSpeedOutLeft, null, items);
})(require("BaseAnimationBuilder").ComplexAnimationBuilder);
tmp5.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = tmp2;
export const LightSpeedInLeft = tmp3;
export const LightSpeedOutRight = tmp4;
export const LightSpeedOutLeft = tmp5;

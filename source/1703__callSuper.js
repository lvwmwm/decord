// Module ID: 1703
// Function ID: 18958
// Name: _callSuper
// Dependencies: []

// Module 1703 (_callSuper)
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
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = { code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class LightSpeedInRight {
    constructor() {
      tmp = closure_3(this, LightSpeedInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_12(this, LightSpeedInRight, items.concat(array));
      LightSpeedInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = tmp4(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs1.__closure = { delayFunction, delay, withTiming: delayFunction(first[6]).withTiming, duration, animation: first, config: tmp4, withSequence: delayFunction(first[6]).withSequence, initialValues, callback: callbackV };
        pnpm_LightspeedTs1.__workletHash = 14533434616043;
        pnpm_LightspeedTs1.__initData = closure_8;
        return pnpm_LightspeedTs1;
      };
      return tmp3;
    }
  }
  const arg1 = LightSpeedInRight;
  callback3(LightSpeedInRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedInRight();
      }
    }
  ];
  return callback(LightSpeedInRight, null, items);
}(arg1(dependencyMap[7]).ComplexAnimationBuilder);
tmp2.presetName = "LightSpeedInRight";
let closure_9 = { code: "function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class LightSpeedInLeft {
    constructor() {
      tmp = closure_3(this, LightSpeedInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_12(this, LightSpeedInLeft, items.concat(array));
      LightSpeedInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = tmp4(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const duration = tmp3.getDuration();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs2.__closure = { delayFunction, delay, withTiming: delayFunction(first[6]).withTiming, duration, animation: first, config: tmp4, withSequence: delayFunction(first[6]).withSequence, initialValues, callback: callbackV };
        pnpm_LightspeedTs2.__workletHash = 7816705328872;
        pnpm_LightspeedTs2.__initData = closure_9;
        return pnpm_LightspeedTs2;
      };
      return tmp3;
    }
  }
  const arg1 = LightSpeedInLeft;
  callback3(LightSpeedInLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedInLeft();
      }
    }
  ];
  return callback(LightSpeedInLeft, null, items);
}(arg1(dependencyMap[7]).ComplexAnimationBuilder);
tmp3.presetName = "LightSpeedInLeft";
let closure_10 = { code: "function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class LightSpeedOutRight {
    constructor() {
      tmp = closure_3(this, LightSpeedOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_12(this, LightSpeedOutRight, items.concat(array));
      LightSpeedOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = tmp4(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_LightspeedTs3.__workletHash = 222611120175;
        pnpm_LightspeedTs3.__initData = closure_10;
        return pnpm_LightspeedTs3;
      };
      return tmp3;
    }
  }
  const arg1 = LightSpeedOutRight;
  callback3(LightSpeedOutRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedOutRight();
      }
    }
  ];
  return callback(LightSpeedOutRight, null, items);
}(arg1(dependencyMap[7]).ComplexAnimationBuilder);
tmp4.presetName = "LightSpeedOutRight";
let closure_11 = { code: "function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class LightSpeedOutLeft {
    constructor() {
      tmp = closure_3(this, LightSpeedOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_12(this, LightSpeedOutLeft, items.concat(array));
      LightSpeedOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = tmp4(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}
        pnpm_LightspeedTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_LightspeedTs4.__workletHash = 766058259752;
        pnpm_LightspeedTs4.__initData = closure_11;
        return pnpm_LightspeedTs4;
      };
      return tmp3;
    }
  }
  const arg1 = LightSpeedOutLeft;
  callback3(LightSpeedOutLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new LightSpeedOutLeft();
      }
    }
  ];
  return callback(LightSpeedOutLeft, null, items);
}(arg1(dependencyMap[7]).ComplexAnimationBuilder);
tmp5.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = tmp2;
export const LightSpeedInLeft = tmp3;
export const LightSpeedOutRight = tmp4;
export const LightSpeedOutLeft = tmp5;

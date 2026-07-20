// Module ID: 1705
// Function ID: 18998
// Name: _callSuper
// Dependencies: []

// Module 1705 (_callSuper)
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
  return closure_3(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { code: "function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}" };
const tmp2 = (ComplexAnimationBuilder) => {
  class RollInLeft {
    constructor() {
      tmp = closure_1(this, RollInLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, RollInLeft, items.concat(array));
      RollInLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}
        pnpm_RollTs1.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RollTs1.__workletHash = 16303599954051;
        pnpm_RollTs1.__initData = closure_6;
        return pnpm_RollTs1;
      };
      return tmp3;
    }
  }
  let closure_0 = RollInLeft;
  callback3(RollInLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollInLeft();
      }
    }
  ];
  return callback(RollInLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp2.presetName = "RollInLeft";
let closure_7 = { code: "function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}" };
const tmp3 = (ComplexAnimationBuilder) => {
  class RollInRight {
    constructor() {
      tmp = closure_1(this, RollInRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, RollInRight, items.concat(array));
      RollInRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}
        pnpm_RollTs2.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RollTs2.__workletHash = 514820713152;
        pnpm_RollTs2.__initData = closure_7;
        return pnpm_RollTs2;
      };
      return tmp3;
    }
  }
  let closure_0 = RollInRight;
  callback3(RollInRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollInRight();
      }
    }
  ];
  return callback(RollInRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp3.presetName = "RollInRight";
let closure_8 = { code: "function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
const tmp4 = (ComplexAnimationBuilder) => {
  class RollOutLeft {
    constructor() {
      tmp = closure_1(this, RollOutLeft);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, RollOutLeft, items.concat(array));
      RollOutLeft = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}
        pnpm_RollTs3.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RollTs3.__workletHash = 1569061887041;
        pnpm_RollTs3.__initData = closure_8;
        return pnpm_RollTs3;
      };
      return tmp3;
    }
  }
  let closure_0 = RollOutLeft;
  callback3(RollOutLeft, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollOutLeft();
      }
    }
  ];
  return callback(RollOutLeft, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp4.presetName = "RollOutLeft";
let closure_9 = { code: "function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
const tmp5 = (ComplexAnimationBuilder) => {
  class RollOutRight {
    constructor() {
      tmp = closure_1(this, RollOutRight);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_10(this, RollOutRight, items.concat(array));
      RollOutRight = tmp3;
      tmp3.build = () => {
        const delayFunction = tmp3.getDelayFunction();
        const tmp2 = delayFunction(delayFunction.getAnimationAndConfig(), 2);
        const first = tmp2[0];
        const tmp4 = tmp2[1];
        const delay = tmp3.getDelay();
        const callbackV = tmp3.callbackV;
        const initialValues = tmp3.initialValues;
        /* worklet (recovered source) */ function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}
        pnpm_RollTs4.__closure = { delayFunction, delay, animation: first, config: tmp4, initialValues, callback: callbackV };
        pnpm_RollTs4.__workletHash = 9663216530406;
        pnpm_RollTs4.__initData = closure_9;
        return pnpm_RollTs4;
      };
      return tmp3;
    }
  }
  let closure_0 = RollOutRight;
  callback3(RollOutRight, ComplexAnimationBuilder);
  const items = [
    {
      key: "createInstance",
      value: function createInstance() {
        return new RollOutRight();
      }
    }
  ];
  return callback(RollOutRight, null, items);
}(arg1(dependencyMap[6]).ComplexAnimationBuilder);
tmp5.presetName = "RollOutRight";

export const RollInLeft = tmp2;
export const RollInRight = tmp3;
export const RollOutLeft = tmp4;
export const RollOutRight = tmp5;
